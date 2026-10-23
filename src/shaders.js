const fs = require('node:fs/promises');
const path = require('node:path');
const { profileDirectory, modrinth, mediaUrl } = require('./mods');
const { downloadFile, validFile, inside } = require('./installer');
async function searchShaders(config, query, offset = 0, request) {
  const params = new URLSearchParams({ query: String(query || '').slice(0,120), offset: String(Math.trunc(Math.max(0, Math.min(10000, Number(offset) || 0)))), limit: '18', index: 'downloads', facets: JSON.stringify([['project_type:shader'], ['versions:' + config.version]]) });
  const data = await modrinth('/search?' + params, request);
  return { total: data.total_hits, hits: data.hits.map(h => ({ id: h.project_id, title: h.title, description: h.description, author: h.author, downloads: h.downloads, icon: mediaUrl(h.icon_url), gallery: [...new Set([h.featured_gallery, ...(h.gallery || [])].map(mediaUrl).filter(Boolean))].slice(0,6) })) };
}
async function installShader(config, project, report = () => {}, request) {
  if (!/^[a-zA-Z0-9_-]{1,100}$/.test(project)) throw new Error('Некорректный шейдер.');
  const info = await modrinth('/project/' + encodeURIComponent(project), request);
  if (info.project_type !== 'shader') throw new Error('Этот проект не является шейдером.');
  const params = new URLSearchParams({ game_versions: JSON.stringify([config.version]), include_changelog: 'false' });
  const list = await modrinth('/project/' + encodeURIComponent(project) + '/version?' + params, request);
  const supported = v => v && v.project_id === info.id && Array.isArray(v.game_versions) && v.game_versions.includes(config.version) && Array.isArray(v.loaders) && v.loaders.some(l => ['iris','optifine'].includes(l));
  if (!Array.isArray(list)) throw new Error('Modrinth вернул некорректный список версий. Попробуйте позже.');
  const version = list.find(v => supported(v) && v.version_type === 'release') || list.find(supported);
  if (!version) throw new Error('Нет шейдера для этой версии Minecraft.');
  const files = Array.isArray(version.files) ? version.files : [];
  const file = files.find(f => f.primary && /\.zip$/i.test(f.filename)) || files.find(f => /\.zip$/i.test(f.filename));
  if (!file || !/^[a-f0-9]{40}$/i.test(file.hashes?.sha1 || '') || !mediaUrl(file.url) || !/^[^<>:"/\\|?*\x00-\x1f]+\.zip$/i.test(file.filename) || file.filename.startsWith('.') || /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:[ .]|$)/i.test(file.filename)) throw new Error('Некорректный архив шейдера.');
  const root = profileDirectory(config), target = inside(root, '.downloads/shader-' + file.hashes.sha1 + '.zip');
  const destination = inside(root, 'shaderpacks/' + file.filename);
  const descriptor = { url: file.url, sha1: file.hashes.sha1, size: file.size };
  if (await validFile(destination, descriptor)) return { file: file.filename, loaders: version.loaders };
  // Refuse a conflicting archive before starting a potentially large transfer.
  try { await fs.access(destination); throw new Error('Архив с таким именем уже существует.'); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  await downloadFile(descriptor, target, (done,total) => report({message: 'Скачиваем ' + info.title + '…', percent: total ? done / total * 100 : null}), request);
  await fs.mkdir(path.dirname(destination), {recursive:true});
  try { await fs.copyFile(target, destination, require('node:fs').constants.COPYFILE_EXCL); }
  catch(error) { if (error.code !== 'EEXIST') throw error; if (!await validFile(destination, descriptor)) throw new Error('Архив с таким именем уже существует.'); }
  return { file: file.filename, loaders: version.loaders };
}
module.exports = { searchShaders, installShader };
