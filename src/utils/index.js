export const getRandomSentence = (sentences) =>
  sentences[Math.floor(Math.random() * sentences.length)];
