/**
 * Displays the sentence to type with visual feedback
 * Shows completed words in green/red, current word with character-by-character feedback,
 * and upcoming words in default color
 *
 * @param {Object} props - Component properties
 * @param {string} props.sentence - The full sentence to display
 * @param {number} props.currentWordIndex - Index of the word being typed
 * @param {boolean[]} props.correctWord - Array tracking if each word was typed correctly
 * @param {string} props.inputWord - Current input being typed
 * @returns {JSX.Element} The sentence display component
 */
const Sentence = ({ sentence, currentWordIndex, correctWord, inputWord }) => {
  /**
   * Renders a single word with appropriate styling based on its state
   *
   * @param {string} word - The word to render
   * @param {number} index - The word's index in the sentence
   * @returns {JSX.Element} The styled word element
   */
  const renderWord = (word, index) => {
    // Previous words
    if (correctWord[index] !== undefined) {
      return <span className={correctWord[index] ? 'text-green-600' : 'text-red-500'}>{word}</span>;
    }

    if (index === currentWordIndex) {
      return (
        <span className="underline underline-offset-4">
          {word.split('').map((char, i) => {
            let className = 'text-gray-400';

            if (inputWord[i] !== undefined) {
              className = inputWord[i] === char ? 'text-green-600' : 'text-red-500';
            }

            return (
              <span key={i} className={className}>
                {char}
              </span>
            );
          })}
        </span>
      );
    }

    // Next words
    return <span className="text-foreground">{word}</span>;
  };

  return (
    <div className="mx-auto max-w-2xl px-6 text-center text-3xl leading-relaxed">
      {sentence.split(' ').map((word, index) => (
        <span key={index} className="mx-1 inline-block">
          {renderWord(word, index)}
        </span>
      ))}
    </div>
  );
};

export default Sentence;
