(() => {
  const started = performance.now();
  let completed = false;
  const settings = new Promise(resolve => window.addEventListener('ui-settings-ready', resolve, { once: true }));
  const images = ['home-art', 'shell-art', 'minecraft-logo', 'java-logo'].map(id => document.getElementById(id).decode().catch(() => {}));
  function reveal() {
    if (completed) return;
    completed = true;
    clearTimeout(failsafe);
    document.body.classList.remove('booting');
    document.body.classList.add('boot-reveal');
    document.querySelector('.app-shell').inert = false;
    setTimeout(() => { document.getElementById('startup-overlay').remove(); document.body.classList.remove('boot-reveal'); }, 750);
  }
  // A slow network or broken image must never trap the user on the splash screen.
  const failsafe = setTimeout(reveal, 5000);
  Promise.allSettled([settings, document.fonts.ready, ...images]).then(() => {
    setTimeout(reveal, Math.max(0, 400 - (performance.now() - started)));
  });
})();
