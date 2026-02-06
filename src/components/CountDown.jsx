import { BellRing } from 'lucide-react';
import useCountdown from '../hooks/useCountdown';

/**
 * Countdown timer component
 * Displays remaining time and manages the countdown logic
 *
 * @param {Object} props - Component properties
 * @param {number} props.seconds - Remaining seconds
 * @param {boolean} props.hasStarted - Whether the game has started
 * @param {boolean} props.isFinished - Whether the game is finished
 * @param {Function} props.setSeconds - Function to update remaining seconds
 * @param {Function} props.setIsFinished - Function to mark game as finished
 * @returns {JSX.Element} The countdown component
 */
const CountDown = ({ seconds, hasStarted, isFinished, setSeconds, setIsFinished }) => {
  useCountdown({ hasStarted, isFinished, setSeconds, setIsFinished });

  return (
    <div className="mb-6 text-center">
      <p className={`text-xl font-medium ${seconds <= 10 ? 'text-red-500' : 'text-foreground'}`}>
        {seconds > 0 ? (
          <>
            Temps restant : <span className="font-semibold">{seconds}s</span>
          </>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <BellRing /> Temps écoulé !
          </div>
        )}
      </p>
    </div>
  );
};

export default CountDown;
