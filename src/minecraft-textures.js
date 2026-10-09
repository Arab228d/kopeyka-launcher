const fs = require('node:fs/promises');
const path = require('node:path');
const AdmZip = require('adm-zip');
const BLOCKS = ['grass_block_top', 'grass_block_side', 'grass_block_side_overlay', 'dirt', 'sand', 'stone', 'oak_log', 'oak_log_top', 'oak_leaves', 'water_still', 'short_grass', 'poppy', 'oxeye_daisy', 'crafting_table_top', 'crafting_table_side', 'crafting_table_front', 'oak_planks'];
const ENTRIES = Object.fromEntries(BLOCKS.map(name => [name, `assets/minecraft/textures/block/${name}.png`]));
ENTRIES.steve = 'assets/minecraft/textures/entity/player/wide/steve.png';
ENTRIES.minecraft_logo = 'assets/minecraft/textures/gui/title/minecraft.png';
ENTRIES.java_logo = 'assets/minecraft/textures/gui/title/edition.png';
ENTRIES.minecraft_font = 'assets/minecraft/textures/font/ascii.png';
function extractTextures(jarFile, version) {
  const jar = new AdmZip(jarFile);
  const textures = {};
  for (const [name, entry] of Object.entries(ENTRIES)) {
    const found = jar.getEntry(entry);
    if (!found || found.header.size > 1024 * 1024) continue;
    const bytes = found.getData();
    if (!bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) continue;
    textures[name] = `data:image/png;base64,${bytes.toString('base64')}`;
  }
  if (!textures.dirt || !textures.grass_block_top || !textures.oak_log) return null;
  return { source: 'minecraft', version, textures };
}
async function loadMinecraftTextures(roots, cacheDirectory, preferredVersion = '1.21.1') {
  const cache = path.join(cacheDirectory, 'scene-textures.json');
  for (const root of [...new Set(roots)]) {
    const versionsDirectory = path.join(root, 'versions');
    let entries;
    try { entries = await fs.readdir(versionsDirectory, { withFileTypes: true }); } catch { continue; }
    const versions = entries.filter(entry => entry.isDirectory() && /^[A-Za-z0-9_.-]+$/.test(entry.name)).map(entry => entry.name);
    versions.sort((a, b) => Number(b === preferredVersion) - Number(a === preferredVersion));
    for (const version of versions.slice(0, 12)) {
      try {
        const result = extractTextures(path.join(versionsDirectory, version, `${version}.jar`), version);
        if (!result) continue;
        // A cache-write failure must not discard successfully extracted images.
        try {
          await fs.mkdir(cacheDirectory, { recursive: true });
          await fs.writeFile(cache, JSON.stringify(result));
        } catch {}
        return result;
      } catch { /* A custom or incomplete client may not contain these textures. */ }
    }
  }
  try { const result = JSON.parse(await fs.readFile(cache, 'utf8')); if (result.source === 'minecraft' && result.textures?.dirt) return result; } catch {}
  // Keep the approved diorama identical on fresh installations and with old
  // clients whose texture layout differs from the modern Minecraft layout.
  return JSON.parse(await fs.readFile(path.join(__dirname, 'ui', 'assets', 'island-textures.json'), 'utf8'));
}
module.exports = { loadMinecraftTextures, extractTextures };
