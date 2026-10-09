function cropImage(image) {
  const source = document.createElement('canvas'); source.width = image.width; source.height = image.height;
  const ctx = source.getContext('2d'); ctx.drawImage(image, 0, 0);
  const pixels = ctx.getImageData(0, 0, source.width, source.height).data;
  let left = source.width, top = source.height, right = 0, bottom = 0;
  for (let y = 0; y < source.height; y++) for (let x = 0; x < source.width; x++) {
    if (pixels[(y * source.width + x) * 4 + 3] > 0) { left = Math.min(left, x); right = Math.max(right, x); top = Math.min(top, y); bottom = Math.max(bottom, y); }
  }
  if (left > right) return image.src;
  const result = document.createElement('canvas'); result.width = right - left + 1; result.height = bottom - top + 1;
  result.getContext('2d').drawImage(source, left, top, result.width, result.height, 0, 0, result.width, result.height);
  return result.toDataURL('image/png');
}
export function applyMinecraftBranding(images) {
  for (const [key, ids] of [['minecraft_logo', ['minecraft-logo', 'mods-minecraft-logo']], ['java_logo', ['java-logo', 'mods-java-logo']]]) {
    if (!images[key]) continue;
    const source = cropImage(images[key]);
    for (const id of ids) {
      const element = document.getElementById(id); element.src = source; element.hidden = false;
      element.dataset.source = 'minecraft';
    }
  }
}
