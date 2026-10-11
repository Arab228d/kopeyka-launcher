const fs = require('node:fs/promises');
const path = require('node:path');
const { constants, createReadStream } = require('node:fs');
const { randomUUID, createHash } = require('node:crypto');

function within(root, ...parts) {
  const result = path.resolve(root, ...parts), relative = path.relative(path.resolve(root), result);
  if (relative === '..' || relative.startsWith('..' + path.sep) || path.isAbsolute(relative)) throw new Error('Путь выходит за папку игры.');
  return result;
}
async function exists(file) { try { await fs.lstat(file); return true; } catch (error) { if (error.code === 'ENOENT') return false; throw error; } }
async function fileHash(file) { const hash = createHash('sha256'); for await (const chunk of createReadStream(file)) hash.update(chunk); return hash.digest('hex'); }
async function identicalTrees(first, second) {
  const a = await fs.lstat(first), b = await fs.lstat(second);
  if (a.isSymbolicLink() || b.isSymbolicLink()) return false;
  if (a.isFile() && b.isFile()) return a.size === b.size && await fileHash(first) === await fileHash(second);
  if (!a.isDirectory() || !b.isDirectory()) return false;
  const names = (await fs.readdir(first)).sort(), other = (await fs.readdir(second)).sort();
  if (JSON.stringify(names) !== JSON.stringify(other)) return false;
  for (const name of names) if (!await identicalTrees(path.join(first, name), path.join(second, name))) return false;
  return true;
}
async function gameFolders(root) {
  const folders = [root];
  try { for (const entry of await fs.readdir(within(root, 'profiles'), { withFileTypes: true })) if (entry.isDirectory() && !entry.isSymbolicLink()) folders.push(within(root, 'profiles', entry.name)); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  return folders;
}
async function shareWorlds(root) {
  root = path.resolve(root);
  const shared = within(root, 'saves');
  await fs.mkdir(shared, { recursive: true });
  for (const folder of (await gameFolders(root)).slice(1)) {
    const saves = within(root, path.relative(root, folder), 'saves');
    let backup = within(root, path.relative(root, folder), 'saves-before-shared');
    if (await exists(saves)) {
      const stat = await fs.lstat(saves);
      if (stat.isSymbolicLink()) {
        if ((await fs.realpath(saves)).toLowerCase() === (await fs.realpath(shared)).toLowerCase()) continue;
        throw new Error('Папка миров уже связана с другой папкой: ' + saves);
      }
      let backupIndex = 1;
      while (await exists(backup)) backup = within(root, path.relative(root, folder), 'saves-before-shared-' + ++backupIndex);
      for (const entry of await fs.readdir(saves, { withFileTypes: true })) {
        if (entry.isSymbolicLink()) throw new Error('В папке миров есть внешняя ссылка: ' + entry.name);
        const previous = (await fs.readdir(shared)).filter(name => name === entry.name || name.startsWith(entry.name + ' ('));
        let alreadyCopied = false;
        for (const name of previous) if (await identicalTrees(within(saves, entry.name), within(shared, name))) { alreadyCopied = true; break; }
        if (alreadyCopied) continue;
        let name = entry.name, suffix = 0;
        while (await exists(within(shared, name))) { suffix++; name = `${entry.name} (${path.basename(folder)}${suffix === 1 ? '' : '-' + suffix})`; }
        // Originals remain in the backup until the user removes them themselves.
        const staging = within(root, '.world-import-staging', randomUUID());
        await fs.mkdir(staging, { recursive: true });
        const stagedWorld = within(staging, entry.name);
        await fs.cp(within(saves, entry.name), stagedWorld, { recursive: true, force: false, errorOnExist: true, preserveTimestamps: true });
        // Only complete copies become visible in Minecraft's world list.
        await fs.rename(stagedWorld, within(shared, name));
        await fs.rmdir(staging);
      }
      await fs.rename(saves, backup);
    }
    try { await fs.symlink(shared, saves, process.platform === 'win32' ? 'junction' : 'dir'); }
    catch (error) { if (await exists(backup) && !await exists(saves)) await fs.rename(backup, saves); throw error; }
  }
}
function systemLanguage(preferred, available) {
  const names = new Map(available.map(name => [name.toLowerCase(), name]));
  for (const locale of preferred) {
    const parts = locale.toLowerCase().split(/[-_]/), language = parts[0];
    let candidate = parts.join('_');
    if (language === 'zh') candidate = parts.includes('hant') || parts.includes('tw') || parts.includes('hk') ? 'zh_tw' : 'zh_cn';
    if (names.has(candidate)) return names.get(candidate);
    const match = [...names.keys()].find(name => name.startsWith(language + '_'));
    if (match) return names.get(match);
  }
  return names.get('en_us') || 'en_us';
}
async function prepareGameData(root, gameDirectory, metadata, preferred) {
  await fs.mkdir(gameDirectory, { recursive: true });
  await shareWorlds(root);
  // New profiles inherit the latest preferences; existing profile options also
  // follow changes made during the most recent completed game session.
  const options = [];
  for (const folder of await gameFolders(root)) {
    const file = path.join(folder, 'options.txt');
    try { options.push({ file, time: (await fs.stat(file)).mtimeMs }); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  options.sort((a, b) => b.time - a.time);
  const target = path.join(gameDirectory, 'options.txt');
  if (options.length) {
    if (path.resolve(options[0].file) !== path.resolve(target)) {
      if (await exists(target)) await fs.copyFile(target, target + '.before-sync', constants.COPYFILE_EXCL).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await fs.copyFile(options[0].file, target);
    }
    return;
  }
  let available = ['en_us'];
  try {
    const index = JSON.parse(await fs.readFile(path.join(root, 'assets', 'indexes', `${metadata.assetIndex.id}.json`), 'utf8'));
    available.push(...Object.keys(index.objects).map(name => /(?:^|\/)lang\/([^/]+)\.(?:json|lang)$/.exec(name)?.[1]).filter(Boolean));
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
  await fs.writeFile(target, `lang:${systemLanguage(preferred, available)}\n`, { flag: 'wx' });
}
module.exports = { shareWorlds, systemLanguage, prepareGameData, gameFolders };
