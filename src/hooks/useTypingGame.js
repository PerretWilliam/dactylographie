import { useState, useMemo } from 'react';
import { sentences, settings } from '../constants';
import { getRandomSentence } from '../utils';

/**
 * Custom hook to manage the typing game state and logic
 *
 * @returns {Object} The typing game state and methods
 * @returns {string} returns.sentence - Current sentence to type
 * @returns {string} returns.currentWord - Current word being typed
 * @returns {number} returns.currentWordIndex - Index of the current word
 * @returns {boolean[]} returns.correctWord - Array tracking correct/incorrect words
 * @returns {boolean} returns.isFinished - Whether the game is finished
 * @returns {number} returns.characterTyped - Total characters typed
 * @returns {number} returns.seconds - Remaining seconds
 * @returns {boolean} returns.hasStarted - Whether the game has started
 * @returns {string} returns.inputWord - Current input value
 * @returns {Function} returns.setCorrectWord - Setter for correctWord
 * @returns {Function} returns.setCharacterTyped - Setter for characterTyped
 * @returns {Function} returns.setSeconds - Setter for seconds
 * @returns {Function} returns.setHasStarted - Setter for hasStarted
 * @returns {Function} returns.setInputWord - Setter for inputWord
 * @returns {Function} returns.setIsFinished - Setter for isFinished
 * @returns {Function} returns.newGame - Resets the game state
 * @returns {Function} returns.setCurrentWord - Moves to the next word
 */
const useTypingGame = () => {
  const [sentence, setSentence] = useState(() => getRandomSentence(sentences));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctWord, setCorrectWord] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [characterTyped, setCharacterTyped] = useState(0);
  const [seconds, setSeconds] = useState(settings.initialSeconds);
  const [hasStarted, setHasStarted] = useState(false);
  const [inputWord, setInputWord] = useState('');

  const words = useMemo(() => sentence.split(' '), [sentence]);
  const sentenceLength = words.length;
  const currentWord = words[currentWordIndex];

  /**
   * Resets all game states to start a new game
   */
  const newGame = () => {
    setSentence(getRandomSentence(sentences));
    setCurrentWordIndex(0);
    setCorrectWord([]);
    setIsFinished(false);
    setCharacterTyped(0);
    setSeconds(settings.initialSeconds);
    setHasStarted(false);
    setInputWord('');
  };

  /**
   * Advances to the next word and checks if the game is finished
   */
  const setCurrentWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= sentenceLength) {
        setIsFinished(true);
      }
      return nextIndex;
    });
  };

  return {
    // States
    sentence,
    currentWord,
    currentWordIndex,
    correctWord,
    isFinished,
    characterTyped,
    seconds,
    hasStarted,
    inputWord,

    // Setters
    setCorrectWord,
    setCharacterTyped,
    setSeconds,
    setHasStarted,
    setInputWord,
    setIsFinished,

    // Actions
    newGame,
    setCurrentWord,
  };
};

export default useTypingGame;
