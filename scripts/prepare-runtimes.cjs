const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const { Worker } = require('node:worker_threads');
const packages = require('../build/runtime-lock.json');
const root = path.resolve(__dirname, '../build');
async function prepare(pkg) {
  const target = path.join(root, 'runtimes', `java-${pkg.major}`);
  const marker = path.join(target, 'verified.json');
  try {
    const saved = JSON.parse(await fs.readFile(marker, 'utf8'));
    if (saved.sha256 === pkg.sha256) {
      await promisify(execFile)(path.join(target, saved.executable), ['-version'], { windowsHide: true, timeout: 20000 });
      console.log(`Java ${pkg.major}: verified cache`); return;
    }
  } catch {}
  await fs.mkdir(path.join(root, 'runtime-downloads'), { recursive: true });
  const archive = path.join(root, 'runtime-downloads', pkg.name);
  let bytes;
  try { bytes = await fs.readFile(archive); } catch {}
  const valid = data => data && crypto.createHash('sha256').update(data).digest('hex') === pkg.sha256;
  if (!valid(bytes)) {
    console.log(`Downloading Java ${pkg.major} (${pkg.version})`);
    for (let attempt = 1; ; attempt++) {
      try {
        const response = await fetch(pkg.url, { signal: AbortSignal.timeout(600000) });
        if (!response.ok) throw Error(`Java ${pkg.major}: HTTP ${response.status}`);
        bytes = Buffer.from(await response.arrayBuffer());
        if (!valid(bytes)) throw Error(`Java ${pkg.major}: SHA-256 mismatch`);
        break;
      } catch (error) {
        if (attempt === 3) throw error;
        console.log(`Java ${pkg.major}: retry ${attempt + 1}`);
      }
    }
    await fs.writeFile(archive, bytes);
  }
  await fs.mkdir(target, { recursive: true });
  await new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, '../src/runtime-extract.js'), { workerData: { archive, destination: target } });
    worker.once('message', result => result.ok ? resolve() : reject(Error(result.error)));
    worker.once('error', reject);
    worker.once('exit', code => { if (code) reject(Error(`Extraction exited: ${code}`)); });
  });
  const folder = (await fs.readdir(target, { withFileTypes: true })).find(e => e.isDirectory() && e.name.startsWith('jdk'));
  if (!folder) throw Error(`Java ${pkg.major}: runtime folder missing`);
  const executable = path.join(folder.name, 'bin', 'java.exe');
  const { stderr } = await promisify(execFile)(path.join(target, executable), ['-version'], { windowsHide: true, timeout: 20000 });
  await fs.writeFile(marker, JSON.stringify({ ...pkg, executable }, null, 2));
  console.log(`Java ${pkg.major}: ${stderr.split('\n')[0]}`);
}
async function worker(queue) { while (queue.length) await prepare(queue.shift()); }
const queue = [...packages];
Promise.all([worker(queue), worker(queue)]).catch(error => { console.error(error.message); process.exitCode = 1; });
