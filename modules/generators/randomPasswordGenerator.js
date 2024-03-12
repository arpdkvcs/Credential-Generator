import * as generator from './randomIntegerGenerator.js';

/**
 * Generates a random password of the specified length.
 *
 * @param {number} length - The length of the password to be generated
 * @return {string} The randomly generated password
 */
export function generatePassword(length) {
  const minAsciiCode = 33;
  const maxAsciiCode = 127;

  const password = '';

  for (let i = 0; i < length; i++) {
    password += getRandomCharacter(minAsciiCode, maxAsciiCode);
  }

  return password;
}

/**
 * Generates a random character within the specified range of Unicode values.
 *
 * @param {number} min - The minimum Unicode value.
 * @param {number} max - The maximum Unicode value.
 * @return {string} The random character generated within the specified range.
 */
function getRandomCharacter(min, max) {
  return String.fromCharCode(generator.generateRandomIntegerBetween(min, max));
}
