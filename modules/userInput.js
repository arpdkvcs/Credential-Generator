import pkg from 'readline-sync';
const readlineSync = pkg;

/**
 * Retrieves the number of credentials requested by the user.
 *
 * @return {number} The requested number of credentials
 */
export function getNumberOfCredentials() {
  const min = 1;
  const max = 10000;
  const prompt =
    `\nEnter the number of username/password combinations` +
    `\nto generate (between ${min} and ${max}): `;

  const requestedNumber = parseInt(readlineSync.question(prompt));

  if (isNaN(requestedNumber)) {
    console.log('\nNot a number. Please try again.\n');
    return getNumberOfCredentials();
  }

  if (outOfRange(min, max, requestedNumber)) {
    console.log('\nNumber out of range. Please try again.\n');
    return getNumberOfCredentials();
  }

  return requestedNumber;
}

/**
 * Prompts user for a prefix for numbered usernames, returning default if empty.
 *
 * @return {string} The prefix entered by the user, or the default.
 */
export function getUsernamePrefix() {
  const defaultPrefix = 'TestUser';
  const prompt =
    `\nEnter a prefix for numbered usernames or` +
    `\npress enter for default (${defaultPrefix}): `;

  const prefix = readlineSync.question(prompt) || defaultPrefix;
  return prefix;
}

/**
 * Retrieves the length of the password
 * from the user within the range of 8 to 32 characters.
 *
 * @return {number} The length of the password entered by the user.
 */
export function getPasswordLength() {
  const minLength = 8;
  const maxLength = 32;
  const prompt =
    `Enter password length between ${minLength} and ${maxLength}: `;

  const length = parseInt(readlineSync.question(prompt));

  if (isNaN(length)) {
    console.log('\nNot a number. Please try again.\n');
    return getPasswordLength();
  }

  if (outOfRange(minLength, maxLength, length)) {
    console.log('\nNumber out of range. Please try again.\n');
    return getPasswordLength();
  }

  return length;
}

/**
 * Checks if the value is out of the specified range.
 *
 * @param {number} min - the minimum value of the range
 * @param {number} max - the maximum value of the range
 * @param {number} value - the value to check
 * @return {boolean} true if the value is out of range, otherwise false
 */
function outOfRange(min, max, value) {
  return value < min || value > max;
}
