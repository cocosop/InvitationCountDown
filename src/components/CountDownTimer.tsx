import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date('2026-04-24T21:00:00');

function calculateTimeLeft(): TimeLeft {
  const difference = TARGET_DATE.getTime() - new Date().getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

interface UnitProps {
  value: number;
  label: string;
}

function Unit({ value, label }: UnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center rounded-xl border border-yellow-600/40"
          style={{
            background: 'linear-gradient(145deg, #1a1400, #0d0a00)',
            boxShadow: '0 0 30px rgba(212,175,55,0.12), inset 0 1px 0 rgba(212,175,55,0.15)',
          }}
        >
          <span
            className="text-3xl sm:text-5xl md:text-6xl font-bold tabular-nums"
            style={{
              background: 'linear-gradient(180deg, #f5d060 0%, #c8a415 50%, #f0c040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: "'Georgia', serif",
            }}
          >
            {String(value).padStart(2, '0')}
          </span>
        </div>
        <div
          className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.4) 0%, transparent 70%)',
          }}
        />
      </div>
      <span
        className="mt-3 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium"
        style={{ color: '#a88a2a' }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isOver = Object.values(timeLeft).every((v) => v === 0);

  if (isOver) {
    return (
      <p
        className="text-2xl sm:text-3xl tracking-widest uppercase font-semibold"
        style={{
          background: 'linear-gradient(90deg, #f5d060, #c8a415, #f5d060)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Ce soir — La nuit commence
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-xs sm:text-sm tracking-[0.3em] uppercase" style={{ color: '#a88a2a' }}>
        La soirée commence dans
      </p>
      <div className="flex items-start gap-2 sm:gap-6">
        <Unit value={timeLeft.days} label="Jours" />
        <Separator />
        <Unit value={timeLeft.hours} label="Heures" />
        <Separator />
        <Unit value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <Unit value={timeLeft.seconds} label="Secondes" />
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex flex-col gap-3 pt-5 sm:pt-8">
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c8a415' }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c8a415' }} />
    </div>
  );
}
