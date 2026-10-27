const $ = id => document.getElementById(id);
let config, versions = [], busy = false, versionsReady = false, modsBusy = false, loaderCatalog = null, updateAvailable = null, updating = false;
let checkingUpdate = false, refreshingVersions = false, profilesSaving = false, savingSettings = false, shaderSearchBusy = false, installedRequest = 0;
let modsTab = 'mods', shaderProfile = null;
const contentTabs = [['mods-installed-tab', 'mods'], ['mods-catalog-tab', 'mod-catalog'], ['resources-tab', 'resources'], ['shaders-open', 'shaders']];
const catalogKind = () => modsTab === 'mod-catalog' ? 'mod' : modsTab === 'resources' ? 'resourcepack' : 'shader';
const catalogLabels = { shader: 'Шейдеры', mod: 'Моды', resourcepack: 'Ресурспаки' };
const api = window.launcher;
const startupCheck = (key, operation, describe) => window.startup ? window.startup.check(key, operation, describe) : operation;
let refreshedVersions = null, refreshedLoaders = null;
function acceptVersions(result) {
  const latest = result.versions.find(v => v.id === result.latest?.release && v.type === 'release') || result.versions.find(v => v.type === 'release');
  versions = latest ? [latest, ...result.versions.filter(v => v.id !== latest.id)] : result.versions;
  if (latest && config.useLatestRelease !== false) { config.version = latest.id; config.loader = 'vanilla'; $('version').value = ''; }
}
function applyCatalogRefresh() {
  if (!versionsReady || busy || modsBusy || profilesSaving || savingSettings || (!refreshedVersions && !refreshedLoaders)) return;
  if (refreshedVersions) { acceptVersions(refreshedVersions); refreshedVersions = null; }
  if (refreshedLoaders) { loaderCatalog = refreshedLoaders; refreshedLoaders = null; }
  renderVersions(); updateModProfile(); updateControls();
  if (!$('mods').hidden) refreshInstalled();
}
const logClock = new Intl.DateTimeFormat('ru-RU', {hour:'2-digit',minute:'2-digit',second:'2-digit'});
let logSecond = -1, logStamp = '';
let logText = '', logQueue = [], logQueueSize = 0, logTimer;
function page(name) {
  document.body.classList.toggle('mods-view', name === 'mods');
  document.body.classList.toggle('logs-view', name === 'logs');
  document.body.classList.toggle('news-view', name === 'news');
  document.querySelectorAll('.page').forEach(el => el.hidden = el.id !== name);
  document.querySelectorAll('.nav-button').forEach(el => el.classList.toggle('active', el.dataset.page === name || el.dataset.page === 'home' && ['mods', 'settings'].includes(name)));
  if (name === 'mods' && config) { updateModProfile(); refreshInstalled(); }
  if (name === 'logs') flushLogs();
  if (name === 'news') refreshNews();
}
document.querySelectorAll('[data-page]').forEach(el => el.addEventListener('click', () => page(el.dataset.page)));
function status(message, error = false) { $('status').textContent = message; $('status').parentElement.hidden = !message; $('status').parentElement.classList.toggle('error', error); }
window.addEventListener('error', event => {
  console.error('Renderer error:', event.error || event.message);
  if (!busy && !modsBusy) status('Ошибка интерфейса. Открой журнал для подробностей.', true);
});
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled renderer rejection:', event.reason);
  if (!busy && !modsBusy) status('Не удалось выполнить операцию. Повтори действие.', true);
});
function updateAvatar(element, nickname) {
  if (!api.avatar || element.dataset.nickname === nickname) return;
  element.dataset.nickname = nickname;
  element.querySelector('img')?.remove();
  api.avatar(nickname).then(src => {
    if (!src || element.dataset.nickname !== nickname) return;
    const picture = document.createElement('img'); picture.className = 'skin-avatar';
    picture.alt = ''; picture.src = src; picture.decoding = 'async';
    picture.addEventListener('error', () => picture.remove(), { once: true });
    element.append(picture);
  }).catch(() => {});
}
function showPlaytime(seconds = 0) { const minutes = Math.floor(seconds / 60); $('playtime').textContent = `${Math.floor(minutes / 60)} ч ${minutes % 60} мин`; }
function current() { return { ...config, nickname: config.nickname, version: $('version').value.split('|')[0], memory: Number($('memory').value), snapshots: $('snapshots').checked, historical: $('historical').checked, loader: $('loader').value }; }
function profileKey(profile) { return JSON.stringify([profile.gameDirectory, profile.version, profile.loader]); }
function updateControls() {
  const operationLocked = busy || modsBusy || profilesSaving || savingSettings;
  const locked = operationLocked || !config || !versionsReady;
  const ready = versionsReady && Boolean($('version').value);
  $('play').disabled = locked || !ready;
  ['version', 'nickname', 'memory', 'snapshots', 'historical', 'choose-folder', 'save', 'loader', 'optifine-import', 'profiles-open'].forEach(id => $(id).disabled = locked);
  $('mods-import').disabled = locked || !ready || !['forge', 'forge_optifine', 'fabric', 'neoforge'].includes($('loader').value);
  $('refresh-versions').disabled = operationLocked || refreshingVersions;
  $('check-updates').disabled = operationLocked || checkingUpdate;
  $('launcher-update').disabled = operationLocked;
  $('shaders-open').disabled = locked || !ready;
  $('mods-installed-tab').disabled = locked || !ready;
  $('mods-catalog-tab').disabled = locked || !ready;
  $('resources-tab').disabled = locked || !ready;
  $('shaders-query').disabled = locked;
  $('shaders-search').querySelector('button').disabled = locked;
  $('shaders-more').disabled = locked || shaderSearchBusy;
  document.querySelectorAll('.mod-card button, .shader-card button').forEach(el => el.disabled = locked || el.dataset.installed === 'true');
}
function setBusy(value, running = false) {
  window.dispatchEvent(new CustomEvent('game-running', { detail: value || modsBusy }));
  busy = value; if (!value && (refreshedVersions || refreshedLoaders)) applyCatalogRefresh(); $('play').disabled = value || modsBusy || !versionsReady;
  $('play-text').textContent = running ? 'В игре' : value ? 'Ждём…' : 'Играть';
  $('play').setAttribute('aria-busy', String(value));
  updateControls();
}
function launchTransition(active) {
    if (document.body.classList.contains('launch-transition') === active) return;
  document.body.classList.toggle('launch-transition', active);
  $('launch-overlay').hidden = !active;
  if (active) page('home');
    else { $('launch-progress').hidden = true; $('launch-indeterminate').hidden = false; $('launch-detail').textContent = ''; }
  window.dispatchEvent(new CustomEvent('launch-transition', { detail: active }));
}
function renderVersions() {
  const selected = $('version').value;
  const available = versions.filter(v => v.type === 'release' || (config.snapshots && v.type === 'snapshot') || (config.historical && ['old_alpha', 'old_beta'].includes(v.type)));
  const labels = { snapshot: ' · Тестовая', old_alpha: ' · Alpha / Classic', old_beta: ' · Beta' };
  const options = available.flatMap(v => {
    const items = [new Option(`${v.id}${labels[v.type] || ''}`, v.id)];
    if (v.type === 'release') for (const [loader, title] of [['fabric', 'Fabric'], ['forge', 'Forge'], ['neoforge', 'NeoForge'], ['optifine', 'OptiFine'], ['forge_optifine', 'Forge + OptiFine']]) if (loader === 'forge_optifine' ? loaderCatalog?.forge_optifine?.[v.id] : !loaderCatalog || !loaderCatalog[loader] || loaderCatalog[loader][v.id]) items.push(new Option(`${v.id} ${title}`, `${v.id}|${loader}`));
    return items;
  });
  $('version').replaceChildren(...options);
  const saved = config.version + (config.loader && config.loader !== 'vanilla' ? '|' + config.loader : '');
  $('version').value = options.some(o => o.value === selected) ? selected : options.some(o => o.value === saved) ? saved : options[0]?.value || '';
  $('loader').value = $('version').value.split('|')[1] || 'vanilla';
}
function log(message) {
  const now = Date.now(), second = Math.floor(now / 1000);
  if (second !== logSecond) { logSecond = second; logStamp = logClock.format(now); }
  const line = `[${logStamp}] ${message}\n`;
  logQueue.push(line); logQueueSize += line.length;
  if (logQueueSize > 160000) flushLogs();
  if (!logTimer) logTimer = setTimeout(flushLogs, 100);
}
function flushLogs() {
  clearTimeout(logTimer); logTimer = undefined;
  if (logQueue.length) { logText = (logText + logQueue.join('')).slice(-80000); logQueue = []; logQueueSize = 0; }
  if ($('logs').hidden) return;
  const el = $('log');
  if (el.textContent === logText) return;
  const follow = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
  el.textContent = logText;
  if (follow) el.scrollTop = el.scrollHeight;
}
api.onEvent(event => {
  if (event.kind === 'versions-refreshed') { refreshedVersions = event.data; applyCatalogRefresh(); return; }
  if (event.kind === 'loaders-refreshed') { refreshedLoaders = event.data; applyCatalogRefresh(); return; }
  if (event.kind === 'playtime') showPlaytime(event.seconds);
  if (event.kind === 'mods-progress') {
    modStatus(event.message); if (!$('shaders-panel').hidden) $('shaders-status').textContent = event.message + (event.percent === null ? '' : ' ' + Math.round(event.percent) + '%'); $('mods-progress').hidden = false;
    if (event.percent === null) $('mods-progress').removeAttribute('value'); else $('mods-progress').value = event.percent;
  }
  if (event.kind === 'update-progress') { $('launcher-update').textContent = 'Обновление ' + event.percent + '%'; $('update-status').textContent = 'Загрузка обновления: ' + event.percent + '%'; }
  if (event.kind === 'log') log(event.message);
  if (event.kind === 'progress') {
      $('launch-detail').textContent = event.message || '';
      $('launch-progress').hidden = event.percent === null;
      $('launch-indeterminate').hidden = event.percent !== null;
      if (event.percent !== null) $('launch-progress').value = Math.max(0, Math.min(100, event.percent));
    status(event.message); $('progress').hidden = false;
    if (event.percent === null) { $('progress').removeAttribute('value'); $('percent').textContent = ''; }
    else { const percent = Math.max(0, Math.min(100, event.percent)); $('progress').value = percent; $('percent').textContent = `${Math.round(percent)}%`; }
  }
  if (event.kind === 'state') {
      if (event.state === 'preparing' || event.state === 'launching') launchTransition(true);
      if (event.state === 'preparing') $('launch-detail').textContent = event.message || 'Проверка файлов…';
      if (event.state === 'launching') { $('launch-detail').textContent = 'Запускаем Minecraft…'; $('launch-progress').hidden = true; $('launch-indeterminate').hidden = false; }
    if (event.state === 'idle' || event.state === 'running') launchTransition(false);
    setBusy(event.state !== 'idle', event.state === 'running'); status(event.state === 'preparing' ? event.message : '');
    if (event.state !== 'preparing') { $('progress').hidden = true; $('percent').textContent = ''; }
  }
  if (event.kind === 'error') { launchTransition(false); window.dispatchEvent(new CustomEvent('game-running', { detail: false })); setBusy(false); status(event.message, true); log(event.message); $('progress').hidden = true; $('percent').textContent = ''; }
});
$('play').addEventListener('click', async () => {
  if (busy || modsBusy || profilesSaving || !versionsReady || !$('version').value) return;
  setBusy(true);
    launchTransition(true);
    $('launch-detail').textContent = 'Проверка файлов…';
    try { const result = await api.launch(current()); if (!result.ok) { launchTransition(false); setBusy(false); status(result.error || 'Не удалось запустить игру.', true); } }
    catch (error) { launchTransition(false); setBusy(false); status(error.message, true); }
});

function filterVersions() { renderVersions(); updateModProfile(); updateControls(); if (!$('mods').hidden) refreshInstalled(); }
$('snapshots').addEventListener('change', () => { config.snapshots = $('snapshots').checked; filterVersions(); });
$('historical').addEventListener('change', () => { config.historical = $('historical').checked; filterVersions(); });
$('version').addEventListener('change', async () => {
  $('loader').value = $('version').value.split('|')[1] || 'vanilla';
  config.useLatestRelease = false; config.version = $('version').value.split('|')[0]; config.loader = $('loader').value;
  updateModProfile(); updateControls(); if (!$('mods').hidden) refreshInstalled();
  try { await api.save(current()); } catch (error) { status(error.message, true); }
});
$('save').addEventListener('click', async () => {
  if (savingSettings || !config) return;
  savingSettings = true; updateControls();
  try { config = await api.save(current()); $('profile-name').textContent = config.nickname; updateAvatar(document.querySelector('.avatar'), config.nickname); $('settings-status').textContent = 'Настройки сохранены.'; }
  catch (error) { $('settings-status').textContent = error.message; }
  finally { savingSettings = false; applyCatalogRefresh(); updateControls(); }
});
$('choose-folder').addEventListener('click', async () => {
  try { const folder = await api.chooseFolder(); if (folder) { config.gameDirectory = folder; $('game-path').textContent = folder; $('settings-status').textContent = 'Нажми «Сохранить», чтобы применить новую папку.'; } }
  catch (error) { $('settings-status').textContent = error.message; }
});
$('card-folder').addEventListener('click', async () => { try { await api.openFolder(); } catch (error) { status(error.message, true); } });
$('clear-log').addEventListener('click', () => { clearTimeout(logTimer); logTimer = undefined; logText = ''; logQueue = []; logQueueSize = 0; $('log').textContent = ''; });
$('export-log').addEventListener('click', async () => { try { const file = await api.exportLog(); if (file) log(`Журнал сохранён: ${file}`); } catch (error) { log(error.message); } });
async function init() {
  try {
    config = await startupCheck('settings', api.settings(), () => ({ text: 'Загружены' }));
    showPlaytime(config.playtimeSeconds);
    config.profiles ||= [config.nickname]; $('profile-name').textContent = config.nickname; updateAvatar(document.querySelector('.avatar'), config.nickname);
    $('memory').value = config.memory; $('snapshots').checked = config.snapshots; $('historical').checked = config.historical; $('loader').value = config.loader || 'vanilla'; $('game-path').textContent = config.gameDirectory;
    $('memory-hint').textContent = `На компьютере ${config.totalMemory} ГБ. Оставь минимум 1 ГБ для Windows.`;
    window.dispatchEvent(new Event('ui-settings-ready'));
    const [result, catalog] = await Promise.all([
      startupCheck('versions', api.versions(), value => ({ state: value.source === 'cache' ? 'cache' : 'done', text: value.source === 'cache' ? 'Сохранённый список' : 'Список получен' })),
      startupCheck('loaders', api.loaderCatalog(), value => ({ state: value.source === 'cache' ? 'cache' : value.errors?.length ? 'warning' : 'done', text: value.source === 'cache' ? 'Сохранённый каталог' : value.errors?.length ? 'Часть серверов недоступна' : 'Каталог получен' })).catch(error => { log(error.message); return null; })
    ]);
    loaderCatalog = catalog;
    acceptVersions(result);
    $('version').value = ''; renderVersions(); versionsReady = true; updateModProfile(); setBusy(false);
    status('');
  } catch (error) { status(error.message, true); log(error.message); updateControls(); window.dispatchEvent(new Event('ui-settings-ready')); }
}
// Start after all state bindings used by asynchronous UI handlers are initialized.
queueMicrotask(() => { updateControls(); init(); });
checkLauncherUpdate();
function modStatus(message, error = false) { $('mods-status').textContent = message; $('mods-status').classList.toggle('error', error); }
function updateModProfile() {
  if (!config) return;
  const loader = $('loader').value;
  $('mods-version').textContent = $('version').selectedOptions[0]?.textContent || config.version;
  $('optifine-panel').hidden = true;
  $('loader-note').textContent = loader === 'vanilla' ? 'Для JAR-модов выбери Forge, NeoForge или Fabric.' : 'Загрузчик скачивается автоматически при нажатии «Играть».';
  $('mods-selection').textContent = modsTab !== 'mods' ? catalogLabels[catalogKind()] : 'Установлено';
  if (modsTab !== 'mods' && versionsReady && $('version').value && shaderProfile !== profileKey(current())) loadShaders();
}
function modMedia(hit, position = 0) {
  const media = document.createElement('div'); media.className = 'mod-media';
  const gallery = hit.gallery || [], source = gallery[0] || hit.icon;
  const monogram = document.createElement('span'); monogram.className = 'mod-monogram'; monogram.textContent = hit.title.slice(0, 2).toUpperCase(); media.append(monogram);
  if (!source) return media;
  if (!gallery.length) media.classList.add('icon-only');
  const cover = document.createElement('img'); cover.className = 'mod-cover'; cover.src = source; cover.alt = gallery.length ? `Скриншот ${hit.title}` : `Иконка ${hit.title}`; cover.loading = position < 4 ? 'eager' : 'lazy'; cover.decoding = 'async'; cover.referrerPolicy = 'no-referrer';
  let fallback = false;
  cover.addEventListener('error', () => {
    if (!fallback && hit.icon && cover.src !== hit.icon) { fallback = true; media.classList.add('icon-only'); cover.src = hit.icon; }
    else cover.hidden = true;
  });
  media.append(cover);
  if (gallery.length > 1) {
    let index = 0;
    const next = document.createElement('button'); next.type = 'button'; next.className = 'gallery-next'; next.textContent = `1 / ${gallery.length} ›`; next.setAttribute('aria-label', `Следующий скриншот ${hit.title}`);
    next.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); index = (index + 1) % gallery.length; media.classList.remove('icon-only'); cover.hidden = false; cover.src = gallery[index]; next.textContent = `${index + 1} / ${gallery.length} ›`; });
    media.append(next);
  }
  return media;
}
async function refreshInstalled() {
  if (!config || !versionsReady || !$('version').value) return;
  const request = ++installedRequest, profile = current();
  const key = profileKey(profile);
  if ($('mods-installed-list').dataset.profile !== key) {
    $('mods-installed-list').dataset.profile = key;
    $('mods-installed-list').replaceChildren(); modStatus('Загружаем установленное…');
  }
  try {
    const list = await api.listInstalled(profile);
    if (request !== installedRequest || profileKey(profile) !== profileKey(current())) return;
    modStatus('');
    $('mods-installed-list').replaceChildren(...list.map((mod, index) => {
      const card = document.createElement('div'); card.className = `mod-card${mod.kind !== 'mod' || mod.enabled ? '' : ' disabled'}`;
      const title = document.createElement('strong'); title.textContent = mod.title;
      const toggle = document.createElement('button'); toggle.className = 'secondary-button'; toggle.textContent = mod.enabled ? 'Выключить' : 'Включить'; toggle.disabled = busy || modsBusy;
      toggle.addEventListener('click', () => modOperation(async () => { await api.toggleMod(profile, mod.file); await refreshInstalled(); return mod.enabled ? 'Мод выключен.' : 'Мод включён.'; }));
      const body = document.createElement('div'); body.className = 'mod-body';
      const type = document.createElement('small'); type.className = 'installed-kind';
      type.textContent = { mod: 'Мод', resourcepack: 'Ресурспак', shader: 'Шейдер' }[mod.kind] || 'Мод';
      const info = document.createElement('div'); info.className = 'installed-info'; info.append(title, type);
      body.append(info); if (mod.kind === 'mod') body.append(toggle);
      card.append(modMedia(mod, index), body); return card;
    }));
    if (!list.length) {
      const empty = document.createElement('div'); empty.className = 'mods-empty';
      const icon = document.createElement('span'); icon.className = 'empty-mod-icon';
      const title = document.createElement('strong'); title.textContent = 'Пока ничего не установлено';
      const hint = document.createElement('p'); hint.textContent = ['forge','forge_optifine','fabric','neoforge'].includes($('loader').value) ? 'Добавь JAR-моды или установи шейдер из соседней вкладки. Ресурспаки из папки сборки тоже появятся здесь.' : 'Шейдеры доступны в соседней вкладке. Для JAR-модов выбери Forge, NeoForge или Fabric.';
      empty.append(icon,title,hint); $('mods-installed-list').append(empty); modStatus('');
    }
    updateControls();
  } catch (error) { if (request === installedRequest && profileKey(profile) === profileKey(current())) modStatus(error.message, true); }
}
async function modOperation(action) {
  if (busy || modsBusy) return;
  modsBusy = true; setBusy(busy); document.querySelectorAll('.mod-card input, .mod-card button').forEach(el => el.disabled = true);
  try { config = await api.save(current()); const message = await action(); if (message) modStatus(message); }
  catch (error) { modStatus(error.message, true); }
  finally { modsBusy = false; $('mods-progress').hidden = true; setBusy(busy); updateModProfile(); }
}
$('loader').addEventListener('change', async () => {
  $('version').value = $('version').value.split('|')[0] + ($('loader').value === 'vanilla' ? '' : '|' + $('loader').value);
  config.useLatestRelease = false; config.version = $('version').value.split('|')[0]; config.loader = $('loader').value;
  updateModProfile(); updateControls(); $('optifine-status').textContent = '';
  try { config = await api.save(current()); await refreshInstalled(); } catch (error) { modStatus(error.message, true); }
});
$('mods-copy').addEventListener('click', async () => {
  if (!versionsReady || busy || modsBusy) return;
  const choices = [...$('version').options].map(option => option.value).filter(value => value && value !== $('version').value);
  if (!choices.length) return modStatus('Нет другой сборки для копирования.', true);
  const selected = window.prompt('Куда скопировать моды? Введи версию и загрузчик, например 1.21.1|fabric.\nДоступно: ' + choices.join(', '), choices[0]);
  if (!selected || !choices.includes(selected)) return modStatus('Выбери сборку из списка.', true);
  const [version, loader = 'vanilla'] = selected.split('|');
  try { modsBusy = true; updateControls(); const count = await api.copyMods(current(), { ...current(), version, loader }); modStatus(`Скопировано модов: ${count}.`); } catch (error) { modStatus(error.message, true); } finally { modsBusy = false; updateControls(); }
});
$('mods-import').addEventListener('click', () => modOperation(async () => { const files = await api.importMods(current()); await refreshInstalled(); return files.length ? 'Добавлено модов: ' + files.length + '.' : ''; }));
$('optifine-import').addEventListener('click', () => modOperation(async () => { const file = await api.importOptifine(current()); if (file) $('optifine-status').textContent = file; return file ? 'OptiFine выбран. Нажми «Играть», чтобы установить и запустить.' : ''; }));
$('optifine-site').addEventListener('click', () => api.optifineSite().catch(error => modStatus(error.message, true)));

let editingProfile = null;
function resetProfileForm() {
  editingProfile = null; $('nickname').value = ''; $('profiles-submit').textContent = 'Добавить'; $('profiles-cancel').hidden = true;
  $('profiles-submit').disabled = config.profiles.length >= 15;
}
function renderProfiles() {
  $('profiles-count').textContent = config.profiles.length;
  $('profiles-list').replaceChildren(...config.profiles.map(name => {
    const row = document.createElement('div'); row.className = 'profile-row'; row.classList.toggle('selected', name === config.nickname);
    const choose = document.createElement('button'); choose.className = 'profile-choice'; const avatar = document.createElement('span'); avatar.className = 'profile-card-avatar'; avatar.setAttribute('aria-hidden','true'); updateAvatar(avatar, name); const label = document.createElement('span'); label.textContent = name; const detail = document.createElement('small'); detail.textContent = name === config.nickname ? 'Активный профиль' : 'Выбрать профиль'; const info = document.createElement('span'); info.append(label,detail); choose.append(avatar, info); choose.disabled = name === config.nickname;
    choose.addEventListener('click', () => saveProfiles(config.profiles, name));
    const edit = document.createElement('button'); edit.className = 'secondary-button'; edit.textContent = 'Изменить'; edit.setAttribute('aria-label', `Изменить ${name}`);
    edit.addEventListener('click', () => { editingProfile = name; $('nickname').value = name; $('profiles-submit').textContent = 'Сохранить'; $('profiles-submit').disabled = false; $('profiles-cancel').hidden = false; $('nickname').focus(); });
    const remove = document.createElement('button'); remove.className = 'secondary-button'; remove.textContent = 'Удалить'; remove.disabled = config.profiles.length === 1; remove.setAttribute('aria-label', `Удалить ${name}`);
    remove.addEventListener('click', () => { const remaining = config.profiles.filter(n => n !== name); saveProfiles(remaining, config.nickname === name ? remaining[0] : config.nickname); });
    row.append(choose, edit, remove); return row;
  }));
}
async function saveProfiles(profiles, nickname) {
  if (busy || modsBusy || profilesSaving) return;
  profilesSaving = true;
  updateControls();
  $('profiles-dialog').querySelectorAll('button, input').forEach(el => el.disabled = true);
  try {
    config = await api.save({ ...current(), profiles, nickname });
    $('profile-name').textContent = config.nickname; updateAvatar(document.querySelector('.avatar'), config.nickname);
    $('profiles-status').textContent = 'Сохранено.';
  } catch (error) { $('profiles-status').textContent = error.message; }
  finally {
    profilesSaving = false;
    $('profiles-dialog').querySelectorAll('button, input').forEach(el => el.disabled = false);
    renderProfiles(); resetProfileForm();
    applyCatalogRefresh(); updateControls();
  }
}
$('profiles-open').addEventListener('click', () => {
  if (!config || busy || modsBusy) return;
  renderProfiles(); resetProfileForm(); $('profiles-status').textContent = ''; $('profiles-dialog').showModal();
});
$('profiles-close').addEventListener('click', () => $('profiles-dialog').close());
$('profiles-dialog').addEventListener('cancel', e => { if (profilesSaving) e.preventDefault(); });
$('profiles-cancel').addEventListener('click', resetProfileForm);
$('profiles-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('nickname').value.trim();
  if (!/^[A-Za-z0-9_]{3,16}$/.test(name)) { $('profiles-status').textContent = 'Ник: 3–16 латинских букв, цифр или _.'; return; }
  if (config.profiles.some(n => n !== editingProfile && n.toLowerCase() === name.toLowerCase())) { $('profiles-status').textContent = 'Такой ник уже есть.'; return; }
  if (!editingProfile && config.profiles.length >= 15) { $('profiles-status').textContent = 'Можно добавить до 15 профилей.'; return; }
  const profiles = editingProfile ? config.profiles.map(n => n === editingProfile ? name : n) : [...config.profiles, name];
  saveProfiles(profiles, !editingProfile || config.nickname === editingProfile ? name : config.nickname);
});

let shaderOffset = 0, shaderTotal = 0, shaderRequest = 0;
const installedShaders = new Set();
async function loadShaders(append = false) {
  const request = ++shaderRequest;
  const profile = current(), kind = catalogKind();
  shaderProfile = profileKey(profile);
  if (!append) { shaderOffset = 0; $('shaders-results').replaceChildren(); }
  shaderSearchBusy = true; $('shaders-more').disabled = true; $('shaders-status').textContent = 'Загружаем каталог…';
  try {
    const data = kind === 'shader' ? await api.searchShaders(profile, $('shaders-query').value, shaderOffset) : await api.searchCatalog(profile, kind, $('shaders-query').value, shaderOffset);
    if (request !== shaderRequest || profileKey(profile) !== profileKey(current())) return;
    shaderTotal = data.total; shaderOffset += data.hits.length;
    for (const [i, hit] of data.hits.entries()) {
      const card = document.createElement('article'); card.className = 'shader-card';
      const body = document.createElement('div'); body.className = 'mod-body';
      const title = document.createElement('strong'); title.textContent = hit.title;
      const description = document.createElement('p'); description.textContent = hit.description;
      const author = document.createElement('small'); author.textContent = hit.author + ' · ' + Number(hit.downloads).toLocaleString('ru-RU') + ' загрузок';
      const button = document.createElement('button'); button.className = 'secondary-button'; button.type = 'button';
      const key = profileKey(profile) + '|' + kind + '|' + hit.id;
      button.dataset.installed = String(installedShaders.has(key));
      button.textContent = installedShaders.has(key) ? 'Установлено' : 'Установить'; button.disabled = installedShaders.has(key) || busy || modsBusy;
      button.addEventListener('click', async () => {
        if (busy || modsBusy || kind !== catalogKind() || profileKey(profile) !== profileKey(current())) return;
        modsBusy = true; setBusy(busy); document.querySelectorAll('.shader-card button').forEach(b => b.disabled = true); button.textContent = 'Скачиваем…';
        try { if (kind === 'shader') await api.installShader(profile, hit.id); else await api.installCatalog(profile, kind, hit.id); installedShaders.add(key); button.dataset.installed = 'true'; button.textContent = 'Установлено'; $('shaders-status').textContent = hit.title + (kind === 'mod' ? ' установлен. Будет подключён при следующем запуске игры.' : ' установлен. Выбери его в настройках ' + (kind === 'shader' ? 'шейдеров' : 'ресурспаков') + ' Minecraft.'); }
        catch (error) { button.textContent = 'Установить'; $('shaders-status').textContent = error.message; }
        finally { modsBusy = false; setBusy(busy); updateModProfile(); $('mods-progress').hidden = true; }
      });
      body.append(title, description, author, button); card.append(modMedia(hit,i), body); $('shaders-results').append(card);
    }
    $('shaders-status').textContent = data.message || (shaderOffset ? 'Показано ' + shaderOffset + ' из ' + shaderTotal : 'Для этой версии ничего не найдено. Попробуй другой запрос или версию Minecraft.');
    $('shaders-more').hidden = shaderOffset >= shaderTotal || !data.hits.length;
  } catch (error) { if (request === shaderRequest) { shaderProfile = null; $('shaders-status').textContent = error.message; } }
  finally { if (request === shaderRequest) { shaderSearchBusy = false; updateControls(); } }
}
function selectModsTab(name) {
  if (!versionsReady || busy || modsBusy) return;
  modsTab = name;
  const shaders = name !== 'mods';
  $('shaders-title').textContent = catalogLabels[catalogKind()];
  $('shaders-query').placeholder = name === 'mod-catalog' ? 'Найти мод…' : name === 'resources' ? 'Найти ресурспак…' : 'Найти шейдер…';
  $('shaders-query').setAttribute('aria-label', $('shaders-query').placeholder);
  $('shaders-panel').setAttribute('aria-labelledby', contentTabs.find(tab => tab[1] === name)[0]);
  $('shaders-panel').querySelector('.shader-hint').textContent = name === 'mod-catalog' ? 'Моды для выбранной версии и загрузчика. Обязательные зависимости устанавливаются автоматически.' : name === 'resources' ? 'Ресурспаки для выбранной версии Minecraft. После установки включи набор в настройках игры.' : 'Для выбранной версии Minecraft · Нужен Iris или OptiFine. После установки выбери шейдер в настройках игры.';
  $('shaders-query').value = '';
  $('shaders-panel').scrollTop = 0;
  $('mods-installed').hidden = shaders;
  $('shaders-panel').hidden = !shaders;
  $('mods-import').classList.toggle('inactive-action', shaders);
  modStatus('');
  for (const [id, tab] of contentTabs) {
    const active = tab === name;
    $(id).classList.toggle('active', active);
    $(id).setAttribute('aria-selected', String(active));
    $(id).tabIndex = active ? 0 : -1;
  }
  $('mods-selection').textContent = shaders ? catalogLabels[catalogKind()] : 'Установлено';
  if (shaders) loadShaders(); else refreshInstalled();
}
$('shaders-open').addEventListener('click', () => selectModsTab('shaders'));
$('mods-installed-tab').addEventListener('click', () => selectModsTab('mods'));
$('mods-catalog-tab').addEventListener('click', () => selectModsTab('mod-catalog'));
$('resources-tab').addEventListener('click', () => selectModsTab('resources'));
document.querySelector('.mods-tabs').addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key) || busy || modsBusy) return;
  event.preventDefault();
  const index = contentTabs.findIndex(tab => tab[1] === modsTab);
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? contentTabs.length - 1 : (index + (event.key === 'ArrowLeft' ? -1 : 1) + contentTabs.length) % contentTabs.length;
  selectModsTab(contentTabs[next][1]);
  $(contentTabs[next][0]).focus();
});
$('shaders-search').addEventListener('submit', event => { event.preventDefault(); if (!modsBusy) loadShaders(); });
$('shaders-more').addEventListener('click', () => { if (!shaderSearchBusy) loadShaders(true); });

async function checkLauncherUpdate() {
  if (updating || checkingUpdate) return;
  checkingUpdate = true; updateControls();
  try {
    updateAvailable = await startupCheck('updates', api.checkUpdate(), value => ({ text: value ? 'Доступна ' + value.version : 'Актуальная версия' }));
    $('launcher-update').hidden = !updateAvailable;
    $('launcher-update').textContent = updateAvailable ? 'Обновить до ' + updateAvailable.version : 'Обновить';
    $('check-updates').textContent = updateAvailable ? 'Обновить лаунчер' : 'Проверить лаунчер';
    $('update-status').textContent = updateAvailable ? 'Доступна версия ' + updateAvailable.version : 'Установлена актуальная версия лаунчера.';
  } catch (error) { $('update-status').textContent = error.message; }
  finally { checkingUpdate = false; updateControls(); }
}
async function updateLauncher() {
  if (busy || modsBusy || updating || !updateAvailable) return;
  updating = true; setBusy(true);
  $('launcher-update').textContent = 'Скачиваем…'; $('update-status').textContent = 'Скачиваем обновление. Лаунчер перезапустится после установки.';
  try { await api.installUpdate(); }
  catch (error) { updating = false; setBusy(false); $('launcher-update').textContent = 'Обновить'; $('update-status').textContent = error.message; }
}
$('launcher-update').addEventListener('click', updateLauncher);
$('check-updates').addEventListener('click', () => updateAvailable ? updateLauncher() : checkLauncherUpdate());
$('refresh-versions').addEventListener('click', async () => {
  if (busy || modsBusy || profilesSaving || refreshingVersions) return;
  refreshingVersions = true; updateControls();
  try {
    if (!versionsReady) { await init(); return; }
    const [result,catalog] = await Promise.all([api.versions(true), api.loaderCatalog(true)]);
    refreshedVersions = result; refreshedLoaders = catalog; applyCatalogRefresh();
    $('update-status').textContent = catalog.errors.length ? 'Список обновлён. Часть загрузчиков показана из кеша.' : 'Версии Minecraft и загрузчиков обновлены.';
  } catch (error) { $('update-status').textContent = error.message; }
  finally { refreshingVersions = false; updateControls(); }
});
let uiRevealed = !document.body.classList.contains('booting');
let releaseNewsReady = false;
async function showReleaseNews(automatic = false) {
  if (!api.releaseNews) return;
  try {
    const news = await api.releaseNews();
    if (automatic && !news.unread) return;
    $('news-version').textContent = 'Версия ' + news.version;
    $('news-body').textContent = news.body;
    $('news-status').textContent = '';
    if (!document.querySelector('dialog[open]')) $('news-dialog').showModal();
  } catch (error) { log('Что нового: ' + error.message); }
}
const newsDate = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
function formatNewsDate(value) { const time = Date.parse(value); return Number.isFinite(time) ? newsDate.format(time) : (value || ''); }
function openNewsLink(event) {
  event.preventDefault();
  const url = event.currentTarget.dataset.url;
  if (url && api.openExternal) api.openExternal(url).catch(error => log('Не удалось открыть ссылку: ' + error.message));
}
function newsPicture(src) {
  const frame = document.createElement('div'); frame.className = 'news-image';
  const placeholder = () => { frame.classList.add('placeholder'); frame.replaceChildren(); };
  if (!src) { placeholder(); return frame; }
  const image = document.createElement('img'); image.alt = ''; image.decoding = 'async'; image.draggable = false; image.src = src;
  image.addEventListener('error', placeholder, { once: true });
  frame.append(image); return frame;
}
function newsCard(item) {
  const card = document.createElement('a'); card.className = 'news-card news-small'; card.href = '#'; card.dataset.url = item.url; card.addEventListener('click', openNewsLink);
  const copy = document.createElement('div'); copy.className = 'news-copy';
  const kind = document.createElement('span'); kind.className = 'news-kind'; kind.textContent = item.category || 'Minecraft';
  const title = document.createElement('h3'); title.textContent = item.title;
  copy.append(kind, title); card.append(newsPicture(item.image), copy); return card;
}
let newsLoading = false, newsLoadedAt = 0;
async function refreshNews(force = false) {
  if (!api.news || newsLoading || (!force && Date.now() - newsLoadedAt < 60000)) return;
  newsLoading = true;
  try {
    const data = await api.news(force);
    const local = api.releaseNews ? await api.releaseNews().catch(() => null) : null;
    const launcher = data.launcher || (local && { title: 'KOPEYKA ' + local.version, body: local.body, date: '', url: 'https://github.com/Arab228d/kopeyka-launcher/releases' });
    $('news-featured').hidden = !launcher;
    if (launcher) {
      $('news-launcher-title').textContent = launcher.title;
      $('news-launcher-body').textContent = launcher.body || 'Обновлены функции и исправлены ошибки лаунчера.';
      $('news-launcher-date').textContent = formatNewsDate(launcher.date);
      const link = $('news-launcher-link'); link.dataset.url = launcher.url; link.onclick = openNewsLink;
    }
    const items = (data.minecraft || []).filter(item => item.title && item.url);
    $('minecraft-news-list').replaceChildren(...items.map(newsCard));
    $('news-empty').hidden = items.length > 0 || Boolean(launcher);
    $('news-empty').textContent = 'Новости пока недоступны. Проверь подключение к интернету.';
    $('news-status-line').textContent = data.stale ? (data.updatedAt ? 'Нет связи · показаны сохранённые новости' : 'Нет связи с сервером новостей') : (data.updatedAt ? 'Обновлено ' + formatNewsDate(data.updatedAt) : '');
    newsLoadedAt = data.stale ? 0 : Date.now();
  } catch (error) { log('Новости: ' + error.message); $('news-empty').hidden = false; $('news-empty').textContent = 'Новости пока недоступны. Повтори позже.'; }
  finally { newsLoading = false; }
}
// Keep the feed current while the launcher stays open; this is independent of launcher updates.
setInterval(() => { if (document.body.classList.contains('news-view')) refreshNews(true); }, 10 * 60 * 1000);
refreshNews();
window.addEventListener('ui-revealed', () => { uiRevealed = true; if (releaseNewsReady) showReleaseNews(true); });
async function prepareReleaseNews() { releaseNewsReady = true; if (uiRevealed) await showReleaseNews(true); }
prepareReleaseNews();
$('news-open').addEventListener('click', () => showReleaseNews());
async function dismissNews(event) {
  if (event) event.preventDefault();
  try { await api.acknowledgeNews(); $('news-dialog').close(); }
  catch (error) { $('news-status').textContent = 'Не удалось сохранить: ' + error.message; }
}
$('news-close').addEventListener('click', dismissNews);
$('news-done').addEventListener('click', dismissNews);
$('news-dialog').addEventListener('cancel', dismissNews);
