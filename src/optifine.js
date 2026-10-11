const fs = require('node:fs/promises');
const path = require('node:path');
const AdmZip = require('adm-zip');
const { parseCatalog } = require('./loader-catalog');
function officialUrl(value, base = 'https://optifine.net/') {
  const url = new URL(value.replaceAll('&amp;', '&'), base);
  if (url.protocol !== 'https:' || url.hostname !== 'optifine.net') throw new Error('Некорректная ссылка OptiFine.');
  return url.href;
}
async function downloadOptifine(config, send = () => {}, request = fetch) {
  const get = async url => {
    const response = await request(officialUrl(url), { signal: AbortSignal.timeout(120000), headers: { 'User-Agent': 'KOPEYKA-Launcher' } });
    if (!response.ok) throw new Error(`OptiFine: HTTP ${response.status}`);
    if (response.url) officialUrl(response.url);
    return response;
  };
  const catalog = parseCatalog('optifine', await (await get('https://optifine.net/downloads')).text());
  const name = catalog[config.version];
  if (!name) throw new Error(`OptiFine для Minecraft ${config.version} ещё не выпущен. Выбери другую версию или загрузчик.`);
  const mirror = await (await get(`https://optifine.net/adloadx?f=${encodeURIComponent(name)}`)).text();
  const link = /href=['"](downloadx\?[^'"]+)['"]/i.exec(mirror)?.[1];
  if (!link || new URL(officialUrl(link)).searchParams.get('f') !== name) throw new Error('Не удалось получить официальную ссылку OptiFine.');
  send({ kind: 'progress', percent: null, message: `Загрузка ${name}…` });
  const response = await get(link), chunks = []; let size = 0;
  const total = Number(response.headers.get('content-length'));
  for await (const chunk of response.body) {
    chunks.push(chunk); size += chunk.length;
    if (size > 64 * 1024 * 1024) throw new Error('Некорректный размер установщика OptiFine.');
    send({ kind: 'progress', percent: total ? size / total * 100 : null, message: 'Загрузка OptiFine…' });
  }
  if (total && size !== total) throw new Error('OptiFine загрузился не полностью. Попробуй снова.');
  const bytes = Buffer.concat(chunks);
  const zip = new AdmZip(bytes);
  if (!zip.getEntry('optifine/Installer.class') || !zip.test()) throw new Error('Повреждённый установщик OptiFine.');
  const directory = path.join(config.gameDirectory, 'installers');
  await fs.mkdir(directory, { recursive: true });
  const target = path.join(directory, name);
  await fs.writeFile(target + '.part', bytes);
  await fs.rename(target + '.part', target);
  return target;
}
module.exports = { downloadOptifine, officialUrl };
