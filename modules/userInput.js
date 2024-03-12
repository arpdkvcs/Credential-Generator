import pkg from 'readline-sync';
const readlineSync = pkg;

/**
 * Retrieves the number of credentials requested by the user.
 *
 * @return {number} The requested number of credentials
 */
export function getNumberOfCredentials() {
  const prompt =
    `\nHow many username/password combinations would you like to generate? \n` +
    `Please enter a number between 1 and 10000.\n` +
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
  const prompt = 'Enter password length between 8 and 32: ';
  const length = parseInt(readlineSync.question(prompt));

  if (isNaN(length)) {
    console.log('\nNot a number. Please try again.\n');
    return getPasswordLength();
  }

  if (length < 8 || length > 32) {
    console.log('\nNumber out of range. Please try again.\n');
    return getPasswordLength();
  }

  return length;
}
