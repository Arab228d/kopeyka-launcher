import * as THREE from 'three';
import bundledTextures from '../ui/assets/island-textures.json';

// One block = one world unit; the skin follows the 64×64 Minecraft UV layout.
export async function loadImages() {
  // Keep the approved diorama independent of disk scans and installed versions.
  const pack = bundledTextures;
  const images = {};
  await Promise.all(Object.entries(pack.textures).map(async ([key, data]) => {
    const image = new Image();
    const loaded = new Promise(resolve => { image.onload = () => resolve(true); image.onerror = () => resolve(false); });
    image.src = data;
    if (await loaded) images[key] = image;
  }));
  return { images, source: pack.source, version: pack.version };
}

function canvasTexture(surface) {
  const texture = new THREE.CanvasTexture(surface);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = texture.minFilter = THREE.NearestFilter;
  return texture;
}
function textureTint(image, tint) {
  if (!image) return tint;
  const sample = document.createElement('canvas'); sample.width = sample.height = 1;
  const ctx = sample.getContext('2d'); ctx.drawImage(image, 0, 0, 1, 1);
  const [r,g,b] = ctx.getImageData(0,0,1,1).data;
  // Colored resource-pack textures already carry their grass/water palette.
  return Math.max(r,g,b) - Math.min(r,g,b) > 12 ? '#ffffff' : tint;
}
function surface(image, color, overlay, tint) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 16;
  const ctx = canvas.getContext('2d'); ctx.imageSmoothingEnabled = false;
  if (image) ctx.drawImage(image, 0, 0, image.width, Math.min(image.width, image.height), 0, 0, 16, 16);
  else {
    const base = new THREE.Color(color);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const n = (Math.imul(x + 3, 1247) ^ Math.imul(y + 9, 3673) ^ Math.imul(x * y, 637)) >>> 0;
      ctx.fillStyle = '#' + base.clone().multiplyScalar(.75 + (n % 100) / 200).getHexString(); ctx.fillRect(x, y, 1, 1);
    }
  }
  if (overlay) {
    const layer = document.createElement('canvas'); layer.width = layer.height = 16;
    const layerCtx = layer.getContext('2d'); layerCtx.drawImage(overlay, 0, 0, 16, 16);
    layerCtx.globalCompositeOperation = 'multiply'; layerCtx.fillStyle = textureTint(overlay, tint); layerCtx.fillRect(0, 0, 16, 16);
    layerCtx.globalCompositeOperation = 'destination-in'; layerCtx.drawImage(overlay, 0, 0, 16, 16);
    ctx.drawImage(layer, 0, 0);
  }
  return canvas;
}

export function buildMinecraftWorld(images) {
  const island = new THREE.Group();
  function material(key, fallback, tint = '#ffffff', cutout = false) {
    return new THREE.MeshLambertMaterial({ map: canvasTexture(surface(images[key], fallback)), color: images[key] ? textureTint(images[key], tint) : '#ffffff', alphaTest: cutout ? .5 : 0, side: cutout ? THREE.DoubleSide : THREE.FrontSide });
  }
  const mats = {
    dirt: material('dirt', '#866043'), sand: material('sand', '#dbd3a0'), stone: material('stone', '#838383'),
    grassTop: material('grass_block_top', '#7fa743', '#91bd59'),
    grassSide: new THREE.MeshLambertMaterial({ map: canvasTexture(surface(images.grass_block_side, '#866043', images.grass_block_side_overlay, '#91bd59')) }),
    leaf: material('oak_leaves', '#529134', '#77ab2f', true), logSide: material('oak_log', '#6b5432'), logTop: material('oak_log_top', '#a38450'),
    water: material('water_still', '#366dc2', '#3f76e4'), tableTop: material('crafting_table_top', '#af8150'), tableSide: material('crafting_table_side', '#a07847'), tableFront: material('crafting_table_front', '#a07847'), planks: material('oak_planks', '#b68d55'),
    poppy: material('poppy', '#df5442', '#ffffff', true), daisy: material('oxeye_daisy', '#f4edcd', '#ffffff', true), tallGrass: material('short_grass', '#7ba63b', '#91bd59', true)
  };
  mats.grass = [mats.grassSide, mats.grassSide, mats.grassTop, mats.dirt, mats.grassSide, mats.grassSide];
  mats.log = [mats.logSide, mats.logSide, mats.logTop, mats.logTop, mats.logSide, mats.logSide];
  mats.table = [mats.tableSide, mats.tableSide, mats.tableTop, mats.planks, mats.tableFront, mats.tableFront];
  const box = new THREE.BoxGeometry(1, 1, 1);
  const batches = new Map();
  function block(type, x, y, z, sx = 1, sy = 1, sz = 1) {
    if (!batches.has(type)) batches.set(type, []);
    batches.get(type).push([x, y, z, sx, sy, sz]);
  }
  const heights = new Map();
  for (let x = -8; x <= 8; x++) for (let z = -6; z <= 6; z++) {
    if (x * x / 70 + z * z / 38 > 1) continue;
    const shore = (x + .25) ** 2 / 37 + (z + .15) ** 2 / 20;
    // Each terrain block occupies one whole grid cell. Water no longer
    // intersects the sand or conceals part of its sides.
    if (shore > 1) { block('water', x, -.5, z); continue; }
    block('sand', x, -.5, z);
    if (shore > .76 || (x < -3 && z > 0)) continue;
    const hill = (x - 1.3) ** 2 / 11 + (z + .6) ** 2 / 7;
    const height = hill < .28 ? 3 : hill < 1 ? 2 : 1;
    heights.set(`${x},${z}`, height);
    for (let y = 0; y < height; y++) block(y === height - 1 ? 'grass' : 'dirt', x, y + .5, z);
  }
  const ground = (x, z) => heights.get(`${Math.round(x)},${Math.round(z)}`) ?? 0;
  // Vanilla oak silhouette: full-width trunk and four cubic leaf layers.
  function oak(x, z, height) {
    const base = ground(x, z);
    for (let y = 0; y < height; y++) block('log', x, base + y + .5, z);
    for (let layer = 0; layer < 4; layer++) {
      const radius = layer < 2 ? 2 : 1;
      for (let dx = -radius; dx <= radius; dx++) for (let dz = -radius; dz <= radius; dz++) {
        if (Math.abs(dx) === radius && Math.abs(dz) === radius && (layer === 3 || (dx + dz + layer) % 2 === 0)) continue;
        if (dx === 0 && dz === 0 && layer < 2) continue;
        block('leaf', x + dx, base + height - 2 + layer + .5, z + dz);
      }
    }
  }
  oak(-2, -1, 4); oak(2, -2, 4);
  block('table', -3, ground(-3, 1) + .5, 1);
  const dummy = new THREE.Object3D();
  for (const [type, transforms] of batches) {
    const mesh = new THREE.InstancedMesh(box, mats[type], transforms.length);
    transforms.forEach(([x, y, z, sx, sy, sz], index) => { dummy.position.set(x, y, z); dummy.scale.set(sx, sy, sz); dummy.updateMatrix(); mesh.setMatrixAt(index, dummy.matrix); });
    mesh.castShadow = type !== 'water'; mesh.receiveShadow = true; island.add(mesh);
  }
  // Minecraft plants use crossed, alpha-tested planes rather than solid cubes.
  function plant(type, x, z, size = 1) {
    for (const angle of [Math.PI / 4, -Math.PI / 4]) {
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mats[type]);
      mesh.position.set(x, ground(x, z) + size / 2, z); mesh.rotation.y = angle; mesh.castShadow = true; island.add(mesh);
    }
  }
  [[-3, 2], [-2, 3], [3, 2], [4, 0], [0, -3], [-3, -2], [1, 3]].forEach(([x, z], index) => plant(index % 3 ? 'daisy' : 'poppy', x + .1, z));
  [[-4, -1], [4, 1], [-1, 2], [2, -3], [3, 1]].forEach(([x, z]) => plant('tallGrass', x + .15, z, .8));
  const character = buildSteve(images.steve);
  character.position.set(-.7, ground(-1, 3), 3.1); character.rotation.y = -.06; island.add(character);
  // 16×N water sprites from the client animate in place, with no network.
  const waterImage = images.water_still; let frame = -1;
  const waterSurface = mats.water.map.image;
  function animateWater(time) {
    if (!waterImage || waterImage.height <= waterImage.width) return;
    const next = Math.floor(time * 8) % Math.floor(waterImage.height / waterImage.width);
    if (next === frame) return; frame = next;
    const ctx = waterSurface.getContext('2d'); ctx.drawImage(waterImage, 0, next * waterImage.width, waterImage.width, waterImage.width, 0, 0, 16, 16); mats.water.map.needsUpdate = true;
  }
  return { island, animateWater };
}

function buildSteve(image) {
  const steve = new THREE.Group();
  if (!image) {
    const colors = { skin: '#b8835d', shirt: '#22adb1', pants: '#4d4894', hair: '#3d2b1f' };
    for (const [key, x, y, sx, sy, sz] of [['pants', -.125, .375, .25, .75, .25], ['pants', .125, .375, .25, .75, .25], ['shirt', 0, 1.125, .5, .75, .25], ['skin', -.375, 1.125, .25, .75, .25], ['skin', .375, 1.125, .25, .75, .25], ['skin', 0, 1.75, .5, .5, .5], ['hair', 0, 1.98, .51, .08, .51]]) {
      const part = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), new THREE.MeshLambertMaterial({ color: colors[key] })); part.position.set(x, y, 0); part.castShadow = true; steve.add(part);
    }
    return steve;
  }
  const skin = canvasTexture(image);
  const base = new THREE.MeshLambertMaterial({ map: skin, alphaTest: .5 });
  const outer = new THREE.MeshLambertMaterial({ map: skin, alphaTest: .5, side: THREE.DoubleSide });
  function part(u, v, w, h, d, x, y, z, layer = false) {
    const geometry = new THREE.BoxGeometry(w / 16 + (layer ? .012 : 0), h / 16 + (layer ? .012 : 0), d / 16 + (layer ? .012 : 0));
    const rects = [[u + d + w, v + d, d, h], [u, v + d, d, h], [u + d, v, w, d], [u + d + w, v, w, d], [u + d, v + d, w, h], [u + d + w + d, v + d, w, h]];
    const uv = geometry.attributes.uv;
    for (let face = 0; face < 6; face++) {
      const [left, top, width, height] = rects[face];
      for (let i = 0; i < 4; i++) {
        const index = face * 4 + i; const oldX = uv.getX(index), oldY = uv.getY(index);
        uv.setXY(index, (left + oldX * width) / image.width, 1 - (top + (1 - oldY) * height) / image.height);
      }
    }
    const mesh = new THREE.Mesh(geometry, layer ? outer : base); mesh.position.set(x, y, z); mesh.castShadow = true; steve.add(mesh);
  }
  part(0, 0, 8, 8, 8, 0, 1.75, 0); part(32, 0, 8, 8, 8, 0, 1.75, 0, true);
  part(16, 16, 8, 12, 4, 0, 1.125, 0); part(16, 32, 8, 12, 4, 0, 1.125, 0, true);
  part(40, 16, 4, 12, 4, -.375, 1.125, 0); part(32, 48, 4, 12, 4, .375, 1.125, 0);
  part(0, 16, 4, 12, 4, -.125, .375, 0); part(16, 48, 4, 12, 4, .125, .375, 0);
  return steve;
}
