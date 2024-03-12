import pkg from 'readline-sync';
const readlineSync = pkg;

/**
 * Retrieves the number of credentials requested by the user.
 *
 * @return {number} The requested number of credentials
 */
export function getNumberOfCredentials() {
  const question =
    `\nHow many username/password combinations would you like to generate? \n` +
    `Enter number: `;

  const requestedNumber = parseInt(readlineSync.question(question));

  if (isNaN(requestedNumber)) {
    console.log('\nNot a number. Please try again.\n');
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
  let length;
  do {
    length = parseInt(readlineSync.question(prompt));
  } while (isNaN(length) || length < 8 || length > 32);
  return length;
}
