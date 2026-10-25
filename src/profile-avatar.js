const fs = require('node:fs/promises');
const path = require('node:path');
const PNG = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const pending = new Map();
const remembered = new Map();
const valid = bytes => bytes.length <= 262144 && bytes.subarray(0, 8).equals(PNG);
async function avatar(nickname, directory, request = fetch) {
  if (typeof nickname !== 'string' || !/^[A-Za-z0-9_]{3,16}$/.test(nickname)) return null;
  const file = path.join(directory, nickname.toLowerCase() + '.png');
  const cached = remembered.get(file);
  if (cached && cached.until > Date.now()) return cached.src;
  if (pending.has(file)) return pending.get(file);
  const task = (async () => {
    let old = null;
    try {
      const [bytes, stat] = await Promise.all([fs.readFile(file), fs.stat(file)]);
      if (valid(bytes)) { old = 'data:image/png;base64,' + bytes.toString('base64');
        if (Date.now() - stat.mtimeMs < 86400000) return old;
      }
    } catch { /* An offline first launch keeps the local placeholder. */ }
    try {
      const response = await request('https://mc-heads.net/avatar/' + encodeURIComponent(nickname) + '/64', { signal: AbortSignal.timeout(8000) });
      if (!response.ok) throw new Error('Avatar unavailable');
      const bytes = Buffer.from(await response.arrayBuffer());
      if (!valid(bytes)) throw new Error('Invalid avatar');
      const src = 'data:image/png;base64,' + bytes.toString('base64');
      try { await fs.mkdir(directory, { recursive: true }); await fs.writeFile(file, bytes); } catch {}
      return src;
    } catch { return old; }
  })();
  pending.set(file, task);
  try {
    const src = await task;
    remembered.set(file, { src, until: Date.now() + (src ? 86400000 : 600000) });
    if (remembered.size > 50) remembered.delete(remembered.keys().next().value);
    return src;
  } finally { pending.delete(file); }
}
module.exports = { avatar };
