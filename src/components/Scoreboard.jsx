import { Frown, PartyPopper } from 'lucide-react';
import { settings } from '../constants';

/**
 * Scoreboard component displaying game statistics and results
 * Shows correct/incorrect word counts, typing speed, accuracy, and WPM
 *
 * @param {Object} props - Component properties
 * @param {boolean[]} props.correctWord - Array tracking correct/incorrect words
 * @param {number} props.characterTyped - Total number of characters typed
 * @param {number} props.seconds - Remaining seconds (0 if time ran out)
 * @returns {JSX.Element} The scoreboard component
 */
const Scoreboard = ({ correctWord, characterTyped, seconds }) => {
  // Count correct and incorrect words
  const correctCount = correctWord.filter(Boolean).length;
  const errorCount = correctWord.filter((isCorrect) => !isCorrect).length;

  // Calculate elapsed time based on initial seconds and remaining seconds
  const elapsedSeconds = settings.initialSeconds - seconds;

  // Check if any time has elapsed and if there is remaining time to avoid division by zero
  const hasElapsedTime = elapsedSeconds > 0;
  const hasRemainingTime = seconds > 0;

  // Calculate characters per second, accuracy percentage, and words per minute
  const cps = hasElapsedTime ? Math.round(characterTyped / elapsedSeconds) : 0;
  const accuracy =
    correctWord.length > 0 ? Math.round((correctCount / correctWord.length) * 100) : 0;
  const wpm = hasElapsedTime ? Math.round(characterTyped / 5 / (elapsedSeconds / 60)) : 0;

  return (
    <div className="mt-6 w-full max-w-xl rounded-2xl p-6">
      {hasRemainingTime ? (
        <h2 className="mb-4 text-center text-2xl font-semibold text-primary flex items-center justify-center gap-2">
          <PartyPopper /> Félicitations !
        </h2>
      ) : (
        <h2 className="mb-4 text-center text-2xl font-semibold text-red-600 flex items-center justify-center gap-2">
          <Frown /> Dommage !
        </h2>
      )}

      <div className="mb-4 flex justify-around text-center">
        <div>
          <p className="text-3xl font-bold text-green-500">{correctCount}</p>
          <p className="text-sm text-muted">Mots corrects</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-500">{errorCount}</p>
          <p className="text-sm text-muted">Erreurs</p>
        </div>
      </div>

      <div className="mb-4 rounded-xl p-4 text-center">
        <p className="text-lg font-medium text-foreground">{characterTyped} caractères tapés</p>
        <p className="mt-1 text-sm text-muted">
          Vitesse de frappe :{' '}
          <span className="font-semibold text-primary">{wpm} mots / minute</span>
        </p>
        <p className="mt-1 text-sm text-muted">
          Vitesse : <span className="font-semibold text-primary">{cps} caractères / seconde</span>
        </p>
        <p className="mt-1 text-sm text-muted">
          Précision :{' '}
          <span
            className={`font-semibold ${accuracy >= 80 ? 'text-green-600' : 'text-orange-500'}`}>
            {accuracy} %
          </span>
        </p>
      </div>

      {hasRemainingTime && (
        <p className="text-center text-sm text-muted">
          Temps restant : <span className="font-medium text-foreground">{seconds}s</span>
        </p>
      )}
    </div>
  );
};

export default Scoreboard;
