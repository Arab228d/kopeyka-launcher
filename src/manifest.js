// Runtime checks for launcher manifests. TypeScript cannot validate JSON that
// arrives from Mojang, Forge or Fabric at runtime, so every manifest is checked
// once at the boundary and the rest of the launcher can rely on its shape.
const SHA1 = /^[a-f0-9]{40}$/i;

function fail(label, detail) {
  throw new Error(`Некорректный ${label}: ${detail}.`);
}
function isObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
function object(value, label, field) {
  if (!isObject(value)) fail(label, `${field || 'документ'} должен быть объектом`);
  return value;
}
function text(value, label, field) {
  if (typeof value !== 'string' || !value) fail(label, `${field} должен быть непустой строкой`);
  return value;
}
function optionalText(value, label, field) {
  if (value !== undefined && typeof value !== 'string') fail(label, `${field} должен быть строкой`);
  return value;
}
function integer(value, label, field) {
  if (!Number.isInteger(value) || value < 0) fail(label, `${field} должен быть неотрицательным целым числом`);
  return value;
}
function list(value, label, field) {
  if (!Array.isArray(value)) fail(label, `${field} должен быть массивом`);
  return value;
}
function link(value, label, field) {
  text(value, label, field);
  let parsed = null;
  try { parsed = new URL(value); } catch { fail(label, `${field} должен быть ссылкой`); }
  if (parsed && parsed.protocol !== 'https:' && parsed.protocol !== 'http:') fail(label, `${field} должен быть HTTP(S)-ссылкой`);
  return value;
}
// `size` is optional: some Forge artifacts omit it, and downloadFile tolerates
// its absence. `url` may be empty for generated artifacts that are never fetched.
function download(value, label, field, { path = false, url = 'required', size = true } = {}) {
  object(value, label, field);
  if (url === 'required') link(value.url, label, `${field}.url`);
  else if (typeof value.url === 'string' && value.url) link(value.url, label, `${field}.url`);
  else if (value.url !== undefined && value.url !== '') fail(label, `${field}.url должен быть строкой`);
  text(value.sha1, label, `${field}.sha1`);
  if (!SHA1.test(value.sha1)) fail(label, `${field}.sha1 должен содержать 40 hex-символов`);
  if (size && value.size !== undefined) integer(value.size, label, `${field}.size`);
  if (path) text(value.path, label, `${field}.path`);
  return value;
}
function rules(value, label, field) {
  list(value, label, field).forEach((rule, index) => {
    const where = `${field}[${index}]`;
    object(rule, label, where);
    if (rule.action !== 'allow' && rule.action !== 'disallow') fail(label, `${where}.action должен быть allow или disallow`);
    if (rule.os !== undefined) {
      object(rule.os, label, `${where}.os`);
      optionalText(rule.os.name, label, `${where}.os.name`);
      optionalText(rule.os.arch, label, `${where}.os.arch`);
      optionalText(rule.os.version, label, `${where}.os.version`);
    }
    if (rule.features !== undefined) object(rule.features, label, `${where}.features`);
  });
}
function argumentsField(value, label) {
  if (value === undefined) return value;
  object(value, label, 'arguments');
  for (const key of ['game', 'jvm']) {
    if (value[key] === undefined) continue;
    list(value[key], label, `arguments.${key}`).forEach((entry, index) => {
      if (typeof entry === 'string') return;
      const where = `arguments.${key}[${index}]`;
      object(entry, label, where);
      if (entry.value !== undefined && typeof entry.value !== 'string' && !Array.isArray(entry.value)) fail(label, `${where}.value должен быть строкой или массивом`);
      if (Array.isArray(entry.value) && entry.value.some(item => typeof item !== 'string')) fail(label, `${where}.value должен содержать только строки`);
      if (entry.rules !== undefined) rules(entry.rules, label, `${where}.rules`);
    });
  }
  return value;
}
// Libraries from Fabric and OptiFine profiles carry only `name` (the installer
// resolves coordinates later), so downloads metadata is optional.
function libraries(value, label, field = 'libraries') {
  list(value, label, field).forEach((library, index) => {
    const where = `${field}[${index}]`;
    object(library, label, where);
    text(library.name, label, `${where}.name`);
    if (library.downloads !== undefined) {
      object(library.downloads, label, `${where}.downloads`);
      if (library.downloads.artifact !== undefined) download(library.downloads.artifact, label, `${where}.downloads.artifact`, { path: true, size: false, url: 'optional' });
      if (library.downloads.classifiers !== undefined) {
        object(library.downloads.classifiers, label, `${where}.downloads.classifiers`);
        for (const [classifier, descriptor] of Object.entries(library.downloads.classifiers)) download(descriptor, label, `${where}.downloads.classifiers.${classifier}`, { path: true, size: false, url: 'optional' });
      }
    }
    if (library.natives !== undefined) {
      object(library.natives, label, `${where}.natives`);
      for (const [platform, classifier] of Object.entries(library.natives)) text(classifier, label, `${where}.natives.${platform}`);
    }
    if (library.rules !== undefined) rules(library.rules, label, `${where}.rules`);
  });
}
function id(value, label) {
  text(value, label, 'id');
  return value;
}
function inheritsFrom(value, label) {
  optionalText(value, label, 'inheritsFrom');
  return value;
}

function versionCatalog(value) {
  const label = 'список версий Minecraft';
  object(value, label);
  if (value.latest !== undefined) {
    object(value.latest, label, 'latest');
    optionalText(value.latest.release, label, 'latest.release');
    optionalText(value.latest.snapshot, label, 'latest.snapshot');
  }
  list(value.versions, label, 'versions').forEach((entry, index) => {
    const where = `versions[${index}]`;
    object(entry, label, where);
    text(entry.id, label, `${where}.id`);
    optionalText(entry.type, label, `${where}.type`);
    link(entry.url, label, `${where}.url`);
    if (!SHA1.test(entry.sha1 || '')) fail(label, `${where}.sha1 должен содержать 40 hex-символов`);
    if (entry.size !== undefined) integer(entry.size, label, `${where}.size`);
  });
  if (!value.versions.length) fail(label, 'versions пуст');
  return value;
}

function versionManifest(value, expectedId) {
  const label = expectedId ? `манифест Minecraft ${expectedId}` : 'манифест Minecraft';
  object(value, label);
  id(value.id, label);
  if (expectedId && value.id !== expectedId) fail(label, `id «${value.id}» не совпадает с выбранной версией`);
  object(value.downloads, label, 'downloads');
  download(value.downloads.client, label, 'downloads.client');
  object(value.assetIndex, label, 'assetIndex');
  id(value.assetIndex.id, label);
  download(value.assetIndex, label, 'assetIndex');
  libraries(value.libraries, label);
  argumentsField(value.arguments, label);
  inheritsFrom(value.inheritsFrom, label);
  optionalText(value.minecraftArguments, label, 'minecraftArguments');
  if (value.javaVersion !== undefined) {
    object(value.javaVersion, label, 'javaVersion');
    integer(value.javaVersion.majorVersion, label, 'javaVersion.majorVersion');
  }
  return value;
}

function fabricProfile(value) {
  const label = 'профиль Fabric';
  object(value, label);
  id(value.id, label);
  inheritsFrom(value.inheritsFrom, label);
  if (value.libraries !== undefined) libraries(value.libraries, label);
  else fail(label, 'отсутствует libraries');
  argumentsField(value.arguments, label);
  return value;
}

function assetIndex(value) {
  const label = 'индекс ресурсов Minecraft';
  object(value, label);
  optionalText(value.map_to_resources, label, 'map_to_resources');
  object(value.objects, label, 'objects');
  for (const [name, entry] of Object.entries(value.objects)) {
    object(entry, label, `objects.${name}`);
    if (!SHA1.test(entry.hash || '')) fail(label, `objects.${name}.hash должен содержать 40 hex-символов`);
    integer(entry.size, label, `objects.${name}.size`);
  }
  return value;
}

// Forge ships either version.json (new installers) or install_profile.json
// (old ones). Both describe libraries, and only some of them carry `id`.
function forgeProfile(value, fallbackId) {
  const label = 'профиль установщика Forge';
  object(value, label);
  if (value.id !== undefined) id(value.id, label);
  if (value.versionInfo !== undefined) object(value.versionInfo, label, 'versionInfo');
  if (value.versionInfo?.id !== undefined) id(value.versionInfo.id, label);
  optionalText(value.version, label, 'version');
  if (value.libraries !== undefined) libraries(value.libraries, label);
  if (value.versionInfo?.libraries !== undefined) libraries(value.versionInfo.libraries, label, 'versionInfo.libraries');
  if (value.install !== undefined) object(value.install, label, 'install');
  const installedId = value.id || value.versionInfo?.id || value.version;
  if (!installedId && !fallbackId) fail(label, 'нет id установленной версии');
  return installedId || fallbackId;
}

function neoforgeProfile(value) {
  const label = 'профиль NeoForge';
  object(value, label);
  id(value.id, label);
  inheritsFrom(value.inheritsFrom, label);
  if (value.libraries !== undefined) libraries(value.libraries, label);
  return value;
}

function loaderProfile(value, expectedId) {
  const label = expectedId ? `профиль загрузчика ${expectedId}` : 'профиль загрузчика';
  object(value, label);
  if (value.id !== undefined) id(value.id, label);
  inheritsFrom(value.inheritsFrom, label);
  if (value.libraries !== undefined) libraries(value.libraries, label);
  argumentsField(value.arguments, label);
  optionalText(value.minecraftArguments, label, 'minecraftArguments');
  return value;
}

function installerMarker(value) {
  const label = 'маркер установки загрузчика';
  object(value, label);
  id(value.id, label);
  if (value.combo !== undefined) {
    object(value.combo, label, 'combo');
    text(value.combo.forge, label, 'combo.forge');
    text(value.combo.optifine, label, 'combo.optifine');
  }
  return value;
}

function optifineMarker(value) {
  const label = 'файл OptiFine';
  object(value, label);
  id(value.id, label);
  optionalText(value.name, label, 'name');
  optionalText(value.minecraft, label, 'minecraft');
  return value;
}

function parseJson(source, label) {
  try { return JSON.parse(source); } catch { throw new Error(`Некорректный ${label}: файл повреждён.`); }
}

module.exports = {
  versionCatalog, versionManifest, fabricProfile, assetIndex, forgeProfile, neoforgeProfile,
  loaderProfile, installerMarker, optifineMarker, parseJson
};
