import { MapPin, Calendar, Clock } from 'lucide-react';
import CountdownTimer from './CountDownTimer';
import logo from './../assets/Logo1.png'

export default function EventPage() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden"
      style={{ background: '#080600' }}
    >
      <Particles />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.5) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10"
          style={{
            background:
              'radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <header className="relative z-10 w-full flex flex-col items-center pt-10 sm:pt-14 pb-6 px-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(90deg, transparent, #c8a415)' }} />
          <span className="text-xs tracking-[0.35em] uppercase" style={{ color: '#a88a2a' }}>
            Presented by Sipping
          </span>
          <div className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(90deg, #c8a415, transparent)' }} />
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center flex-1 px-6 pb-10 gap-10 sm:gap-14 w-full max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div
            className="relative"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.25))',
            }}
          >
            <img
              src={logo}
              alt="Casual Nights by Sipping"
              className="w-44 sm:w-64 md:w-72 object-contain"
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #c8a415)' }} />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: '#7a6010' }}>
                Une soirée exclusive
              </span>
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #c8a415, transparent)' }} />
            </div>

            <h1
              className="text-5xl sm:text-7xl md:text-8xl font-bold text-center leading-none tracking-tight"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                background: 'linear-gradient(180deg, #f8e070 0%, #d4af37 40%, #a07c10 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
              }}
            >
              Casual
            </h1>
            <h1
              className="text-5xl sm:text-7xl md:text-8xl font-bold text-center leading-none tracking-tight -mt-3 sm:-mt-5"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                background: 'linear-gradient(180deg, #ffffff 0%, #e8d48a 60%, #c8a415 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nights
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-2">
            <InfoBadge icon={<Calendar size={14} />} text="Vendredi 24 Avril 2026" />
            <Dot />
            <InfoBadge icon={<Clock size={14} />} text="21h00" />
            <Dot />
            <InfoBadge icon={<MapPin size={14} />} text="Douala Bonanjo, Makombe pool bar" />
          </div>
        </div>

        <Divider />

        <CountdownTimer />

        <Divider />

        <div className="flex flex-col items-center gap-4 text-center">
          <p
            className="text-sm sm:text-base leading-relaxed max-w-md"
            style={{ color: '#8a7020' }}
          >
            Une nuit élégante, une ambiance feutrée. Préparez-vous pour une expérience
            unique où raffinement et convivialité se rencontrent.
          </p>
        </div>
      </main>

      <footer
        className="relative z-10 w-full text-center py-6 px-6"
        style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}
      >
        <p className="text-xs tracking-widest uppercase" style={{ color: '#4a3a08' }}>
          &2026 Casual Nights by BassTechnologie — Tous droits reservés
        </p>
      </footer>
    </div>
  );
}

function InfoBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2" style={{ color: '#c8a415' }}>
      <span style={{ opacity: 0.8 }}>{icon}</span>
      <span className="text-xs sm:text-sm tracking-wider whitespace-nowrap">{text}</span>
    </div>
  );
}

function Dot() {
  return (
    <div
      className="hidden sm:block w-1 h-1 rounded-full"
      style={{ background: 'rgba(200,164,21,0.4)' }}
    />
  );
}

function Divider() {
  return (
    <div className="w-full flex items-center gap-4">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3))' }} />
      <div className="w-1.5 h-1.5 rounded-full rotate-45" style={{ background: '#c8a415', opacity: 0.6 }} />
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent)' }} />
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.15 + 0.03,
    delay: `${Math.random() * 8}s`,
    duration: `${Math.random() * 6 + 6}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            background: '#d4af37',
            opacity: dot.opacity,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  );
}
