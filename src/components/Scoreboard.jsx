import { Frown, PartyPopper } from 'lucide-react';
import { settings } from '../constants';

const Scoreboard = ({ correctWord, characterTyped, seconds }) => {
  const correctCount = correctWord.filter(Boolean).length;
  const errorCount = correctWord.filter((isCorrect) => !isCorrect).length;
  const elapsedSeconds = settings.initialSeconds - seconds;
  const cps = elapsedSeconds > 0 ? Math.round(characterTyped / elapsedSeconds) : 0;
  const accuracy =
    correctWord.length > 0 ? Math.round((correctCount / correctWord.length) * 100) : 0;

  return (
    <div className="mt-6 w-full max-w-xl rounded-2xl p-6">
      {seconds > 0 ? (
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

      {seconds > 0 && (
        <p className="text-center text-sm text-muted">
          Temps restant : <span className="font-medium text-foreground">{seconds}s</span>
        </p>
      )}
    </div>
  );
};

export default Scoreboard;
