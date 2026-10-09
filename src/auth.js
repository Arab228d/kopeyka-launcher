const crypto = require('node:crypto');
function offlineProfile(name) {
  const hash = crypto.createHash('md5').update(`OfflinePlayer:${name}`, 'utf8').digest();
  hash[6] = (hash[6] & 15) | 48;
  hash[8] = (hash[8] & 63) | 128;
  return { access_token: '0', client_token: hash.toString('hex'), uuid: hash.toString('hex'), name, user_properties: '{}' };
}
module.exports = { offlineProfile };
