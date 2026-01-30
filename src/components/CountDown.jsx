import { BellRing } from 'lucide-react';
import { useEffect } from 'react';

const CountDown = ({ seconds, hasStarted, isFinished, setSeconds, setIsFinished }) => {
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
