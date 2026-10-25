const fs = require('node:fs/promises');
const path = require('node:path');
const { modrinth, mediaUrl, profileDirectory, installMods } = require('./mods');
const { searchShaders, installShader } = require('./shaders');
const { downloadFile, validFile, inside } = require('./installer');
const { rememberContent } = require('./content-media');
function checkKind(kind) { if (!['mod', 'resourcepack', 'shader'].includes(kind)) throw new Error('Неизвестный каталог.'); }
async function searchCatalog(config, kind, query, offset = 0, request) {
  checkKind(kind);
  if (kind === 'shader') return searchShaders(config, query, offset, request);
  if (kind === 'mod' && !['fabric', 'forge', 'forge_optifine', 'neoforge'].includes(config.loader)) return { total: 0, hits: [], message: 'Для модов выбери Fabric, Forge или NeoForge в версии игры.' };
  const facets = [['project_type:' + kind], ['versions:' + config.version]];
  if (kind === 'mod') facets.push(['categories:' + (config.loader === 'forge_optifine' ? 'forge' : config.loader)], ['client_side:required', 'client_side:optional']);
  const params = new URLSearchParams({ query: String(query || '').slice(0,120), offset: String(Math.trunc(Math.max(0,Math.min(10000,Number(offset)||0)))), limit: '18', index: 'downloads', facets: JSON.stringify(facets) });
  const data = await modrinth('/search?' + params, request);
  return { total: data.total_hits, hits: data.hits.map(hit => ({ id: hit.project_id, title: hit.title, description: hit.description, author: hit.author, downloads: hit.downloads, icon: mediaUrl(hit.icon_url), gallery: [...new Set([hit.featured_gallery, ...(hit.gallery || [])].map(mediaUrl).filter(Boolean))].slice(0,6) })) };
}
async function installCatalog(config, kind, project, report = () => {}, request) {
  checkKind(kind);
  if (kind === 'shader') return installShader(config, project, report, request);
  if (typeof project !== 'string' || !/^[A-Za-z0-9_-]{1,100}$/.test(project)) throw new Error('Некорректный проект.');
  const info = await modrinth('/project/' + encodeURIComponent(project), request);
  if (info.project_type !== kind) throw new Error('Проект относится к другому типу контента.');
  if (kind === 'mod') return installMods(config, [project], report, request);
  const params = new URLSearchParams({ game_versions: JSON.stringify([config.version]), include_changelog: 'false' });
  const versions = await modrinth('/project/' + encodeURIComponent(project) + '/version?' + params, request);
  if (!Array.isArray(versions)) throw new Error('Не удалось прочитать список версий ресурспака.');
  const compatible = version => version?.project_id === info.id && Array.isArray(version.game_versions) && version.game_versions.includes(config.version);
  const version = versions.find(v => compatible(v) && v.version_type === 'release') || versions.find(compatible);
  if (!version) throw new Error('Нет ресурспака для выбранной версии Minecraft.');
  const files = Array.isArray(version.files) ? version.files : [];
  const file = files.find(f => f?.primary && /\.zip$/i.test(f.filename)) || files.find(f => /\.zip$/i.test(f?.filename));
  if (!file || !mediaUrl(file.url) || !/^[a-f0-9]{40}$/i.test(file.hashes?.sha1 || '') || !/^[^<>:"/\\|?*\x00-\x1f]+\.zip$/i.test(file.filename) || file.filename.startsWith('.') || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:[ .]|$)/i.test(file.filename)) throw new Error('Некорректный архив ресурспака.');
  const root = profileDirectory(config), destination = inside(root, 'resourcepacks/' + file.filename);
  const descriptor = { url: file.url, sha1: file.hashes.sha1, size: file.size };
  if (!await validFile(destination, descriptor)) {
    try { await fs.access(destination); throw new Error('Ресурспак с таким именем уже существует.'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
    const staged = inside(root, '.downloads/resource-' + file.hashes.sha1 + '.zip');
    await downloadFile(descriptor, staged, (done,total) => report({ message: 'Скачиваем ' + info.title + '…', percent: total ? done/total*100 : null }), request);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    try { await fs.copyFile(staged, destination, require('node:fs').constants.COPYFILE_EXCL); }
    catch (e) { if (e.code !== 'EEXIST' || !await validFile(destination, descriptor)) throw e; }
  }
  await rememberContent(root, file.filename, 'resourcepack', file.hashes.sha1, info);
  return { file: file.filename };
}
module.exports = { searchCatalog, installCatalog };
