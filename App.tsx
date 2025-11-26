import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Details } from './components/Details';
import { Itinerary } from './components/Itinerary';
import { Gallery } from './components/Gallery';
import { Cabins } from './components/Cabins';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

export type ViewState = 'overview' | 'experience' | 'itinerary' | 'gallery' | 'cabins' | 'booking';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('overview');

  // Scroll to top whenever the view changes for a true "new page" feel
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-50">
      {/* Background ambient effects - Persistent across all views */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50/50">
        {/* Top Right - Large Vibrant Orange/Red Glow */}
        <div className="absolute -top-[10%] -right-[10%] w-[900px] h-[900px] bg-gradient-to-br from-brand-orange/20 via-brand-red/15 to-transparent rounded-full blur-[100px] mix-blend-multiply animate-float" />
        
        {/* Middle Left - Deep Crimson/Rose for Depth */}
        <div className="absolute top-[25%] -left-[15%] w-[800px] h-[800px] bg-gradient-to-tr from-brand-crimson/15 via-brand-red/10 to-transparent rounded-full blur-[90px] mix-blend-multiply animate-float-delayed" />
        
        {/* Bottom Right - Warm Gold/Amber */}
        <div className="absolute bottom-[-10%] right-[10%] w-[800px] h-[600px] bg-gradient-to-t from-brand-gold/15 via-brand-orange/10 to-transparent rounded-full blur-[120px] mix-blend-multiply animate-float-slow" />

        {/* Center Pulse - Subtle Red Heartbeat */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[100px] animate-pulse-slow mix-blend-multiply" />
      </div>

      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="relative z-10 flex-1 w-full max-w-[1120px] mx-auto px-5 pb-20 pt-8 min-h-[600px]">
        {/* Conditional Rendering for SPA feel */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {currentView === 'overview' && <Hero onNavigate={setCurrentView} />}
          {currentView === 'experience' && <Details />}
          {currentView === 'itinerary' && <Itinerary />}
          {currentView === 'gallery' && <Gallery />}
          {currentView === 'cabins' && <Cabins />}
          {currentView === 'booking' && <BookingForm />}
        </div>
      </main>

      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;