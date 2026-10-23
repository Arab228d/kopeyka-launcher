const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const { validateSettings } = require('./config');

// A home-relative directory is not redirected into a Windows Store app's
// private AppData when the launcher is started by that app.
function storageDirectory(home) { return path.join(home, '.kopeyka', 'launcher'); }
function legacyDirectories(home, appData, userData) {
  const candidates = [userData, path.join(appData, 'kopeyka-launcher'), path.join(home, 'AppData', 'Roaming', 'kopeyka-launcher')];
  const packages = path.join(home, 'AppData', 'Local', 'Packages');
  try {
    for (const name of fs.readdirSync(packages)) if (name.startsWith('OpenAI.Codex_')) candidates.push(path.join(packages, name, 'LocalCache', 'Roaming', 'kopeyka-launcher'));
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
  return [...new Set(candidates)];
}
async function loadSettings(directory, legacy, defaults) {
  await fsp.mkdir(directory, { recursive: true });
  const candidates = [];
  for (const folder of [directory, ...legacy]) for (const name of ['settings.json', 'settings.json.bak']) {
    const file = path.join(folder, name);
    try { candidates.push({ file, local: folder === directory, backup: name.endsWith('.bak'), time: (await fsp.stat(file)).mtimeMs }); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  candidates.sort((a, b) => Number(b.local) - Number(a.local) || (a.local ? Number(a.backup) - Number(b.backup) : b.time - a.time));
  for (const candidate of candidates) {
    try {
      const saved = JSON.parse(await fsp.readFile(candidate.file, 'utf8'));
      const value = validateSettings(saved, defaults);
      // Old installations had no automatic-version preference. Preserve their
      // chosen version, but retain an explicit choice made by newer versions.
      if (!Object.hasOwn(saved, 'useLatestRelease')) value.useLatestRelease = false;
      // Keep existing game files in place and persist the physical path.
      try { value.gameDirectory = fs.realpathSync.native(value.gameDirectory); }
      catch (error) { if (error.code !== 'ENOENT') throw error; }
      if (!candidate.local) for (const name of ['versions-cache.json', 'loader-catalog.json', 'playtime.json', 'launcher.log']) {
        try { await fsp.copyFile(path.join(path.dirname(candidate.file), name), path.join(directory, name), fs.constants.COPYFILE_EXCL); }
        catch (error) { if (!['ENOENT', 'EEXIST'].includes(error.code)) throw error; }
      }
      return value;
    } catch (error) { if (error.code && error.code !== 'ENOENT') throw error; }
  }
  if (candidates.length) throw new Error('Не удалось прочитать настройки и их резервную копию. Исходные файлы сохранены: ' + directory);
  return validateSettings({}, defaults);
}
function jsonWriter(file) {
  let queue = Promise.resolve();
  return value => {
    const contents = JSON.stringify(value, null, 2);
    const task = queue.catch(() => {}).then(async () => {
      await fsp.mkdir(path.dirname(file), { recursive: true });
      // Back up only valid JSON, never replace a good backup with a damaged file.
      try { const old = await fsp.readFile(file, 'utf8'); JSON.parse(old); await fsp.writeFile(file + '.bak', old); }
      catch (error) { if (error.code && error.code !== 'ENOENT') throw error; }
      await fsp.writeFile(file + '.tmp', contents);
      await fsp.rename(file + '.tmp', file);
    });
    queue = task;
    return task;
  };
}
async function migrateLegacyGame(source, home) {
  const appData = path.join(home, 'AppData'), relative = path.relative(appData, source);
  if (relative.startsWith('..') || path.isAbsolute(relative) || !source.replaceAll('\\', '/').toLowerCase().endsWith('/kopeyka/minecraft')) return source;
  try { await fsp.access(source); } catch (error) { if (error.code === 'ENOENT') return source; throw error; }
  const parent = path.join(home, '.kopeyka');
  await fsp.mkdir(parent, { recursive: true });
  let target = path.join(parent, 'minecraft');
  // Reuse a completed copy after an interruption before settings were saved.
  try { const marker = JSON.parse(await fsp.readFile(path.join(target, '.imported-from.json'), 'utf8')); if (marker.source === source) return target; } catch (error) { if (error.code && error.code !== 'ENOENT') throw error; }
  try { await fsp.access(target); target = path.join(parent, `minecraft-import-${Date.now()}`); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  const staging = target + '.importing';
  await fsp.cp(source, staging, { recursive: true, force: true, preserveTimestamps: true, filter: async file => {
    // Old shared-saves junctions point outside the new storage. Recreate them
    // after the copy instead of carrying links to the old AppData directory.
    return !(path.basename(file) === 'saves' && (await fsp.lstat(file)).isSymbolicLink());
  } });
  await fsp.writeFile(path.join(staging, '.imported-from.json'), JSON.stringify({ source }));
  await fsp.rename(staging, target);
  return target;
}
module.exports = { storageDirectory, legacyDirectories, loadSettings, jsonWriter, migrateLegacyGame };
