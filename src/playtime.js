const fs = require('node:fs/promises');
const { performance } = require('node:perf_hooks');
const { jsonWriter } = require('./persistence');
class Playtime {
  constructor(file, clock = () => performance.now()) { this.file = file; this.clock = clock; this.write = jsonWriter(file); this.seconds = 0; this.since = null; }
  async load() {
    for (const file of [this.file, this.file + '.bak']) {
      try { const data = JSON.parse(await fs.readFile(file, 'utf8')); if (Number.isFinite(data.totalSeconds) && data.totalSeconds >= 0) { this.seconds = data.totalSeconds; return; } }
      catch (error) { if (error.code && error.code !== 'ENOENT') throw error; }
    }
  }
  total() { return Math.floor(this.seconds + (this.since === null ? 0 : Math.max(0, this.clock() - this.since) / 1000)); }
  start() { if (this.since === null) this.since = this.clock(); }
  async checkpoint(stop = false) {
    if (this.since !== null) { const now = this.clock(); this.seconds += Math.max(0, now - this.since) / 1000; this.since = stop ? null : now; }
    await this.write({ totalSeconds: this.seconds });
    return this.total();
  }
}
module.exports = { Playtime };
