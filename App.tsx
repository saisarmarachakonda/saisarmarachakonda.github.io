
import React, { useState } from 'react';
import Hero from './components/Hero';
import LiveReveal from './components/LiveReveal';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-amber-500/30 overflow-x-hidden">
      {view === 'home' ? (
        <Hero onStart={() => setView('reveal')} />
      ) : (
        <LiveReveal onBack={() => setView('home')} />
      )}
      
      {view === 'home' && (
        <footer className="fixed bottom-8 w-full text-center text-white/20 text-xs uppercase tracking-[0.3em] pointer-events-none">
          Nomina Studio • Est. 2025
        </footer>
      )}
    </div>
  );
};

export default App;
