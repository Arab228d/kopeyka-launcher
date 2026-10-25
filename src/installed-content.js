const fs = require('node:fs/promises');
const path = require('node:path');
const { profileDirectory, listMods } = require('./mods');
const { enrichContent } = require('./content-media');

async function listPacks(root, folder, kind) {
  let entries;
  try { entries = await fs.readdir(path.join(root, folder), { withFileTypes: true }); }
  catch (error) { if (error.code === 'ENOENT') return []; throw error; }
  return entries.filter(entry => !entry.name.startsWith('.') &&
    (entry.isDirectory() || entry.isFile() && /\.zip$/i.test(entry.name)))
    .map(entry => ({ file: entry.name, title: entry.name.replace(/\.zip$/i, ''), kind }));
}

async function listInstalled(config, request = fetch) {
  const root = profileDirectory(config);
  const [mods, resources, shaders] = await Promise.all([
    listMods(config), listPacks(root, 'resourcepacks', 'resourcepack'), listPacks(root, 'shaderpacks', 'shader')
  ]);
  const items = [...mods.map(mod => ({ ...mod, kind: 'mod' })), ...resources, ...shaders];
  let index = 0;
  await Promise.all(Array.from({ length: Math.min(3, items.length) }, async () => {
    while (index < items.length) {
      const i = index++;
      if (items[i].icon || items[i].gallery?.length) continue;
      try { items[i] = await enrichContent(root, items[i], request); } catch { /* A cover must not hide an installed file. */ }
    }
  }));
  return items;
}
module.exports = { listInstalled };
