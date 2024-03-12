import pkg from 'readline-sync';
const readlineSync = pkg;

/**
 * Retrieves the number of credentials requested by the user.
 *
 * @return {number} The requested number of credentials
 */
export function getNumberOfCredentials() {
  const minNumber = 1;
  const maxNumber = 10000;
  const prompt =
    `\nHow many username/password combinations would you like to generate? \n` +
    `Please enter a number between ${minNumber} and ${maxNumber}.\n` +
    `Enter number: `;

  const requestedNumber = parseInt(readlineSync.question(prompt));

  if (isNaN(requestedNumber)) {
    console.log('\nNot a number. Please try again.\n');
    return getNumberOfCredentials();
  }

  if (requestedNumber < 1 || requestedNumber > 10000) {
    console.log('\nNumber out of range. Please try again.\n');
    return getNumberOfCredentials();
  }

  return requestedNumber;
}

/**
 * Get a prefix for numbered usernames.
 *
 * @return {string} The prefix entered by the user.
 */
export function getPrefixForUsernames() {
  const question =
    `\nEnter a prefix for numbered usernames.\n` +
    `If left empty it defaults to "TestUser".\n` +
    `Enter prefix: `;

  const prefix = readlineSync.question(question);

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
