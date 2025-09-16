// import React, { useState, useEffect } from 'react';

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const target = new Date(targetDate).getTime();
//       const difference = target - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [targetDate]);

//   return (
//     <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
//       {Object.entries(timeLeft).map(([unit, value]) => (
//         <div
//           key={unit}
//           className="text-center p-4 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-white/30 dark:border-gray-600"
//         >
//           <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
//             {value.toString().padStart(2, '0')}
//           </div>
//           <div className="text-sm text-white/80 capitalize">
//             {unit}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CountdownTimer;