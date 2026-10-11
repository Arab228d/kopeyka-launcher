const fs = require('node:fs/promises');
const path = require('node:path');
const SOURCES = {
  forge: 'https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json',
  fabric: 'https://meta.fabricmc.net/v2/versions/game',
  neoforge: 'https://maven.neoforged.net/releases/net/neoforged/neoforge/maven-metadata.xml',
  optifine: 'https://optifine.net/downloads'
};
function neoMinecraft(version) {
  const parts = version.split(/[.-]/);
  if (Number(parts[0]) >= 26) return parts.slice(0, Number(parts[2]) === 0 ? 2 : 3).join('.');
  return `1.${parts[0]}.${parts[1]}`.replace(/\.0$/, '');
}
function parseCatalog(kind, body) {
  const result = {};
  if (kind === 'forge') for (const [key, value] of Object.entries(JSON.parse(body).promos)) {
    const version = key.replace(/-(recommended|latest)$/, '');
    if (/-recommended$/.test(key) || !result[version]) result[version] = value;
  }
  if (kind === 'fabric') for (const item of JSON.parse(body)) result[item.version] = true;
  if (kind === 'neoforge') for (const match of body.matchAll(/<version>([\d.]+(?:-beta)?)<\/version>/g)) {
    const version = match[1], minecraft = neoMinecraft(version);
    const old = result[minecraft];
    const compare = (a, b) => a.split(/[.-]/).slice(0,4).map(Number).reduce((sum,n,i) => sum || n - (Number(b.split(/[.-]/)[i]) || 0), 0);
    if (!old || (old.endsWith('-beta') && !version.endsWith('-beta')) || (old.endsWith('-beta') === version.endsWith('-beta') && compare(version, old) > 0)) result[minecraft] = version;
  }
  if (kind === 'optifine') for (const match of body.matchAll(/adloadx\?f=((?:preview_)?OptiFine_([A-Za-z0-9.\-]+)_HD_U_[A-Za-z0-9_]+\.jar)/g)) {
    const name = match[1], minecraft = match[2];
    if (!result[minecraft] || (result[minecraft].startsWith('preview_') && !name.startsWith('preview_'))) result[minecraft] = name;
  }
  return result;
}
async function fetchCatalog(cacheDirectory, request = fetch) {
  const file = path.join(cacheDirectory, 'loader-catalog.json');
  let cached = {};
  try { cached = JSON.parse(await fs.readFile(file, 'utf8')); } catch {}
  const catalog = { checkedAt: new Date().toISOString(), errors: [] };
  await Promise.all(Object.entries(SOURCES).map(async ([kind,url]) => {
    try {
      const response = await request(url, { signal: AbortSignal.timeout(12000), headers: { 'User-Agent': 'KOPEYKA-Launcher' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const parsed = parseCatalog(kind, await response.text());
      if (!Object.keys(parsed).length) throw new Error('Пустой каталог');
      catalog[kind] = parsed;
    } catch { catalog[kind] = cached[kind] || null; catalog.errors.push(kind); }
  }));
  await fs.mkdir(cacheDirectory, { recursive: true });
  await fs.writeFile(file, JSON.stringify(catalog)).catch(() => {});
  return catalog;
}
module.exports = { fetchCatalog, parseCatalog, neoMinecraft };
