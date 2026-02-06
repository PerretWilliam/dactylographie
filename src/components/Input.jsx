import { isPrintableKey } from '../utils';

/**
 * Input component for typing game
 * Handles user keyboard input and validates against current word
 *
 * @param {Object} props - Component properties
 * @param {string} props.currentWord - The word currently being typed
 * @param {boolean} props.isFinished - Whether the game is finished
 * @param {boolean} props.hasStarted - Whether the game has started
 * @param {Function} props.setCurrentWord - Function to advance to next word
 * @param {Function} props.setCorrectWord - Function to track word correctness
 * @param {Function} props.setCharacterTyped - Function to increment character count
 * @param {Function} props.setHasStarted - Function to mark game as started
 * @param {string} props.inputWord - Current input value
 * @param {Function} props.setInputWord - Function to update input value
 * @returns {JSX.Element} The input component
 */
const Input = ({
  currentWord,
  isFinished,
  hasStarted,
  setCurrentWord,
  setCorrectWord,
  setCharacterTyped,
  setHasStarted,
  inputWord,
  setInputWord,
}) => {
  /**
   * Handles word submission when space is pressed
   * Validates input against current word and moves to next word
   */
  const handleWordChange = () => {
    if (!inputWord.trim()) return;

    setCorrectWord((prev) => [...prev, inputWord.trim() === currentWord]);

    setInputWord('');
    setCurrentWord();
  };

  /**
   * Handles keyboard input events
   * Filters non-printable keys and starts game on first valid input
   *
   * @param {KeyboardEvent} e - The keyboard event
   */
  const handleKeyDown = (e) => {
    if (
      !hasStarted &&
      isPrintableKey(e) &&
      e.key !== 'Backspace' &&
      e.key !== ' ' &&
      e.key !== 'Enter'
    ) {
      setHasStarted(true);
    }

    if (e.key === ' ') {
      e.preventDefault();

      if (!inputWord.trim()) return;
      handleWordChange();
      return;
    }

    if (!isPrintableKey(e) && e.key !== 'Backspace' && e.key !== 'Enter') {
      e.preventDefault();
      return;
    }

    setCharacterTyped((prev) => prev + 1);
  };

  return (
    <input
      className="input"
      value={inputWord}
      disabled={isFinished}
      onChange={(e) => {
        setInputWord(e.target.value);
      }}
      onKeyDown={(e) => handleKeyDown(e)}
      onPaste={(e) => e.preventDefault()}
    />
  );
};

export default Input;
