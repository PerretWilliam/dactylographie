import { useState, useMemo } from 'react';
import Input from './components/Input';
import Sentence from './components/Sentence';
import { sentences, settings } from './constants';
import { getRandomSentence } from './utils';
import Scoreboard from './components/Scoreboard';
import CountDown from './components/CountDown';
import Header from './components/Header';

const App = () => {
  const [sentence, setSentence] = useState(() => getRandomSentence(sentences));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctWord, setCorrectWord] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [characterTyped, setCharacterTyped] = useState(0);
  const [seconds, setSeconds] = useState(settings.initialSeconds);
  const [hasStarted, setHasStarted] = useState(false);

  const words = useMemo(() => sentence.split(' '), [sentence]);
  const sentenceLength = words.length;
  const currentWord = words[currentWordIndex];

  const newGame = () => {
    setSentence(getRandomSentence(sentences));
    setCurrentWordIndex(0);
    setCorrectWord([]);
    setIsFinished(false);
    setCharacterTyped(0);
    setSeconds(settings.initialSeconds);
    setHasStarted(false);
  };

  const setCurrentWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= sentenceLength) {
        setIsFinished(true);
      }
      return nextIndex;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="flex w-full max-w-6xl justify-center">
          <div className="flex flex-col items-center">
            <Header />

            <CountDown
              seconds={seconds}
              hasStarted={hasStarted}
              isFinished={isFinished}
              setSeconds={setSeconds}
              setIsFinished={setIsFinished}
            />

            <Sentence
              sentence={sentence}
              currentWordIndex={currentWordIndex}
              currentWord={currentWord}
              correctWord={correctWord}
            />

            <Input
              currentWord={currentWord}
              isFinished={isFinished}
              hasStarted={hasStarted}
              setHasStarted={setHasStarted}
              setCurrentWord={setCurrentWord}
              setCorrectWord={setCorrectWord}
              setCharacterTyped={setCharacterTyped}
            />
          </div>

          {isFinished && (
            <div className="ml-6 text-center">
              <Scoreboard
                seconds={seconds}
                correctWord={correctWord}
                characterTyped={characterTyped}
              />
              <button
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-white hover:bg-hover transition"
                onClick={newGame}>
                Nouvelle Partie
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
