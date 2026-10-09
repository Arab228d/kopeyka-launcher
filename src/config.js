const path = require('node:path');
function validateSettings(input, defaults) {
  const result = { ...defaults, ...input };
  if (!/^[A-Za-z0-9_]{3,16}$/.test(result.nickname)) throw new Error('Ник: от 3 до 16 латинских букв, цифр или символов _');
  result.profiles = input.profiles ?? [result.nickname];
  if (!Array.isArray(result.profiles) || result.profiles.length < 1 || result.profiles.length > 15 || result.profiles.some(name => typeof name !== 'string' || !/^[A-Za-z0-9_]{3,16}$/.test(name))) throw new Error('Можно сохранить от 1 до 15 профилей с корректными никами.');
  if (new Set(result.profiles.map(name => name.toLowerCase())).size !== result.profiles.length) throw new Error('Такой ник уже есть в профилях.');
  if (!result.profiles.includes(result.nickname)) throw new Error('Выберите существующий профиль.');
  if (!Number.isInteger(result.memory) || result.memory < 2 || result.memory > 16) throw new Error('Выберите от 2 до 16 ГБ памяти.');
  if (typeof result.version !== 'string' || !/^[A-Za-z0-9_.-]{1,48}$/.test(result.version)) throw new Error('Выберите версию игры.');
  if (typeof result.gameDirectory !== 'string' || !path.isAbsolute(result.gameDirectory)) throw new Error('Выберите абсолютный путь к папке игры.');
  result.snapshots = Boolean(result.snapshots);
  result.historical = Boolean(result.historical);
  result.loader = result.loader || 'vanilla';
  if (!['vanilla', 'forge', 'fabric', 'optifine'].includes(result.loader)) throw new Error('Выберите Vanilla, Forge, Fabric или OptiFine.');
  return Object.fromEntries(['nickname', 'profiles', 'memory', 'version', 'gameDirectory', 'snapshots', 'historical', 'loader'].map(k => [k, result[k]]));
}
module.exports = { validateSettings };
