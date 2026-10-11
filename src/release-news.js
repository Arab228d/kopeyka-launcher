const fs = require('node:fs/promises');
const path = require('node:path');
const {jsonWriter} = require('./persistence');
class ReleaseNews {
  constructor(directory, version, notes, existingInstall = false) { this.file = path.join(directory, 'release-news.json'); this.version = version; this.existingInstall = existingInstall; this.notes = notes; this.write = jsonWriter(this.file); }
  async load() {
    try { this.state = JSON.parse(await fs.readFile(this.file, 'utf8')); }
    catch (e) { if (e.code !== 'ENOENT') throw e; this.state = {seen: this.existingInstall ? null : this.version}; await this.write(this.state); }
  }
  current() {
    const pending = this.state.pending;
    const body = pending?.version === this.version ? pending.body : this.notes;
    return {version:this.version, body:body || 'Обновлены функции и исправлены ошибки лаунчера.', unread:this.state.seen !== this.version};
  }
  async prepare(update) { this.state.pending = {version:update.version,body:String(update.notes || '').slice(0,16000)}; await this.write(this.state); }
  async acknowledge() { this.state.seen = this.version;  await this.write(this.state); }
}
module.exports = {ReleaseNews};
