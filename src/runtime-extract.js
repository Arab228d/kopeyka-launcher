// ZIP decompression stays off Electron's main thread.
const { parentPort, workerData } = require('node:worker_threads');
try {
  new (require('adm-zip'))(workerData.archive).extractAllTo(workerData.destination, true);
  parentPort.postMessage({ ok: true });
} catch (error) { parentPort.postMessage({ error: error.message }); }
