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
