/**
 * Returns a random sentence from the provided array
 *
 * @param {string[]} sentences - Array of sentences to choose from
 * @returns {string} A randomly selected sentence
 */
export const getRandomSentence = (sentences) =>
  sentences[Math.floor(Math.random() * sentences.length)];

/**
 * Checks if a keyboard event represents a printable character
 * Excludes control keys, meta keys, and alt key combinations
 *
 * @param {KeyboardEvent} e - The keyboard event to check
 * @returns {boolean} True if the key is a printable character
 */
export const isPrintableKey = (e) => {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
};
