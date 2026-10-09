(() => {
  const home = document.getElementById('home');
  const stage = document.getElementById('world-stage');
  const art = document.getElementById('home-art');
  const shell = document.querySelector('.app-shell');
  const shellArt = document.getElementById('shell-art');
  const light = home.querySelector('.art-light');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false, zooming = false, frame = 0, lastTime = 0, x = 0, y = 0, targetX = 0, targetY = 0;
  let bounds;
  const resize = new ResizeObserver(() => { bounds = undefined; });
  resize.observe(home);

  function paint() {
    art.style.transform = `perspective(1400px) translate3d(${(x * -20).toFixed(3)}px,${(y * -14).toFixed(3)}px,0) rotateX(${(y * -2).toFixed(3)}deg) rotateY(${(x * 2.5).toFixed(3)}deg) scale(1.035)`;
    // The glass samples this moving layer, using the same frame as the main artwork.
    shellArt.style.transform = art.style.transform;
    light.style.transform = `translate3d(${(x * 12).toFixed(3)}%,${(y * 12).toFixed(3)}%,0)`;
    art.dataset.panX = x.toFixed(3);
    art.dataset.panY = y.toFixed(3);
  }
  function animate(time) {
    frame = 0;
    if ((paused && !zooming) || home.hidden || document.hidden || reducedMotion.matches) return;
    // High-refresh monitors do not need 144–240 UI updates per second.
    if (lastTime && time - lastTime < 1000 / 60 - 1) { frame = requestAnimationFrame(animate); return; }
    const dt = lastTime ? Math.min(time - lastTime, 50) : 16.7;
    lastTime = time;
    const ease = 1 - Math.exp(-dt / 110);
    x += (targetX - x) * ease;
    y += (targetY - y) * ease;
    const settled = Math.abs(targetX - x) + Math.abs(targetY - y) < .001;
    if (settled) { x = targetX; y = targetY; }
    paint();
    if (!settled) frame = requestAnimationFrame(animate);
  }
  function schedule() {
    if (!frame && (!paused || zooming) && !reducedMotion.matches && !home.hidden && !document.hidden) {
      lastTime = 0;
      frame = requestAnimationFrame(animate);
    }
  }
  function reset(immediate = false) {
    targetX = targetY = 0;
    if (immediate) {
      cancelAnimationFrame(frame); frame = 0; x = y = 0; paint();
    } else schedule();
  }
  shell.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || (paused && !zooming) || reducedMotion.matches) return;
    const rect = bounds || (bounds = home.getBoundingClientRect());
    targetX = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
    targetY = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    schedule();
  }, { capture: true, passive: true });
  home.addEventListener('pointerenter', () => { bounds = undefined; });
  home.addEventListener('pointerleave', () => { bounds = undefined; reset(); });
  shell.addEventListener('pointerleave', () => { bounds = undefined; reset(); });
  window.addEventListener('blur', () => reset());
  window.addEventListener('game-running', event => {
    paused = Boolean(event.detail);
    if (paused && !zooming) { cancelAnimationFrame(frame); frame = 0; }
    else reset();
  });
  window.addEventListener('launch-transition', event => {
    zooming = Boolean(event.detail);
    if (!zooming) reset(true);
    bounds = undefined;
    stage.classList.toggle('art-zoom', zooming);
    schedule();
  });
  reducedMotion.addEventListener('change', () => reset(true));
  document.addEventListener('visibilitychange', () => { if (document.hidden) reset(true); });
  const observer = new MutationObserver(() => { bounds = undefined; if (home.hidden) reset(true); });
  observer.observe(home, { attributes: true, attributeFilter: ['hidden'] });
  art.decode().then(() => { art.dataset.ready = 'true'; }).catch(error => console.error('Home artwork:', error.message));
  paint();
  window.addEventListener('pagehide', () => { cancelAnimationFrame(frame); observer.disconnect(); resize.disconnect(); }, { once: true });
})();
