import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links: { name: string; id: ViewState }[] = [
    { name: 'Overview', id: 'overview' },
    { name: 'Trip', id: 'experience' },
    { name: 'Itinerary', id: 'itinerary' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Cabins', id: 'cabins' },
    { name: 'Reserve', id: 'booking' },
  ];

  const handleNav = (view: ViewState) => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-100 bg-white/90 backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto px-5 py-3 flex items-center justify-between">
        
        {/* Logo Area */}
        <button 
          onClick={() => handleNav('overview')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-red to-brand-dark text-white flex items-center justify-center font-serif font-bold text-sm shadow-lg shadow-brand-red/20">
            XD
          </div>
          <div className="flex flex-col text-[11px] uppercase tracking-[0.16em] text-slate-500 leading-tight text-left">
            <span>Hosted by</span>
            <strong className="text-slate-900 font-bold">Xquisite Dream Travel</strong>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-bold">
          {links.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNav(link.id)}
              className={`transition-colors duration-200 border-b-2 py-1 ${
                currentView === link.id 
                  ? 'text-brand-red border-brand-red' 
                  : 'text-slate-600 border-transparent hover:text-brand-red hover:border-brand-red/30'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <button 
            onClick={() => handleNav('booking')}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-red to-brand-crimson text-white text-xs font-bold shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40 hover:scale-[1.02] transition-all duration-300"
          >
            <span>Reserve your cabin</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-brand-red"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-rose-100 p-5 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
          {links.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNav(link.id)}
              className={`text-sm font-medium py-2 border-b border-slate-50 text-left ${
                 currentView === link.id ? 'text-brand-red' : 'text-slate-600 hover:text-brand-red'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNav('booking')}
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand-red to-brand-crimson text-white font-bold text-sm shadow-lg shadow-brand-red/20"
          >
             Reserve Spot
          </button>
        </div>
      )}
    </header>
  );
};