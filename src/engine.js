const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const { Worker } = require('node:worker_threads');
const { downloadError } = require('./installer');
const MANIFEST = 'https://piston-meta.mojang.com/mc/game/version_manifest_v2.json';
async function fetchJson(url, request = fetch) {
  try {
    const response = await request(url, { signal: AbortSignal.timeout(60000) });
    if (!response.ok) throw new Error(`Сервер вернул HTTP ${response.status}. Попробуйте позже.`);
    return await response.json();
  } catch (error) { throw new Error(downloadError(error, url), { cause: error }); }
}
async function download(url, destination, hash, send) {
  const response = await fetch(url, { signal: AbortSignal.timeout(600000) });
  if (!response.ok) throw new Error(`Ошибка загрузки: HTTP ${response.status}`);
  const total = Number(response.headers.get('content-length'));
  const file = await fs.open(destination + '.part', 'w');
  const digest = crypto.createHash('sha256');
  let received = 0, last = 0;
  try {
    for await (const chunk of response.body) {
      let offset = 0;
      while (offset < chunk.length) {
        const { bytesWritten } = await file.write(chunk, offset, chunk.length - offset);
        if (!bytesWritten) throw new Error('Не удалось записать архив Java.');
        offset += bytesWritten;
      }
      digest.update(chunk); received += chunk.length;
      if (Date.now() - last > 300) {
        send({ kind: 'progress', percent: total ? received / total * 100 : null, message: `Загрузка Java · ${Math.round(received / 1048576)} МБ` });
        last = Date.now();
      }
    }
  } finally { await file.close(); }
  if (digest.digest('hex') !== hash.toLowerCase()) {
    await fs.unlink(destination + '.part');
    throw new Error('Не совпала контрольная сумма Java. Повторите загрузку.');
  }
  await fs.rename(destination + '.part', destination);
}
async function findJava(root) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  entries.sort((a,b) => Number(b.name.startsWith('verified-')) - Number(a.name.startsWith('verified-')) || b.name.localeCompare(a.name));
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const executable = path.join(root, entry.name, 'bin', 'java.exe');
    try { await fs.access(executable); return executable; } catch {}
  }
  return null;
}
async function ensureJava(major, runtimeRoot, send) {
  if (process.platform !== 'win32' || process.arch !== 'x64') throw new Error('Эта сборка пока поддерживает Windows x64.');
  const root = path.join(runtimeRoot, `java-${major}`);
  await fs.mkdir(root, { recursive: true });
  let executable = await findJava(root);
  if (executable) {
    try { await promisify(execFile)(executable, ['-version'], { windowsHide: true, timeout: 20000 }); return executable; }
    catch { send({ kind: 'log', message: `Установленная Java ${major} не запускается. Скачиваем исправную копию.` }); executable = null; }
  }
  if (!executable) {
    send({ kind: 'progress', percent: null, message: `Подготовка Java ${major}…` });
    const packages = await fetchJson(`https://api.adoptium.net/v3/assets/latest/${major}/hotspot?architecture=x64&image_type=jdk&os=windows&vendor=eclipse`);
    const pkg = packages[0]?.binary?.package;
    if (!pkg || !/^[a-f0-9]{64}$/i.test(pkg.checksum)) throw new Error(`Java ${major} сейчас недоступна для загрузки.`);
    const archive = path.join(root, 'runtime.zip');
    for (let attempt = 1; ; attempt++) {
      try { await download(pkg.link, archive, pkg.checksum, send); break; }
      catch (error) {
        await fs.unlink(archive + '.part').catch(() => {});
        if (attempt === 3) throw new Error(`Не удалось скачать Java ${major} после 3 попыток. ${downloadError(error, pkg.link)}`);
        send({ kind: 'log', message: `Повтор загрузки Java: ${attempt + 1}/3.` });
      }
    }
    send({ kind: 'progress', percent: null, message: 'Распаковка Java…' });
    const staging = await fs.mkdtemp(path.join(root, 'install-'));
    await new Promise((resolve, reject) => {
      const worker = new Worker(path.join(__dirname, 'runtime-extract.js'), { workerData: { archive, destination: staging } });
      worker.once('message', result => result.ok ? resolve() : reject(new Error(`Распаковка Java: ${result.error}`)));
      worker.once('error', reject);
      worker.once('exit', code => { if (code !== 0) reject(new Error(`Распаковка Java завершилась с кодом ${code}.`)); });
    });
    executable = await findJava(staging);
    if (!executable) throw new Error('В архиве не найден исполняемый файл Java.');
    await promisify(execFile)(executable, ['-version'], { windowsHide: true, timeout: 20000 });
    const directory = path.dirname(path.dirname(executable));
    const destination = path.join(root, `verified-${Date.now()}`);
    await fs.rename(directory, destination);
    await fs.rmdir(staging);
    executable = path.join(destination, 'bin', 'java.exe');
    await fs.unlink(archive);
  }
  if (!executable) throw new Error('Не удалось найти Java после распаковки.');
  await promisify(execFile)(executable, ['-version'], { windowsHide: true, timeout: 20000 });
  return executable;
}
module.exports = { fetchJson, ensureJava, MANIFEST };
