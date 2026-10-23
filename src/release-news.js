const fs = require('node:fs/promises');
const path = require('node:path');
const {jsonWriter} = require('./persistence');
class ReleaseNews {
  constructor(directory, version, notes, existingInstall = false) { this.file = path.join(directory, 'release-news.json'); this.version = version; this.existingInstall = existingInstall; this.notes = notes; this.write = jsonWriter(this.file); }
  async load() {
    for (const suffix of ['', '.bak']) {
      try {
        const state = JSON.parse(await fs.readFile(this.file + suffix, 'utf8'));
        if (!state || typeof state !== 'object' || Array.isArray(state) || !(state.seen === null || typeof state.seen === 'string')) continue;
        this.state = { seen: state.seen };
        if (state.pending && typeof state.pending.version === 'string' && typeof state.pending.body === 'string') this.state.pending = { version: state.pending.version, body: state.pending.body.slice(0, 16000) };
        // Keep a valid backup available even if the last write was interrupted.
        if (suffix) await this.write(this.state);
        return;
      } catch (error) { if (!(error instanceof SyntaxError) && error.code !== 'ENOENT') throw error; }
    }
    this.state = {seen: this.existingInstall ? null : this.version};
    await this.write(this.state);
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
