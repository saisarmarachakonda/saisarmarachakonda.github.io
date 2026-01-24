
import React from 'react';

const Hero: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[180px] animate-pulse transition-all duration-[5000ms]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* Decorative Top Element */}
        <div className="mb-8 flex justify-center opacity-80 fade-in-up">
          <svg className="w-16 h-16 text-amber-500/60 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            <circle cx="12" cy="12" r="5" strokeOpacity="0.5" />
          </svg>
        </div>

        <h1 className="text-6xl md:text-9xl font-serif text-white mb-6 tracking-tighter leading-none fade-in-up delay-200">
          The Legend <br />
          <span className="italic text-amber-500 shimmer-text relative inline-block">
            Begins Here.
            <svg className="absolute -bottom-4 left-0 w-full h-3 text-amber-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" fill="none" />
            </svg>
          </span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-12 fade-in-up delay-300 opacity-60">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="w-2 h-2 rotate-45 border border-amber-500"></div>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>

        <p className="text-white/60 text-lg md:text-xl font-light mb-16 tracking-[0.2em] uppercase max-w-xl mx-auto leading-relaxed fade-in-up delay-500">
          Witness the dawn of a new destiny. <br />
          <span className="text-xs opacity-50 block mt-2">Audio Experience Recommended</span>
        </p>

        <button
          onClick={onStart}
          className="group relative px-16 py-6 bg-white/5 hover:bg-white/10 text-white rounded-sm text-lg font-light tracking-[0.4em] uppercase border border-white/20 transition-all hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] active:scale-95 fade-in-up delay-700 overflow-hidden"
        >
          <span className="relative z-10">Enter Experience</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>

      {/* Decorative stars/particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5
          }}
        />
      ))}
    </div>
  );
};

export default Hero;
