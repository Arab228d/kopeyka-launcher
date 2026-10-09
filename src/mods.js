const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const AdmZip = require('adm-zip');
const { downloadFile, inside } = require('./installer');
const { validateSettings } = require('./config');
const API = 'https://api.modrinth.com/v2';
const projectMedia = new Map();
const jarMedia = new Map();
const failedMedia = new Map();
const headers = { 'User-Agent': `KOPEYKA-Laucher/${require('../package.json').version} (Minecraft desktop launcher)` };
function profileDirectory(config) {
  validateSettings(config, config);
  return config.loader === 'vanilla' ? config.gameDirectory : inside(config.gameDirectory, `profiles/${config.version}-${config.loader}`);
}
async function modrinth(route, request = fetch, timeout = 30000) {
  const response = await request(API + route, { headers, signal: AbortSignal.timeout(timeout) });
  if (!response.ok) throw new Error(`Modrinth: HTTP ${response.status}. Попробуйте позже.`);
  return response.json();
}
function requireLoader(config) {
  if (!['forge', 'fabric'].includes(config.loader)) throw new Error('Для модов выбери Forge или Fabric.');
}
function compatible(version, config) {
  return version.game_versions?.includes(config.version) && version.loaders?.includes(config.loader) && !['server_only', 'dedicated_server_only'].includes(version.environment);
}
async function searchMods(config, query, request) {
  requireLoader(config);
  const params = new URLSearchParams({ query: String(query || '').slice(0, 120), limit: '24', index: 'downloads', facets: JSON.stringify([['project_type:mod'], [`versions:${config.version}`], [`categories:${config.loader}`], ['client_side:required', 'client_side:optional']]) });
  const data = await modrinth(`/search?${params}`, request);
  return data.hits.map(hit => {
    const result = { id: hit.project_id, title: hit.title, description: hit.description, author: hit.author, downloads: hit.downloads,
      icon: mediaUrl(hit.icon_url), gallery: [...new Set([hit.featured_gallery, ...(hit.gallery || [])].map(mediaUrl).filter(Boolean))].slice(0, 6) };
    projectMedia.set(result.id, { icon: result.icon, gallery: result.gallery });
    return result;
  });
}
function mediaUrl(value) {
  try { const url = new URL(value); return url.protocol === 'https:' && url.hostname === 'cdn.modrinth.com' ? url.href : null; } catch { return null; }
}
async function resolveMods(config, projects, request) {
  requireLoader(config);
  if (!Array.isArray(projects) || !projects.length || projects.length > 24) throw new Error('Выбери от 1 до 24 модов.');
  const selected = new Map(), resolving = new Set();
  async function visit(project, exactVersion) {
    if (!/^[a-zA-Z0-9_-]{1,100}$/.test(project || exactVersion || '')) throw new Error('Некорректный идентификатор мода.');
    let version;
    if (exactVersion) version = await modrinth(`/version/${encodeURIComponent(exactVersion)}`, request);
    else {
      const params = new URLSearchParams({ game_versions: JSON.stringify([config.version]), loaders: JSON.stringify([config.loader]), include_changelog: 'false' });
      const list = await modrinth(`/project/${encodeURIComponent(project)}/version?${params}`, request);
      version = list.find(v => compatible(v, config) && v.version_type === 'release') || list.find(v => compatible(v, config));
    }
    if (!version || !compatible(version, config)) throw new Error(`Нет подходящей версии мода ${project || exactVersion} для ${config.version} / ${config.loader}.`);
    const previous = selected.get(version.project_id);
    if (previous) {
      if (exactVersion && previous.id !== version.id) throw new Error(`Моды требуют разные версии зависимости ${version.project_id}.`);
      return;
    }
    if (selected.size >= 80) throw new Error('Слишком много зависимостей.');
    selected.set(version.project_id, version);
    if (resolving.has(version.id)) return;
    resolving.add(version.id);
    for (const dep of version.dependencies || []) {
      if (dep.dependency_type !== 'required') continue;
      if (!dep.project_id && !dep.version_id) throw new Error(`Мод ${version.name} требует внешний файл ${dep.file_name || ''}. Добавь его вручную.`);
      await visit(dep.project_id, dep.version_id);
    }
    resolving.delete(version.id);
  }
  for (const project of projects) await visit(project);
  for (const version of selected.values()) for (const dep of version.dependencies || []) {
    if (dep.dependency_type === 'incompatible' && [...selected.values()].some(v => v.project_id === dep.project_id || v.id === dep.version_id)) throw new Error(`Несовместимые моды: ${version.name}.`);
  }
  return [...selected.values()];
}
function safeJar(name) {
  if (typeof name !== 'string' || !/^[^<>:"/\\|?*\x00-\x1f]+\.jar$/i.test(name) || name.endsWith(' ') || name.startsWith('.')) throw new Error('Некорректное имя JAR-файла.');
  return name;
}
async function readRegistry(root) {
  try { return JSON.parse(await fs.readFile(path.join(root, 'mods-index.json'), 'utf8')); } catch { return []; }
}
async function installMods(config, projects, report = () => {}, request = fetch) {
  const versions = await resolveMods(config, projects, request);
  const root = profileDirectory(config), registry = await readRegistry(root);
  // Prepare every file before publishing any of them to the mods folder.
  const staged = [], destinations = new Map();
  for (const version of versions) {
    const file = version.files.find(f => f.primary && /\.jar$/i.test(f.filename)) || version.files.find(f => /\.jar$/i.test(f.filename));
    if (!file || new URL(file.url).protocol !== 'https:') throw new Error(`У ${version.name} нет JAR-файла.`);
    const name = safeJar(file.filename);
    if (destinations.has(name.toLowerCase()) && destinations.get(name.toLowerCase()) !== file.hashes.sha1) throw new Error(`Разные моды используют имя ${name}. Установку остановили.`);
    destinations.set(name.toLowerCase(), file.hashes.sha1);
    const destination = inside(root, `mods/${name}`);
    const existing = registry.find(v => v.project === version.project_id);
    // Keep existing versions intact rather than silently mixing dependencies.
    if (existing && existing.version !== version.id) throw new Error(`Уже установлена другая версия ${existing.title}. Удали её перед заменой.`);
    try {
      const digest = crypto.createHash('sha1').update(await fs.readFile(destination)).digest('hex');
      if (digest !== file.hashes.sha1) throw new Error(`Файл ${name} уже существует с другим содержимым.`);
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
    const target = inside(root, `.downloads/${file.hashes.sha1}-${name}`);
    report({ message: `Скачиваем ${version.name}…`, percent: null });
    await downloadFile({ url: file.url, sha1: file.hashes.sha1, size: file.size }, target, (done, total) => report({ message: `Скачиваем ${version.name}…`, percent: total ? done / total * 100 : null }), request);
    staged.push({ target, destination, entry: { project: version.project_id, version: version.id, title: version.name, file: name, ...projectMedia.get(version.project_id) } });
  }
  await fs.mkdir(path.join(root, 'mods'), { recursive: true });
  for (const file of staged) {
    await fs.copyFile(file.target, file.destination, require('node:fs').constants.COPYFILE_EXCL).catch(error => { if (error.code !== 'EEXIST') throw error; });
    const existing = registry.find(v => v.project === file.entry.project);
    if (existing) Object.assign(existing, file.entry); else registry.push(file.entry);
  }
  await fs.writeFile(path.join(root, 'mods-index.json.tmp'), JSON.stringify(registry, null, 2));
  await fs.rename(path.join(root, 'mods-index.json.tmp'), path.join(root, 'mods-index.json'));
  return staged.map(v => v.entry.file);
}
async function importMods(config, files) {
  requireLoader(config);
  const root = profileDirectory(config), jobs = [], names = new Map();
  for (const file of files) {
    const name = safeJar(path.basename(file));
    const archive = new AdmZip(file);
    const fabric = archive.getEntry('fabric.mod.json'), forge = archive.getEntry('META-INF/mods.toml') || archive.getEntry('mcmod.info');
    if (!fabric && !forge) throw new Error(`${name}: это не мод Forge/Fabric.`);
    if (config.loader === 'forge' && !forge || config.loader === 'fabric' && !fabric) throw new Error(`${name}: мод для другого загрузчика.`);
    const bytes = await fs.readFile(file), destination = inside(root, `mods/${name}`);
    if (names.has(name.toLowerCase()) && !bytes.equals(names.get(name.toLowerCase()))) throw new Error(`Выбраны разные моды с одинаковым именем ${name}.`);
    names.set(name.toLowerCase(), bytes);
    try { if (!bytes.equals(await fs.readFile(destination))) throw new Error(`${name} уже существует. Сначала удали старый мод.`); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    jobs.push({ bytes, destination, name });
  }
  await fs.mkdir(path.join(root, 'mods'), { recursive: true });
  for (const job of jobs) await fs.writeFile(job.destination, job.bytes, { flag: 'wx' }).catch(error => { if (error.code !== 'EEXIST') throw error; });
  return jobs.map(v => v.name);
}
async function listMods(config, request = fetch, hydrateMedia = false) {
  const root = profileDirectory(config), registry = await readRegistry(root);
  const files = await fs.readdir(path.join(root, 'mods')).catch(error => { if (error.code === 'ENOENT') return []; throw error; });
  let changed = false;
  const result = await Promise.all(files.filter(f => /\.jar(?:\.disabled)?$/i.test(f)).map(async file => {
    const entry = registry.find(v => v.file === file.replace(/\.disabled$/, ''));
    const local = await localModMedia(inside(root, `mods/${file}`));
    if (hydrateMedia && entry && !entry.mediaChecked && /^[a-zA-Z0-9]{8}$/.test(entry.project) && Date.now() - (failedMedia.get(entry.project) || 0) > 60000) {
      try {
        let media = projectMedia.get(entry.project);
        if (!media) {
          const project = await modrinth(`/project/${entry.project}`, request, 3000);
          media = { icon: mediaUrl(project.icon_url), gallery: (project.gallery || []).map(item => mediaUrl(item.url)).filter(Boolean).slice(0,6) };
          projectMedia.set(entry.project, media);
        }
        Object.assign(entry, media, { mediaChecked: true }); changed = true;
      } catch { failedMedia.set(entry.project, Date.now()); }
    }
    return { file, enabled: !file.endsWith('.disabled'), title: local.title || entry?.title || file,
      icon: local.icon || mediaUrl(entry?.icon), gallery: (entry?.gallery || []).map(mediaUrl).filter(Boolean) };
  }));
  if (changed) await fs.writeFile(path.join(root, 'mods-index.json'), JSON.stringify(registry, null, 2)).catch(() => {});
  return result;
}
async function localModMedia(file) {
  try {
    const stat = await fs.stat(file), key = `${file}:${stat.size}:${stat.mtimeMs}`;
    if (jarMedia.has(key)) return jarMedia.get(key);
    const zip = new AdmZip(file); let title, iconPath;
    const fabric = zip.getEntry('fabric.mod.json');
    if (fabric) {
      const metadata = JSON.parse(fabric.getData().toString('utf8'));
      title = typeof metadata.name === 'string' ? metadata.name : undefined;
      iconPath = typeof metadata.icon === 'string' ? metadata.icon : Object.entries(metadata.icon || {}).sort((a,b) => Number(b[0]) - Number(a[0]))[0]?.[1];
    } else {
      const toml = zip.getEntry('META-INF/mods.toml')?.getData().toString('utf8');
      title = /displayName\s*=\s*"([^"]+)"/.exec(toml || '')?.[1];
      iconPath = /logoFile\s*=\s*"([^"]+)"/.exec(toml || '')?.[1];
    }
    const image = typeof iconPath === 'string' && /\.png$/i.test(iconPath) ? zip.getEntry(iconPath) : null;
    let icon = null;
    if (image && image.header.size <= 1024 * 1024) {
      const bytes = image.getData();
      if (bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) icon = `data:image/png;base64,${bytes.toString('base64')}`;
    }
    const result = { title, icon }; jarMedia.set(key, result);
    if (jarMedia.size > 200) jarMedia.delete(jarMedia.keys().next().value);
    return result;
  } catch { return {}; }
}
async function toggleMod(config, file) {
  if (!/\.jar(?:\.disabled)?$/i.test(file)) throw new Error('Некорректный файл мода.');
  safeJar(file.replace(/\.disabled$/, ''));
  const root = path.join(profileDirectory(config), 'mods');
  const target = file.endsWith('.disabled') ? file.slice(0, -9) : file + '.disabled';
  try { await fs.access(inside(root, target)); throw new Error('Файл назначения уже существует.'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  await fs.rename(inside(root, file), inside(root, target));
}
module.exports = { profileDirectory, searchMods, resolveMods, installMods, importMods, listMods, toggleMod, compatible, safeJar };
