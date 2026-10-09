import * as THREE from 'three';
import { loadImages, buildMinecraftWorld } from './minecraft-world';
import { applyMinecraftBranding } from './branding';

// Voxel geometry with textures read from the locally installed Minecraft client.
// New update dioramas can be added as separate world builders.
const canvas = document.getElementById('world-canvas');
const stage = document.getElementById('world-stage');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
async function init() {
  const pack = await loadImages();
  applyMinecraftBranding(pack.images);
  canvas.dataset.textures = pack.source;
  canvas.dataset.textureVersion = pack.version || ''; 
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0, 0); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-12, 12, 7, -7, .1, 80);
  camera.position.set(12, 10, 23); camera.lookAt(0, 3, 0);
  scene.add(new THREE.HemisphereLight('#e9f5ff', '#98a078', 1.65));
  const sun = new THREE.DirectionalLight('#fff1d0', 1.65); sun.position.set(-9, 14, 8); sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024); Object.assign(sun.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12 });
  sun.shadow.normalBias = .06; sun.shadow.bias = -.0002; scene.add(sun);
  const fill = new THREE.DirectionalLight('#a9c8ff', .3); fill.position.set(8, 5, -9); scene.add(fill);
  const { island, animateWater } = buildMinecraftWorld(pack.images); scene.add(island);
  island.rotation.y = -.22;
  // Soft contact shadow under the floating diorama.
  const shadowCanvas = document.createElement('canvas'); shadowCanvas.width = shadowCanvas.height = 128;
  const shadowCtx = shadowCanvas.getContext('2d'); const gradient = shadowCtx.createRadialGradient(64, 64, 3, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(0,0,0,.38)'); gradient.addColorStop(1, 'rgba(0,0,0,0)'); shadowCtx.fillStyle = gradient; shadowCtx.fillRect(0, 0, 128, 128);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(20, 14), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(shadowCanvas), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = -2.1; scene.add(shadow);
  function resize() {
    const { width, height } = stage.getBoundingClientRect(); if (!width || !height) return;
    // The larger stage doubles the diorama's screen size. Keep its full
    // rotating silhouette visible in narrow windows.
    const halfHeight = Math.max(6.5, 9 * height / width); const aspect = width / height;
    camera.left = -halfHeight * aspect; camera.right = halfHeight * aspect;
    camera.top = halfHeight; camera.bottom = -halfHeight; camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  const observer = new ResizeObserver(resize); observer.observe(stage); resize();
  let lastTime = 0, totalTime = 0, enabled = true, gameRunning = false, zoomStart = null, zooming = false;
  window.addEventListener('launch-transition', event => {
    zoomStart = event.detail ? performance.now() : null; zooming = Boolean(event.detail);
    if (!event.detail) { camera.zoom = 1; resize(); renderer.render(scene, camera); canvas.dataset.zoom = '1.00'; }
  });
  window.addEventListener('game-running', event => { gameRunning = event.detail; });
  const visibility = new IntersectionObserver(entries => { enabled = entries[0].isIntersecting; }); visibility.observe(canvas);
  let frameCount = 0;
  function animate(time) {
    requestAnimationFrame(animate);
    if (!enabled || document.hidden || gameRunning && !zooming) { lastTime = time; return; }
    if (time - lastTime < 1000 / 30) return;
    const dt = Math.min((time - lastTime) / 1000, .05); lastTime = time;
    if (!gameRunning) { totalTime += dt; island.rotation.y += dt * .22; if (!reducedMotion.matches) animateWater(totalTime); }
    if (zooming) {
      const progress = reducedMotion.matches ? 1 : Math.min(1, (time - zoomStart) / 1500);
      camera.zoom = 1 + 1.8 * (1 - (1 - progress) ** 3); camera.updateProjectionMatrix();
      if (progress === 1) zooming = false;
    }
    renderer.render(scene, camera); frameCount++;
    // Small diagnostics for the screenshot/integration smoke check.
    canvas.dataset.frames = String(frameCount); canvas.dataset.angle = island.rotation.y.toFixed(3); canvas.dataset.ready = 'true';
    canvas.dataset.zoom = camera.zoom.toFixed(2);
  }
  requestAnimationFrame(animate);
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); document.getElementById('scene-fallback').hidden = false; });
  canvas.addEventListener('webglcontextrestored', () => document.getElementById('scene-fallback').hidden = true);
  window.addEventListener('pagehide', () => { observer.disconnect(); visibility.disconnect(); renderer.dispose(); }, { once: true });
}
init().catch(error => { console.error('World scene:', error); document.getElementById('scene-fallback').hidden = false; canvas.hidden = true; });
