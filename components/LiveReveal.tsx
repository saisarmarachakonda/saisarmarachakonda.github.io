

import React, { useState, useEffect, useRef } from 'react';

const LiveReveal: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [stage, setStage] = useState<'countdown' | 'reveal'>('countdown');
  const [timer, setTimer] = useState(5);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize Audio Context on mount (or first interaction)
  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const playTickSound = () => {
    if (audioContextRef.current) {
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      // Cinematic tick: Low frequency, short burst
      osc.type = 'sine';
      osc.frequency.setValueAtTime(60, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    }
  };

  useEffect(() => {
    let interval: any;
    if (stage === 'countdown' && timer > 0) {
      playTickSound(); // Play sound on each tick
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (stage === 'countdown' && timer === 0) {
      setStage('reveal');
    }
    return () => clearInterval(interval);
  }, [stage, timer]);

  // When stage changes to reveal, attempt to play
  useEffect(() => {
    if (stage === 'reveal' && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented, waiting for user interaction:", error);
        setIsMuted(true); // Fallback to muted if autoplay fails
      });
    }
  }, [stage]);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-amber-900/10 transition-opacity duration-1000 ${stage === 'reveal' ? 'opacity-100' : 'opacity-0'}`} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] opacity-10 pointer-events-none">
          <svg className="w-full h-full text-amber-500 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <path d="M50 0 L50 100 M0 50 L100 50" />
            <path d="M15 15 L85 85 M85 15 L15 85" />
            <circle cx="50" cy="50" r="20" strokeDasharray="1 2" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle bg-amber-200 w-[3px] h-[3px] rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              opacity: Math.random() * 0.7
            }}
          />
        ))}
      </div>

      <button
        onClick={onBack}
        className="absolute top-8 left-8 text-white/40 hover:text-white transition-all z-[60] flex items-center gap-3 px-5 py-2.5 border border-white/10 rounded-full bg-black/40 backdrop-blur-xl uppercase text-[10px] tracking-[0.4em]"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Entry
      </button>

      {stage === 'countdown' && (
        <div className="relative z-10 text-center select-none">
          <div className="text-[18rem] md:text-[28rem] font-serif font-bold text-white leading-none tracking-tighter transition-all transform animate-pulse drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            {timer}
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-amber-500/80 tracking-[1.5em] uppercase text-xs font-bold animate-pulse">
              Preparing the Moment
            </p>
            <div className="flex gap-3 justify-center">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-1000 ${5 - timer > i ? 'w-8 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]' : 'w-4 bg-white/10'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {stage === 'reveal' && (
        <div className="relative w-full h-full animate-fade-in flex flex-col items-center justify-center">
          {/* Cinematic Container */}
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-contain md:object-cover max-w-none"
              muted={isMuted}
              playsInline
              onEnded={() => {
                // Optional: show a final message or reset
              }}
            >
              <source src="/arjun_reveal.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Cinematic Letterbox Overlays */}
            <div className="absolute top-0 w-full h-[10%] bg-black z-10 hidden md:block" />
            <div className="absolute bottom-0 w-full h-[10%] bg-black z-10 hidden md:block" />

            {/* Soft Edge Vignette */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Unmute Action Overlay */}
          {isMuted && (
            <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
              <button
                onClick={handleUnmute}
                className="pointer-events-auto group relative flex flex-col items-center gap-6 p-12 rounded-full transition-all hover:scale-105 active:scale-95"
              >
                <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(245,158,11,0.4)] group-hover:bg-white transition-colors animate-bounce">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 4.06c0-1.333-1.613-2.001-2.553-1.06l-4.593 4.593H4.25a1.25 1.25 0 00-1.25 1.25v6.312c0 .69.56 1.25 1.25 1.25h2.104l4.593 4.593c.94.94 2.553.272 2.553-1.06V4.06zM15.75 12c0-2.315-1.121-4.364-2.85-5.642a.75.75 0 00-.916 1.189 5.378 5.378 0 010 8.906.75.75 0 10.916 1.189A7.228 7.228 0 0015.75 12z" />
                  </svg>
                </div>
                <span className="text-white text-xs font-bold uppercase tracking-[0.6em] drop-shadow-lg">
                  Tap to Enable Cinematic Audio
                </span>
              </button>
            </div>
          )}

          {/* Subtle Video Footer */}
          {!isMuted && (
            <div className="absolute bottom-12 text-white/20 uppercase tracking-[0.5em] text-[10px] pointer-events-none z-20">
              Arjun • The Eternal Light
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveReveal;
