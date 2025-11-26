import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red to-brand-dark flex items-center justify-center font-serif font-bold text-white">
                XD
              </div>
              <div className="flex flex-col text-xs uppercase tracking-widest text-slate-300">
                <span>Hosted by</span>
                <strong className="text-white">Xquisite Dream Travel</strong>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Creating unforgettable journeys and milestone celebrations. Specializing in group travel, luxury cruises, and multi-generational vacations.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <a href="mailto:joanne@xquisitedreamtravel.com" className="flex items-center gap-3 hover:text-brand-red transition-colors">
                <Mail size={16} />
                <span>Email Joanne</span>
              </a>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>(917)2510608</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm items-start">
              <button onClick={() => onNavigate('overview')} className="hover:text-brand-red transition-colors">Overview</button>
              <button onClick={() => onNavigate('experience')} className="hover:text-brand-red transition-colors">Trip Experience</button>
              <button onClick={() => onNavigate('itinerary')} className="hover:text-brand-red transition-colors">Itinerary</button>
              <button onClick={() => onNavigate('gallery')} className="hover:text-brand-red transition-colors">Gallery</button>
              <button onClick={() => onNavigate('cabins')} className="hover:text-brand-red transition-colors">Cabins</button>
              <button onClick={() => onNavigate('booking')} className="hover:text-brand-red transition-colors">Reserve Now</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Xquisite Dream Travel. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
