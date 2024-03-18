import {generateRandomInteger as generator} from './randomIntegerGenerator.js';

/**
 * Generate a random password of a specified length.
 *
 * @param {number} length - The length of the password to generate
 * @return {string} The randomly generated password
 */
export function generatePassword(length) {
  // eslint-disable-next-line max-len
  const characterSet = '!#%+0123456789:=?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const characters = characterSet.split('');

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = generator(0, characters.length);
    password += characters[randomIndex];
  }

  return password;
}
