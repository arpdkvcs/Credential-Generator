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

  let password = '';

  for (let i = 0; i < length; i++) {
    password += getRandomCharacter(minAsciiCode, maxAsciiCode);
  }

  return password;
}


/**
 * Generates a random character within the ASCII range defined by the given
 * min and max values, excluding the double quote and comma (ASCII code 34, 44)
 * to be used (comma) as a separator in the generated csv file.
 *
 * @param {number} min - The minimum ASCII code value
 * @param {number} max - The maximum ASCII code value
 * @return {string} A random character within the specified ASCII range
 */
function getRandomCharacter(min, max) {
  const excludedCode = [34, 44]; // double quote, comma
  const randomAsciiCode = generator.generateRandomIntegerBetween(min, max);

  if (excludedCode.includes(randomAsciiCode)) {
    return getRandomCharacter(min, max);
  }

  return String.fromCharCode(randomAsciiCode);
}
