const fs = require('node:fs/promises');
const { createReadStream } = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const AdmZip = require('adm-zip');
const { modrinth, mediaUrl } = require('./mods');
const { jsonWriter } = require('./persistence');
const stores = new Map(), pending = new Map(), retryAfter = new Map();
const folder = kind => ({ mod: 'mods', shader: 'shaderpacks', resourcepack: 'resourcepacks' })[kind];
function pngData(value) {
  if (typeof value !== 'string' || value.length > 1400000 || !/^data:image\/png;base64,[A-Za-z0-9+/]+={0,2}$/.test(value)) return null;
  return Buffer.from(value.slice(22), 'base64').subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])) ? value : null;
}
async function store(root) {
  if (!stores.has(root)) stores.set(root, (async () => {
    const file = path.join(root, 'content-media.json');
    let entries = {};
    try { const data = JSON.parse(await fs.readFile(file, 'utf8')); if (data && typeof data === 'object' && !Array.isArray(data)) entries = data; } catch {}
    return { entries, write: jsonWriter(file) };
  })());
  return stores.get(root);
}
function projectMedia(info) {
  const gallery = Array.isArray(info.gallery) ? [...info.gallery].sort((a,b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))) : [];
  return { title: String(info.title || '').slice(0,160), icon: mediaUrl(info.icon_url), gallery: gallery.map(item => mediaUrl(item.url)).filter(Boolean).slice(0,6) };
}
async function rememberContent(root, file, kind, sha1, info) {
  const state = await store(root);
  state.entries[kind + '/' + file] = { sha1, ...projectMedia(info) };
  await state.write(state.entries).catch(() => {});
}
async function packIcon(file, stat) {
  try {
    let bytes;
    if (stat.isDirectory()) { const icon = path.join(file, 'pack.png'); if ((await fs.stat(icon)).size > 1048576) return null; bytes = await fs.readFile(icon); }
    else if (stat.size <= 64 * 1048576) {
      const entry = new AdmZip(await fs.readFile(file)).getEntry('pack.png');
      if (!entry || entry.header.size > 1048576) return null;
      bytes = entry.getData();
    }
    if (bytes?.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return 'data:image/png;base64,' + bytes.toString('base64');
  } catch {}
  return null;
}
async function enrichContent(root, item, request = fetch) {
  const directory = folder(item.kind);
  if (!directory || path.basename(item.file) !== item.file) return item;
  const file = path.join(root, directory, item.file);
  let stat;
  try { stat = await fs.stat(file); } catch { return item; }
  const key = file + ':' + stat.size + ':' + stat.mtimeMs;
  if (pending.has(key)) return { ...item, ...await pending.get(key) };
  const task = (async () => {
    const state = await store(root), saved = state.entries[item.kind + '/' + item.file];
    const clean = value => ({ title: typeof value.title === 'string' ? value.title : item.title,
      icon: mediaUrl(value.icon) || pngData(value.icon), gallery: (Array.isArray(value.gallery) ? value.gallery : []).map(mediaUrl).filter(Boolean).slice(0,6) });
    if (saved && saved.size === stat.size && saved.mtime === stat.mtimeMs && (!saved.retryAt || saved.retryAt > Date.now())) return clean(saved);
    const localIcon = item.icon || (item.kind !== 'mod' ? await packIcon(file, stat) : null);
    if (stat.isDirectory()) return { icon: localIcon, gallery: [] };
    if ((retryAfter.get(key) || 0) > Date.now()) return { icon: localIcon, gallery: item.gallery || [] };
    const hash = crypto.createHash('sha1');
    for await (const bytes of createReadStream(file)) hash.update(bytes);
    const sha1 = hash.digest('hex');
    let metadata = saved?.sha1 === sha1 && !saved.retryAt ? clean(saved) : null;
    if (!metadata) {
      try {
        const version = await modrinth('/version_file/' + sha1 + '?algorithm=sha1', request, 8000);
        if (!Array.isArray(version.files) || !version.files.some(file => file.hashes?.sha1?.toLowerCase() === sha1)) throw new Error('Unmatched content');
        const info = await modrinth('/project/' + encodeURIComponent(version.project_id), request, 8000);
        metadata = projectMedia(info);
      } catch { retryAfter.set(key, Date.now() + 600000); if (retryAfter.size > 200) retryAfter.delete(retryAfter.keys().next().value); }
    }
    if (metadata) {
      state.entries[item.kind + '/' + item.file] = { sha1, size: stat.size, mtime: stat.mtimeMs, ...metadata, icon: metadata.icon || localIcon };
      await state.write(state.entries).catch(() => {});
      return { ...metadata, icon: metadata.icon || localIcon };
    }
    const fallback = { title: item.title, icon: localIcon, gallery: item.gallery || [] };
    state.entries[item.kind + '/' + item.file] = { sha1, size: stat.size, mtime: stat.mtimeMs, ...fallback, retryAt: Date.now() + 600000 };
    await state.write(state.entries).catch(() => {});
    return fallback;
  })();
  pending.set(key, task);
  try { return { ...item, ...await task }; } finally { pending.delete(key); }
}
module.exports = { enrichContent, rememberContent };
