import React from 'react';
import { MapPin, Anchor, Navigation } from 'lucide-react';

const days = [
  {
    day: "Day 1 • Oct 12",
    title: "Miami, Florida • Embarkation",
    desc: "Welcome aboard Resilient Lady. Check in and enjoy a Sail Away Toast with fellow celebrants as we cruise out of Miami with live music and cocktails.",
    coord: "miami"
  },
  {
    day: "Day 2 • Oct 13",
    title: "At Sea • 70th Birthday Celebration",
    desc: "Relax, indulge, and celebrate. Featuring a private birthday brunch, themed deck party, and unforgettable surprises for the 70th milestones.",
    coord: "sea"
  },
  {
    day: "Day 3 • Oct 14",
    title: "Puerto Plata, Dominican Republic",
    desc: "Explore Puerto Plata with curated excursions—from beachside relaxation to rich cultural tours. The island vibe is pure magic.",
    coord: "puerto"
  },
  {
    day: "Day 4 • Oct 15",
    title: "At Sea • 80th Birthday Celebration",
    desc: "Recharge at sea. That evening, dress to impress for the Elegant Sunset Soirée—a night of fine dining and celebration of 80th birthday milestones.",
    coord: "sea"
  },
  {
    day: "Day 5 • Oct 16",
    title: "Beach Club at Bimini, Bahamas",
    desc: "Spend the day in barefoot luxury at the exclusive Beach Club. Crystal waters, white sands, and a sunset bonfire awaits.",
    coord: "bimini"
  },
  {
    day: "Day 6 • Oct 17",
    title: "Miami, Florida • Farewell",
    desc: "We return to Miami with hearts full. Hugs, photos, and promises to cruise again.",
    coord: "miami"
  }
];

export const Itinerary: React.FC = () => {
  return (
    <section id="itinerary" className="scroll-mt-24">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-3 pl-1">Schedule</div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-2">Your Voyage, <span className="italic text-brand-red">Day by Day</span></h2>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
        {/* Itinerary List */}
        <div className="space-y-4 order-2 lg:order-1">
          {days.map((d, i) => (
            <div 
              key={i} 
              className="group relative grid md:grid-cols-[200px_1fr] items-start p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-red/30 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300"
            >
              {/* Connector Line visual illusion */}
              {i !== days.length - 1 && (
                 <div className="absolute left-[39px] top-[70px] bottom-[-20px] w-px bg-slate-100 md:hidden z-0" />
              )}

              <div className="flex flex-col md:border-r md:border-slate-100 md:pr-8 md:mr-8 mb-4 md:mb-0 relative z-10">
                 <span className="text-brand-red font-black text-sm bg-white md:bg-transparent w-max pr-3 uppercase tracking-wider">{d.day}</span>
                 <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1.5 font-bold">2026</span>
              </div>
              <div>
                <h3 className="text-slate-900 font-serif font-bold mb-3 text-xl group-hover:text-brand-red transition-colors">{d.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed font-light">{d.desc}</p>
              </div>
            </div>
          ))}
          
          <div className="mt-8 p-5 rounded-2xl bg-amber-50 border border-amber-100 text-center">
            <p className="text-xs font-medium text-amber-900/80 uppercase tracking-wide">
              <strong className="font-black text-amber-900">Note:</strong> Itinerary is subject to change based on weather or cruise line adjustments.
            </p>
          </div>
        </div>

        {/* Visual Map */}
        <div className="order-1 lg:order-2 sticky top-32 hidden lg:block">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl shadow-blue-900/10 border border-slate-800 relative overflow-hidden min-h-[600px] flex flex-col">
            {/* Map Header */}
            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold mb-2">
                <Navigation size={12} className="text-brand-red" />
                Route Map
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Caribbean Loop</h3>
            </div>

            {/* Map SVG Visualization */}
            <div className="relative flex-1 w-full h-full">
              {/* Background Water Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.3),transparent)] opacity-50" />

              <svg viewBox="0 0 400 500" className="w-full h-full drop-shadow-lg filter">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D90429" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Abstract Land Masses */}
                {/* Florida */}
                <path d="M -20 0 L 100 0 L 120 50 L 100 100 L 80 120 L 60 100 L -20 100 Z" fill="#1e293b" opacity="0.5" />
                {/* Bahamas/Bimini Area */}
                <path d="M 160 80 Q 180 70 200 90 T 240 110" fill="none" stroke="#1e293b" strokeWidth="15" strokeLinecap="round" opacity="0.5" />
                {/* DR Area */}
                <path d="M 250 400 Q 300 380 350 400 L 380 450 L 250 450 Z" fill="#1e293b" opacity="0.5" />

                {/* Route Path */}
                {/* Miami (60, 90) -> Puerto Plata (300, 400) -> Bimini (200, 110) -> Miami (60, 90) */}
                <path 
                  d="M 70 90 C 150 150, 250 300, 300 400" 
                  fill="none" 
                  stroke="url(#routeGradient)" 
                  strokeWidth="3" 
                  strokeDasharray="6 4"
                  className="animate-[dash_30s_linear_infinite]"
                />
                <path 
                  d="M 300 400 C 280 250, 250 150, 200 110" 
                  fill="none" 
                  stroke="url(#routeGradient)" 
                  strokeWidth="3" 
                  strokeDasharray="6 4"
                  opacity="0.6"
                />
                <path 
                  d="M 200 110 C 150 100, 100 95, 70 90" 
                  fill="none" 
                  stroke="url(#routeGradient)" 
                  strokeWidth="3" 
                  strokeDasharray="6 4"
                  opacity="0.4"
                />

                {/* Location Markers */}
                
                {/* Miami */}
                <g transform="translate(70, 90)">
                   <circle r="6" fill="#D90429" className="animate-pulse">
                      <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                   </circle>
                   <circle r="3" fill="white" />
                   <text x="15" y="5" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Miami</text>
                   <text x="15" y="18" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Start & End</text>
                </g>

                {/* Puerto Plata */}
                <g transform="translate(300, 400)">
                   <circle r="6" fill="#F59E0B">
                      <animate attributeName="r" values="6;10;6" dur="2s" begin="1s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0.5;1" dur="2s" begin="1s" repeatCount="indefinite" />
                   </circle>
                   <circle r="3" fill="white" />
                   <text x="-85" y="5" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Puerto Plata</text>
                   <text x="-65" y="18" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Dominican Rep.</text>
                </g>

                {/* Bimini */}
                <g transform="translate(200, 110)">
                   <circle r="6" fill="#047857">
                      <animate attributeName="r" values="6;10;6" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0.5;1" dur="2s" begin="0.5s" repeatCount="indefinite" />
                   </circle>
                   <circle r="3" fill="white" />
                   <text x="15" y="5" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Bimini</text>
                   <text x="15" y="18" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Beach Club</text>
                </g>

              </svg>

              {/* Map Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-800/50 backdrop-blur-sm border-t border-slate-700">
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="flex flex-col items-center gap-1">
                        <Anchor size={14} className="text-slate-400" />
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Nautical Miles</span>
                        <span className="text-white font-bold text-xs">~1,800</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-l border-slate-700">
                        <div className="w-3.5 h-3.5 rounded-full border border-white/30 flex items-center justify-center text-[8px] text-white">5</div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Nights</span>
                        <span className="text-white font-bold text-xs">Duration</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-l border-slate-700">
                         <MapPin size={14} className="text-slate-400" />
                         <span className="text-[10px] text-slate-400 uppercase tracking-wider">Stops</span>
                         <span className="text-white font-bold text-xs">2 Ports</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};