import crypto from 'crypto';

function encrypt (message, key) {
  const cipher = crypto.createCipher('aes256', key);

  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt (message, key) {
  const decipher = crypto.createDecipher('aes256', key);

  const encrypted = message;
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

export default {
  encrypt,
  decrypt,
};
