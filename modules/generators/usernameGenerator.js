/**
 * Generates a username with the given prefix or default (TestUser).
 *
 * @param {string} prefix - The prefix to be used in the username, if provided
 * @return {string} The generated username
 */
export function generateUsername(prefix) {
  let username = 'TestUser';

  if (prefix !== undefined) {
    username = prefix;
  }

  return username;
}
