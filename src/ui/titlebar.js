(() => {
  const api = window.launcher;
  const maximize = document.getElementById('window-maximize');
  function update(state) {
    if (!state) return;
    maximize.classList.toggle('is-maximized', state.maximized);
    const label = state.maximized ? 'Восстановить размер' : 'Развернуть';
    maximize.title = label;
    maximize.setAttribute('aria-label', label);
  }
  function run(action) { action().catch(error => console.error('Window control:', error.message)); }
  document.getElementById('window-minimize').addEventListener('click', () => run(api.minimizeWindow));
  maximize.addEventListener('click', () => run(api.maximizeWindow));
  document.getElementById('window-close').addEventListener('click', () => run(api.closeWindow));
  api.onWindowState(update);
  api.windowState().then(update).catch(error => console.error('Window state:', error.message));
})();
