import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="text-center p-4 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-white/30 dark:border-gray-600"
        >
          <div className={`text-2xl sm:text-3xl font-bold mb-1 border-2 rounded-md p-2 ${
            theme === 'dark' ? 'text-white border-white' : 'text-black border-black'
          }`}>
            {value.toString().padStart(2, '0')}
          </div>
          <div className={`text-sm capitalize ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};