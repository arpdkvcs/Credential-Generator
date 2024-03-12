/**
 * Generates a username by combining a prefix and a suffix.
 *
 * @param {string} suffix - the suffix to be appended to the username
 * @param {string} prefix - the optional prefix to override the default username
 * @return {string} the generated username
 */
export function generateUsername(suffix, prefix) {
  let username = 'TestUser';

  if (prefix !== undefined) {
    username = prefix;
  }

  return username + suffix;
}
