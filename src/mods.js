const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const AdmZip = require('adm-zip');
const { downloadFile, validFile, inside } = require('./installer');
const { validateSettings } = require('./config');
const { jsonWriter } = require('./persistence');
const API = 'https://api.modrinth.com/v2';
const projectMedia = new Map();
const jarMedia = new Map();
let jarMediaBytes = 0;
const failedMedia = new Map();
const registryWriters = new Map();
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
  if (!['forge', 'forge_optifine', 'fabric', 'neoforge'].includes(config.loader)) throw new Error('Для модов выбери Forge, NeoForge или Fabric.');
}
function compatible(version, config) {
  return version && Array.isArray(version.game_versions) && version.game_versions.includes(config.version) && Array.isArray(version.loaders) && version.loaders.includes(config.loader === 'forge_optifine' ? 'forge' : config.loader) && !['server_only', 'dedicated_server_only'].includes(version.environment);
}
async function searchMods(config, query, request) {
  requireLoader(config);
  const params = new URLSearchParams({ query: String(query || '').slice(0, 120), limit: '24', index: 'downloads', facets: JSON.stringify([['project_type:mod'], [`versions:${config.version}`], [`categories:${config.loader === 'forge_optifine' ? 'forge' : config.loader}`], ['client_side:required', 'client_side:optional']]) });
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
  const selected = new Map(), resolving = new Set(), requests = new Map();
  const load = route => {
    if (!requests.has(route)) requests.set(route, modrinth(route, request));
    return requests.get(route);
  };
  async function visit(project, exactVersion) {
    const validId = value => typeof value === 'string' && /^[a-zA-Z0-9_-]{1,100}$/.test(value);
    if ((!project && !exactVersion) || (project && !validId(project)) || (exactVersion && !validId(exactVersion))) throw new Error('Некорректный идентификатор мода.');
    if (project && !exactVersion && selected.has(project)) return;
    let version;
    if (exactVersion) version = await load(`/version/${encodeURIComponent(exactVersion)}`);
    else {
      const params = new URLSearchParams({ game_versions: JSON.stringify([config.version]), loaders: JSON.stringify([config.loader === 'forge_optifine' ? 'forge' : config.loader]), include_changelog: 'false' });
      const list = await load(`/project/${encodeURIComponent(project)}/version?${params}`);
      if (!Array.isArray(list)) throw new Error('Modrinth вернул некорректный список версий. Попробуйте позже.');
      version = list.find(v => compatible(v, config) && v.version_type === 'release') || list.find(v => compatible(v, config));
    }
    if (!version || !compatible(version, config) || !validId(version.project_id) || !validId(version.id) || (exactVersion && (version.id !== exactVersion || project && version.project_id !== project))) throw new Error(`Нет подходящей версии мода ${project || exactVersion} для ${config.version} / ${config.loader}.`);
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
  if (typeof name !== 'string' || !/^[^<>:"/\\|?*\x00-\x1f]+\.jar$/i.test(name) || name.startsWith('.') || /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:[ .]|$)/i.test(name)) throw new Error('Некорректное имя JAR-файла.');
  return name;
}
async function readRegistry(root) {
  for (const suffix of ['', '.bak']) {
    try {
      const value = JSON.parse(await fs.readFile(path.join(root, 'mods-index.json' + suffix), 'utf8'));
      if (!Array.isArray(value)) continue;
      return value.filter(entry => {
        if (!entry || typeof entry.project !== 'string' || typeof entry.version !== 'string' && entry.version !== undefined) return false;
        try { safeJar(entry.file); return true; } catch { return false; }
      });
    } catch (error) { if (!(error instanceof SyntaxError) && error.code !== 'ENOENT') throw error; }
  }
  return [];
}
function writeRegistry(root, registry) {
  if (!registryWriters.has(root)) {
    registryWriters.set(root, jsonWriter(path.join(root, 'mods-index.json')));
    if (registryWriters.size > 50) registryWriters.delete(registryWriters.keys().next().value);
  }
  return registryWriters.get(root)(registry);
}
async function existingMod(root, name) {
  const enabled = inside(root, `mods/${name}`), disabled = enabled + '.disabled';
  const exists = async file => {
    try { await fs.access(file); return true; }
    catch (error) { if (error.code !== 'ENOENT') throw error; return false; }
  };
  const [hasEnabled, hasDisabled] = await Promise.all([exists(enabled), exists(disabled)]);
  if (hasEnabled && hasDisabled) throw new Error(`${name}: найдены включённая и выключенная копии. Удали лишнюю копию.`);
  return hasEnabled ? enabled : hasDisabled ? disabled : null;
}
async function installMods(config, projects, report = () => {}, request = fetch) {
  const versions = await resolveMods(config, projects, request);
  const root = profileDirectory(config), registry = await readRegistry(root);
  // Prepare every file before publishing any of them to the mods folder.
  const staged = [], destinations = new Map();
  for (const version of versions) {
    const files = Array.isArray(version.files) ? version.files : [];
    const file = files.find(f => f.primary && /\.jar$/i.test(f.filename)) || files.find(f => /\.jar$/i.test(f.filename));
    if (!file || !mediaUrl(file.url) || !/^[a-f0-9]{40}$/i.test(file.hashes?.sha1 || '')) throw new Error(`У ${version.name} нет проверенного JAR-файла.`);
    const sha1 = file.hashes.sha1.toLowerCase();
    const name = safeJar(file.filename);
    if (destinations.has(name.toLowerCase()) && destinations.get(name.toLowerCase()) !== sha1) throw new Error(`Разные моды используют имя ${name}. Установку остановили.`);
    destinations.set(name.toLowerCase(), sha1);
    const installed = await existingMod(root, name);
    const destination = installed || inside(root, `mods/${name}`);
    const existing = registry.find(v => v.project === version.project_id);
    // Keep existing versions intact rather than silently mixing dependencies.
    if (existing && existing.version !== version.id && await existingMod(root, existing.file)) throw new Error(`Уже установлена другая версия ${existing.title}. Удали её перед заменой.`);
    if (installed && !await validFile(installed, { sha1, size: file.size })) throw new Error(`Файл ${name} уже существует с другим содержимым.`);
    const target = installed || inside(root, `.downloads/${sha1}-${name}`);
    if (!installed) {
      report({ message: `Скачиваем ${version.name}…`, percent: null });
      await downloadFile({ url: file.url, sha1, size: file.size }, target, (done, total) => report({ message: `Скачиваем ${version.name}…`, percent: total ? done / total * 100 : null }), request);
    }
    staged.push({ target, destination, sha1, size: file.size, entry: { project: version.project_id, version: version.id, title: version.name, file: name, ...projectMedia.get(version.project_id) } });
  }
  await fs.mkdir(path.join(root, 'mods'), { recursive: true });
  for (const file of staged) {
    if (file.target !== file.destination) await fs.copyFile(file.target, file.destination, require('node:fs').constants.COPYFILE_EXCL).catch(async error => {
      if (error.code !== 'EEXIST') throw error;
      if (!await validFile(file.destination, file)) throw new Error(`Файл ${file.entry.file} уже существует с другим содержимым.`);
    });
    const existing = registry.find(v => v.project === file.entry.project);
    if (existing) Object.assign(existing, file.entry); else registry.push(file.entry);
  }
  await writeRegistry(root, registry);
  return staged.map(v => v.entry.file);
}
async function importMods(config, files) {
  requireLoader(config);
  if (!Array.isArray(files) || files.some(file => typeof file !== 'string')) throw new Error('Выбери JAR-файлы модов.');
  const root = profileDirectory(config), jobs = [], names = new Map();
  for (const file of files) {
    const name = safeJar(path.basename(file));
    const bytes = await fs.readFile(file);
    const archive = new AdmZip(bytes);
    const neo = archive.getEntry('META-INF/neoforge.mods.toml');
    const fabric = archive.getEntry('fabric.mod.json'), forge = archive.getEntry('META-INF/mods.toml') || archive.getEntry('mcmod.info');
    if (!fabric && !forge && !neo) throw new Error(`${name}: это не мод Forge/NeoForge/Fabric.`);
    if (['forge', 'forge_optifine'].includes(config.loader) && !forge || config.loader === 'fabric' && !fabric || config.loader === 'neoforge' && !neo && !forge) throw new Error(`${name}: мод для другого загрузчика.`);
    const sha1 = crypto.createHash('sha1').update(bytes).digest('hex');
    if (names.has(name.toLowerCase())) {
      if (names.get(name.toLowerCase()) !== sha1) throw new Error(`Выбраны разные моды с одинаковым именем ${name}.`);
      continue;
    }
    names.set(name.toLowerCase(), sha1);
    const installed = await existingMod(root, name), destination = installed || inside(root, `mods/${name}`);
    if (installed && !await validFile(installed, { sha1, size: bytes.length })) throw new Error(`${name} уже существует. Сначала удали старый мод.`);
    const target = installed || inside(root, `.downloads/import-${sha1}-${name}`);
    if (!installed) {
      await fs.mkdir(path.dirname(target), { recursive: true });
      await fs.writeFile(target, bytes);
    }
    jobs.push({ target, destination, name, sha1, size: bytes.length });
  }
  await fs.mkdir(path.join(root, 'mods'), { recursive: true });
  for (const job of jobs) if (job.target !== job.destination) await fs.copyFile(job.target, job.destination, require('node:fs').constants.COPYFILE_EXCL).catch(async error => {
    if (error.code !== 'EEXIST') throw error;
    if (!await validFile(job.destination, job)) throw new Error(`${job.name} уже существует. Сначала удали старый мод.`);
  });
  return jobs.map(v => v.name);
}
async function listMods(config, request = fetch, hydrateMedia = false) {
  const root = profileDirectory(config), registry = await readRegistry(root);
  const files = await fs.readdir(path.join(root, 'mods'), { withFileTypes: true }).catch(error => { if (error.code === 'ENOENT') return []; throw error; });
  let changed = false;
  const entries = new Map(registry.map(entry => [entry.file.toLowerCase(), entry]));
  const candidates = files.filter(file => !file.isDirectory() && /\.jar(?:\.disabled)?$/i.test(file.name));
  const result = new Array(candidates.length);
  let index = 0;
  async function inspect(file) {
    const entry = entries.get(file.replace(/\.disabled$/i, '').toLowerCase());
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
    return { file, enabled: !/\.disabled$/i.test(file), title: local.title || entry?.title || file,
      icon: local.icon || mediaUrl(entry?.icon), gallery: (Array.isArray(entry?.gallery) ? entry.gallery : []).map(mediaUrl).filter(Boolean) };
  }
  await Promise.all(Array.from({ length: Math.min(4, candidates.length) }, async () => {
    while (index < candidates.length) {
      const current = index++;
      result[current] = await inspect(candidates[current].name);
    }
  }));
  if (changed) await writeRegistry(root, registry).catch(() => {});
  return result;
}
async function localModMedia(file) {
  try {
    const stat = await fs.stat(file), key = `${file}:${stat.size}:${stat.mtimeMs}`;
    if (jarMedia.has(key)) return jarMedia.get(key);
    const zip = new AdmZip(await fs.readFile(file)); let title, iconPath;
    const fabric = zip.getEntry('fabric.mod.json');
    if (fabric && fabric.header.size <= 1024 * 1024) {
      const metadata = JSON.parse(fabric.getData().toString('utf8'));
      title = typeof metadata.name === 'string' ? metadata.name : undefined;
      iconPath = typeof metadata.icon === 'string' ? metadata.icon : Object.entries(metadata.icon || {}).sort((a,b) => Number(b[0]) - Number(a[0]))[0]?.[1];
    } else {
      const metadata = zip.getEntry('META-INF/neoforge.mods.toml') || zip.getEntry('META-INF/mods.toml');
      const toml = metadata && metadata.header.size <= 1024 * 1024 ? metadata.getData().toString('utf8') : '';
      title = /displayName\s*=\s*"([^"]+)"/.exec(toml || '')?.[1];
      iconPath = /logoFile\s*=\s*"([^"]+)"/.exec(toml || '')?.[1];
    }
    const image = typeof iconPath === 'string' && /\.png$/i.test(iconPath) ? zip.getEntry(iconPath) : null;
    let icon = null;
    if (image && image.header.size <= 1024 * 1024) {
      const bytes = image.getData();
      if (bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) icon = `data:image/png;base64,${bytes.toString('base64')}`;
    }
    if (title) title = title.slice(0, 160);
    const previous = jarMedia.get(key);
    if (previous) jarMediaBytes -= Buffer.byteLength(previous.icon || '') + Buffer.byteLength(previous.title || '');
    const result = { title, icon }; jarMedia.set(key, result);
    jarMediaBytes += Buffer.byteLength(icon || '') + Buffer.byteLength(title || '');
    while (jarMedia.size > 200 || jarMediaBytes > 16 * 1024 * 1024) {
      const oldest = jarMedia.keys().next().value, value = jarMedia.get(oldest);
      jarMediaBytes -= Buffer.byteLength(value.icon || '') + Buffer.byteLength(value.title || '');
      jarMedia.delete(oldest);
    }
    return result;
  } catch { return {}; }
}
async function toggleMod(config, file) {
  if (!/\.jar(?:\.disabled)?$/i.test(file)) throw new Error('Некорректный файл мода.');
  safeJar(file.replace(/\.disabled$/i, ''));
  const root = path.join(profileDirectory(config), 'mods');
  const target = /\.disabled$/i.test(file) ? file.slice(0, -9) : file + '.disabled';
  try { await fs.access(inside(root, target)); throw new Error('Файл назначения уже существует.'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  await fs.rename(inside(root, file), inside(root, target));
}
module.exports = { modrinth, mediaUrl, profileDirectory, searchMods, resolveMods, installMods, importMods, listMods, toggleMod, compatible, safeJar };
