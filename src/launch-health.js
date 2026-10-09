const GB = 1073741824;
function launchMemory(requested, totalBytes, freeBytes) {
  const available = Math.min(Math.floor(totalBytes / GB - 1.5), Math.floor(freeBytes / GB - .75));
  if (available < 2) throw new Error('Недостаточно свободной памяти для запуска Minecraft. Закрой лишние программы и попробуй снова. Нужно хотя бы 2,75 ГБ свободной RAM.');
  return Math.min(requested, available);
}
function launchFailure(text, code) {
  if (/Could not reserve enough space|Could not create the Java Virtual Machine|OutOfMemoryError|Native memory allocation|insufficient memory|paging file is too small/i.test(text)) return 'Java не хватило памяти. Закрой лишние программы и уменьши RAM в настройках. Подробности можно сохранить в журнале запуска.';
  if (/UnsupportedClassVersionError|class file version|Unsupported major.minor/i.test(text)) return 'Версия Java не подходит игре или одному из модов. Сохрани журнал запуска для проверки.';
  if (/GLFW error 65542|WGL.*driver|does not support OpenGL|Failed to create window/i.test(text)) return 'Minecraft не смог создать окно OpenGL. Проверь драйвер видеокарты. Подробности — в журнале запуска.';
  return `Minecraft завершился с кодом ${code}. Сохрани журнал запуска: в нём будет причина ошибки.`;
}
module.exports = { launchMemory, launchFailure };
