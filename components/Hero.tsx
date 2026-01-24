
import React from 'react';

const Hero: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[180px] animate-pulse transition-all duration-[5000ms]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-12 flex justify-center opacity-80">
           <svg className="w-20 h-20 text-amber-500/60 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
           </svg>
        </div>

        <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 tracking-tight leading-none">
          The Magic <br />
          <span className="italic text-amber-500 shimmer-text">Begins Here.</span>
        </h1>
        
        <p className="text-white/40 text-lg md:text-xl font-light mb-16 tracking-[0.2em] uppercase max-w-2xl mx-auto leading-relaxed">
          Welcome to the official name reveal ceremony. <br />
          Please ensure your sound is turned on.
        </p>

        <button 
          onClick={onStart}
          className="group relative px-20 py-8 bg-transparent text-white rounded-full text-xl font-light tracking-[0.4em] uppercase border border-white/20 transition-all hover:bg-white hover:text-black hover:border-white shadow-[0_0_50px_rgba(255,255,255,0.05)] active:scale-95"
        >
          Begin Presentation
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
