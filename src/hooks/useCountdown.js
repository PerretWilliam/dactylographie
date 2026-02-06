import { useEffect } from 'react';

/**
 * Custom hook to manage countdown timer logic
 *
 * @param {Object} props - Hook properties
 * @param {boolean} props.hasStarted - Whether the game has started
 * @param {boolean} props.isFinished - Whether the game is finished
 * @param {Function} props.setSeconds - Function to update seconds remaining
 * @param {Function} props.setIsFinished - Function to mark game as finished
 */
const useCountdown = ({ hasStarted, isFinished, setSeconds, setIsFinished }) => {
  useEffect(() => {
    if (!hasStarted || isFinished) return;

    const timerID = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerID);
  }, [hasStarted, isFinished, setIsFinished, setSeconds]);
};

export default useCountdown;
