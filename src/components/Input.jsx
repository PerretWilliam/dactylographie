import { useState } from 'react';

const Input = ({
  currentWord,
  isFinished,
  hasStarted,
  setCurrentWord,
  setCorrectWord,
  setCharacterTyped,
  setHasStarted,
}) => {
  const [inputWord, setInputWord] = useState('');

  const handleWordChange = () => {
    console.log('currentWord:', inputWord);
    setInputWord('');
    setCurrentWord();
    setCorrectWord((prev) => [...prev, inputWord.trim() === currentWord]);
  };

  const handleKeyDown = (e) => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    e.key === ' ' ? handleWordChange() : null;
  };

  return (
    <input
      className="mt-6 w-full max-w-md rounded-2xl border border-muted bg-gray-100 px-4 py-3 text-lg text-foreground shadow-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-200"
      value={inputWord}
      disabled={isFinished}
      onChange={(e) => {
        setInputWord(e.target.value);
        setCharacterTyped((prev) => prev + 1);
      }}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  );
};

export default Input;
