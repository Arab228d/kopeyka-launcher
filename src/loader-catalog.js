const fs = require('node:fs/promises');
const path = require('node:path');
const { randomUUID } = require('node:crypto');
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
  if (kind === 'forge_optifine') for (const row of body.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const file = /adloadx\?f=((?:preview_)?OptiFine_([A-Za-z0-9.\-]+)_HD_U_[A-Za-z0-9_]+\.jar)/.exec(row[1]);
    const forge = /class=['"]colForge['"][^>]*>\s*Forge\s+#?([\d]+(?:\.[\d]+){2,3})\s*</i.exec(row[1]);
    if (!file || !forge) continue;
    const previous = result[file[2]];
    if (!previous || previous.optifine.startsWith('preview_') && !file[1].startsWith('preview_')) result[file[2]] = { optifine: file[1], forge: forge[1] };
  }
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
  try {
    const value = JSON.parse(await fs.readFile(file, 'utf8'));
    if (value && typeof value === 'object' && !Array.isArray(value)) cached = value;
  } catch {}
  const catalog = { checkedAt: new Date().toISOString(), errors: [] };
  await Promise.all(Object.entries(SOURCES).map(async ([kind,url]) => {
    try {
      const response = await request(url, { signal: AbortSignal.timeout(12000), headers: { 'User-Agent': 'KOPEYKA-Launcher' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const body = await response.text();
      const parsed = parseCatalog(kind, body);
      if (!Object.keys(parsed).length) throw new Error('Пустой каталог');
      catalog[kind] = parsed;
      if (kind === 'optifine') catalog.forge_optifine = parseCatalog('forge_optifine', body);
    } catch {
      const previous = cached[kind];
      catalog[kind] = previous && typeof previous === 'object' && !Array.isArray(previous) ? previous : null;
      catalog.errors.push(kind);
      if (kind === 'optifine') catalog.forge_optifine = cached.forge_optifine || {};
    }
  }));
  const partial = file + '.' + randomUUID() + '.part';
  try {
    await fs.mkdir(cacheDirectory, { recursive: true });
    await fs.writeFile(partial, JSON.stringify(catalog));
    await fs.rename(partial, file);
  } catch { /* The network catalog stays usable if the disk cache is unwritable. */ }
  finally { await fs.unlink(partial).catch(() => {}); }
  return catalog;
}
module.exports = { fetchCatalog, parseCatalog, neoMinecraft };
