import Input from './components/Input';
import Sentence from './components/Sentence';
import Scoreboard from './components/Scoreboard';
import CountDown from './components/CountDown';
import Header from './components/Header';
import useTypingGame from './hooks/useTypingGame';

/**
 * Main application component for the typing game
 * Orchestrates all game components and manages overall game flow
 *
 * @returns {JSX.Element} The main application component
 */
const App = () => {
  const {
    sentence,
    currentWord,
    currentWordIndex,
    correctWord,
    isFinished,
    characterTyped,
    seconds,
    hasStarted,
    inputWord,
    setCorrectWord,
    setCharacterTyped,
    setSeconds,
    setHasStarted,
    setInputWord,
    setIsFinished,
    newGame,
    setCurrentWord,
  } = useTypingGame();

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
              inputWord={inputWord}
              currentWordIndex={currentWordIndex}
              currentWord={currentWord}
              correctWord={correctWord}
            />

            <Input
              inputWord={inputWord}
              currentWord={currentWord}
              setInputWord={setInputWord}
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
