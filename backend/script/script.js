// script/script.js

const crypto = require('crypto');

const generatePassword = () => {
  return crypto.randomBytes(8).toString('hex'); // Generates a 16-character hexadecimal password
};

console.log(`Generated Password: ${generatePassword()}`);
