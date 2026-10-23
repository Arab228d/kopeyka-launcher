const fs = require('node:fs/promises');
const path = require('node:path');
const AdmZip = require('adm-zip');
const BLOCKS = ['grass_block_top', 'grass_block_side', 'grass_block_side_overlay', 'dirt', 'sand', 'stone', 'oak_log', 'oak_log_top', 'oak_leaves', 'water_still', 'short_grass', 'poppy', 'oxeye_daisy', 'crafting_table_top', 'crafting_table_side', 'crafting_table_front', 'oak_planks'];
const ENTRIES = Object.fromEntries(BLOCKS.map(name => [name, `assets/minecraft/textures/block/${name}.png`]));
ENTRIES.steve = 'assets/minecraft/textures/entity/player/wide/steve.png';
ENTRIES.minecraft_logo = 'assets/minecraft/textures/gui/title/minecraft.png';
ENTRIES.java_logo = 'assets/minecraft/textures/gui/title/edition.png';
ENTRIES.minecraft_font = 'assets/minecraft/textures/font/ascii.png';
const extracted = new Map();
const PNG_PREFIX = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
function extractTextures(jarFile, version) {
  const jar = new AdmZip(jarFile);
  const textures = {};
  for (const [name, entry] of Object.entries(ENTRIES)) {
    const found = jar.getEntry(entry);
    if (!found || found.header.size > 1024 * 1024) continue;
    const bytes = found.getData();
    if (!bytes.subarray(0, 8).equals(PNG_PREFIX)) continue;
    textures[name] = `data:image/png;base64,${bytes.toString('base64')}`;
  }
  if (!textures.dirt || !textures.grass_block_top || !textures.oak_log) return null;
  return { source: 'minecraft', version, textures };
}
async function loadMinecraftTextures(roots, cacheDirectory, preferredVersion = '1.21.1') {
  const cache = path.join(cacheDirectory, 'scene-textures.json');
  const candidates = [];
  for (const root of [...new Set(roots)]) {
    const versionsDirectory = path.join(root, 'versions');
    let entries;
    try { entries = await fs.readdir(versionsDirectory, { withFileTypes: true }); } catch { continue; }
    const versions = entries.filter(entry => entry.isDirectory() && /^[A-Za-z0-9_.-]+$/.test(entry.name)).map(entry => entry.name);
    versions.sort((a, b) => Number(b === preferredVersion) - Number(a === preferredVersion) || b.localeCompare(a, 'en', { numeric: true }));
    for (const version of versions.slice(0, 12)) candidates.push({ version, file: path.join(versionsDirectory, version, `${version}.jar`) });
  }
  // Search all game roots for the selected version before falling back to
  // another client. A profile's older client must not hide the selected one.
  candidates.sort((a, b) => Number(b.version === preferredVersion) - Number(a.version === preferredVersion));
  for (const { version, file } of candidates) {
    try {
      const stat = await fs.stat(file), key = `${file}:${stat.size}:${stat.mtimeMs}`;
      if (!extracted.has(key)) {
        // Share extraction across concurrent scene requests for this client.
        extracted.set(key, fs.readFile(file).then(bytes => ({ result: extractTextures(bytes, version), savedTo: new Set() })).catch(error => { extracted.delete(key); throw error; }));
        if (extracted.size > 8) extracted.delete(extracted.keys().next().value);
      }
      const entry = await extracted.get(key);
      if (!entry.result) continue;
      // A cache-write failure must not discard successfully extracted images.
      if (!entry.savedTo.has(cache)) {
        try {
          await fs.mkdir(cacheDirectory, { recursive: true });
          await fs.writeFile(cache, JSON.stringify(entry.result));
          entry.savedTo.add(cache);
        } catch {}
      }
      return entry.result;
    } catch { /* A custom or incomplete client may not contain these textures. */ }
  }
  try {
    const result = JSON.parse(await fs.readFile(cache, 'utf8'));
    if (result?.source === 'minecraft' && result.textures && typeof result.textures === 'object') {
      const textures = {};
      for (const name of Object.keys(ENTRIES)) {
        const value = result.textures[name];
        if (typeof value !== 'string' || value.length > 1400000 || !/^data:image\/png;base64,[A-Za-z0-9+/]+={0,2}$/.test(value)) continue;
        if (Buffer.from(value.slice(22), 'base64').subarray(0, 8).equals(PNG_PREFIX)) textures[name] = value;
      }
      if (textures.dirt && textures.grass_block_top && textures.oak_log) return { source: 'minecraft', version: result.version, textures };
    }
  } catch {}
  // Keep the approved diorama identical on fresh installations and with old
  // clients whose texture layout differs from the modern Minecraft layout.
  return JSON.parse(await fs.readFile(path.join(__dirname, 'ui', 'assets', 'island-textures.json'), 'utf8'));
}
module.exports = { loadMinecraftTextures, extractTextures };
