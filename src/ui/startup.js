(() => {
  const overlay = document.getElementById('startup-overlay');
  if (!overlay) return;
  const api = window.launcher;
  const started = api?.startupStartedAt || performance.timeOrigin;
  const elapsed = () => Math.max(0, Date.now() - started);
  // Keep the splash inside the requested 9–10 second window, including the fade.
  const minimum = 9000, deadline = 10000, requestDeadline = 9500;
  const shell = document.querySelector('.app-shell');
  const states = new Map(['settings', 'versions', 'loaders', 'updates'].map(key => [key, 'pending']));
  let completed = false, assetsReady = false, revealTimer, failsafe, dotsTimer;
  const status = document.getElementById('startup-status');
  let dots = 0;
  const animateDots = () => { if (completed) return; if (status) status.textContent = 'Загрузка' + '.'.repeat(dots = (dots + 1) % 4); dotsTimer = setTimeout(animateDots, 420); };
  dotsTimer = setTimeout(animateDots, 420);
  document.querySelector('.startup-cube')?.style.setProperty('--startup-offset', `-${elapsed() / 1000}s`);
  for (const [id, action] of [['startup-minimize', 'minimizeWindow'], ['startup-close', 'closeWindow']]) {
    document.getElementById(id)?.addEventListener('click', () => api?.[action]?.().catch(() => {}));
  }
  function progress() {
    if (completed) return;
    const settled = [...states.values()].filter(state => state !== 'pending').length;
    overlay.dataset.ready = String(settled === states.size && assetsReady);
    document.getElementById('startup-progress').value = settled;
    const hasWarning = [...states.values()].some(state => state === 'warning');
    if (status) status.textContent = 'Загрузка' + '.'.repeat(dots);
    document.getElementById('startup-detail').textContent = settled === states.size ? (hasWarning ? 'Лаунчер откроется. Проверку можно повторить в настройках.' : 'Открываем главное меню…') : 'Проверяем данные, версии и обновления';
    if (shell && settled === states.size && assetsReady) {
      clearTimeout(revealTimer);
      revealTimer = setTimeout(reveal, Math.max(0, minimum - elapsed()));
    }
  }
  function report(key, state, text) {
    if (completed || !states.has(key)) return;
    states.set(key, state);
    const row = document.querySelector(`[data-startup-check="${key}"]`);
    row.dataset.state = state;
    row.querySelector('.startup-check-result').textContent = text;
    progress();
  }
  async function check(key, operation, describe) {
    if (completed) return operation;
    let timer;
    try {
      const value = await Promise.race([operation, new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error('Проверка заняла слишком много времени. Повтори её в настройках.')), Math.max(0, requestDeadline - elapsed()));
      })]);
      const result = describe(value);
      report(key, result.state || 'done', result.text);
      return value;
    } catch (error) {
      report(key, 'warning', 'Недоступно');
      throw error;
    } finally { clearTimeout(timer); }
  }
  function reveal() {
    if (completed || !shell) return;
    for (const [key, state] of states) if (state === 'pending') report(key, 'warning', 'Не завершено');
    completed = true;
    clearTimeout(failsafe); clearTimeout(revealTimer); clearTimeout(dotsTimer);
    document.body.classList.remove('booting');
    document.body.classList.add('boot-reveal');
    shell.inert = false;
    window.dispatchEvent(new Event('ui-revealed'));
    setTimeout(() => { overlay.remove(); document.body.classList.remove('boot-reveal'); }, 300);
  }
  window.startup = { check, report };
  if (!shell) return;
  // Both documents share the main-process timestamp. Slow requests cannot trap the user.
  failsafe = setTimeout(reveal, Math.max(0, deadline - elapsed()));
  const images = ['home-art', 'shell-art', 'minecraft-logo', 'java-logo'].map(id => document.getElementById(id)?.decode().catch(() => {}));
  Promise.allSettled([document.fonts.ready, ...images]).then(() => { assetsReady = true; progress(); });
})();

