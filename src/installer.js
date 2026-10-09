const fs = require('node:fs/promises');
const { createReadStream } = require('node:fs');
const crypto = require('node:crypto');
const path = require('node:path');
const AdmZip = require('adm-zip');
const { setTimeout: delay } = require('node:timers/promises');
function downloadError(error, url) {
  const code = error.cause?.code || error.code || error.name;
  const host = new URL(url).hostname;
  if (/ENOTFOUND|EAI_AGAIN/.test(code)) return `Не удалось найти сервер ${host}. Проверь интернет и DNS.`;
  if (/CERT|TLS|SSL|ISSUER/.test(code)) return `Не удалось проверить защищённое соединение с ${host}. Проверь дату Windows и настройки сети.`;
  if (/Timeout|UND_ERR.*TIMEOUT|ECONNRESET|ETIMEDOUT|fetch failed/i.test(`${code} ${error.message}`)) return `Соединение с ${host} прервано или сервер не ответил (${code}). Проверь интернет и нажми «Играть» снова — загрузка продолжится.`;
  return `${error.message} (${host})`;
}

function inside(root, relative) {
  const resolved = path.resolve(root, relative);
  if (!resolved.startsWith(path.resolve(root) + path.sep)) throw new Error('Некорректный путь файла Minecraft.');
  return resolved;
}
async function validFile(file, descriptor) {
  try {
    const stat = await fs.stat(file);
    if (Number.isFinite(descriptor.size) && stat.size !== descriptor.size) return false;
    const hash = crypto.createHash('sha1');
    for await (const chunk of createReadStream(file)) hash.update(chunk);
    return hash.digest('hex') === descriptor.sha1.toLowerCase();
  } catch { return false; }
}
async function downloadFile(descriptor, file, progress = () => {}, request = fetch) {
  if (!/^[a-f0-9]{40}$/i.test(descriptor.sha1)) throw new Error('В каталоге отсутствует контрольная сумма файла.');
  if (await validFile(file, descriptor)) return { cached: true };
  await fs.mkdir(path.dirname(file), { recursive: true });
  const partial = file + '.part';
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    if (attempt > 1) await delay(500 * (attempt - 1));
    let handle;
    try {
      const response = await request(descriptor.url, { signal: AbortSignal.timeout(180000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      handle = await fs.open(partial, 'w');
      const hash = crypto.createHash('sha1'); let received = 0;
      const total = descriptor.size || Number(response.headers.get('content-length'));
      for await (const chunk of response.body) {
        let offset = 0;
        while (offset < chunk.length) {
          const { bytesWritten } = await handle.write(chunk, offset, chunk.length - offset);
          if (!bytesWritten) throw new Error('Не удалось записать файл на диск');
          offset += bytesWritten;
        }
        hash.update(chunk); received += chunk.length; progress(received, total);
      }
      await handle.close(); handle = null;
      if ((Number.isFinite(descriptor.size) && received !== descriptor.size) || hash.digest('hex') !== descriptor.sha1.toLowerCase()) throw new Error('Не совпала контрольная сумма');
      await fs.rename(partial, file);
      return { cached: false };
    } catch (error) {
      lastError = error; if (handle) await handle.close().catch(() => {});
      await fs.unlink(partial).catch(() => {});
    }
  }
  throw new Error(`Не удалось скачать ${path.basename(file)} после 3 попыток. ${downloadError(lastError, descriptor.url)}`);
}
function allowedLibrary(library, platform = 'windows', arch = 'x86_64') {
  if (!library.rules) return true;
  let allowed = false;
  for (const rule of library.rules) {
    if (rule.os?.name && rule.os.name !== platform) continue;
    if (rule.os?.arch && rule.os.arch !== arch) continue;
    if (rule.os?.version && !new RegExp(rule.os.version).test(require('node:os').release())) continue;
    if (rule.features && Object.values(rule.features).some(Boolean)) continue;
    allowed = rule.action === 'allow';
  }
  return allowed;
}
async function pool(jobs, worker, concurrency = 4) {
  let index = 0, failure;
  await Promise.all(Array.from({ length: Math.min(concurrency, jobs.length) }, async () => {
    while (!failure) {
      const current = index++; if (current >= jobs.length) break;
      try { await worker(jobs[current]); } catch (error) { failure = error; }
    }
  }));
  if (failure) throw failure;
}
async function prepareMinecraft(root, version, send = () => {}, options = {}) {
  const directory = inside(root, `versions/${version.id}`);
  await fs.mkdir(directory, { recursive: true });
  const metadataFile = inside(directory, `${version.id}.json`);
  send({ kind: 'progress', percent: null, message: `Проверка Minecraft ${version.id}…` });
  await downloadFile(version, metadataFile);
  const metadata = JSON.parse(await fs.readFile(metadataFile, 'utf8'));
  if (metadata.id !== version.id) throw new Error('Каталог вернул другую версию Minecraft.');
  const assetRoot = options.assetRoot || path.join(root, 'assets');
  const indexFile = inside(assetRoot, `indexes/${version.id}.json`);
  await downloadFile(metadata.assetIndex, indexFile);
  // Modded profiles pass the official asset index ID to Minecraft.
  const officialIndex = inside(assetRoot, `indexes/${metadata.assetIndex.id}.json`);
  if (officialIndex !== indexFile) await fs.copyFile(indexFile, officialIndex);
  const assets = JSON.parse(await fs.readFile(indexFile, 'utf8'));
  const jobs = [{ descriptor: metadata.downloads.client, file: inside(directory, `${version.id}.jar`) }];
  const natives = [];
  for (const library of metadata.libraries) {
    if (!allowedLibrary(library)) continue;
    if (library.downloads?.artifact) {
      const descriptor = library.downloads.artifact;
      jobs.push({ descriptor, file: inside(root, `libraries/${descriptor.path}`) });
    }
    const classifier = library.natives?.windows?.replace('${arch}', '64');
    const descriptor = classifier && library.downloads?.classifiers?.[classifier];
    if (descriptor) { const file = inside(root, `libraries/${descriptor.path}`); jobs.push({ descriptor, file }); natives.push(file); }
  }
  const uniqueAssets = new Map();
  for (const { hash, size } of Object.values(assets.objects)) {
    if (!/^[a-f0-9]{40}$/.test(hash)) throw new Error('Некорректный индекс ресурсов Minecraft.');
    uniqueAssets.set(hash, { descriptor: { sha1: hash, size, url: `https://resources.download.minecraft.net/${hash.slice(0, 2)}/${hash}` }, file: inside(assetRoot, `objects/${hash.slice(0, 2)}/${hash}`) });
  }
  jobs.push(...uniqueAssets.values());
  const deduplicated = [...new Map(jobs.map(job => [job.file, job])).values()];
  let complete = 0, downloaded = 0, cached = 0, last = 0;
  const active = new Map();
  function report(force = false) {
    if (!force && Date.now() - last < 200) return; last = Date.now();
    const transfer = [...active.values()].sort((a,b) => b.total - a.total)[0];
    const detail = transfer ? ` · ${Math.round(transfer.done/1048576)} / ${Math.round(transfer.total/1048576)} МБ` : '';
    send({ kind: 'progress', percent: complete / deduplicated.length * 100, message: `Minecraft ${version.id} · ${complete} / ${deduplicated.length} файлов${detail}` });
  }
  await pool(deduplicated, async job => {
    const result = await downloadFile(job.descriptor, job.file, (done, total) => { active.set(job.file, { done, total: total || done }); report(); });
    active.delete(job.file);
    result.cached ? cached++ : downloaded++; complete++; report();
  });
  if (natives.length) {
    const nativeDirectory = inside(root, `natives/${version.id}`); await fs.mkdir(nativeDirectory, { recursive: true });
    for (const file of natives) {
      const archive = new AdmZip(file);
      for (const entry of archive.getEntries()) {
        if (!entry.isDirectory && entry.entryName.toLowerCase().endsWith('.dll')) await fs.writeFile(inside(nativeDirectory, path.basename(entry.entryName)), entry.getData());
      }
    }
  }
  await fs.writeFile(path.join(directory, 'kopeyka-installed.json'), JSON.stringify({ version: version.id, metadataSha1: version.sha1, files: complete, installedAt: new Date().toISOString() }, null, 2));
  report(true);
  send({ kind: 'log', message: `Minecraft ${version.id}: скачано ${downloaded}, проверено в кеше ${cached}.` });
  return { metadata, metadataFile, downloaded, cached, files: complete };
}
module.exports = { prepareMinecraft, downloadFile, validFile, allowedLibrary, inside, downloadError };
