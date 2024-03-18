/**
 * Generates a random number between the given minimum and maximum values.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (exclusive).
 * @return {number} The random number generated.
 */
export function generateRandomInteger(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);

  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
}
