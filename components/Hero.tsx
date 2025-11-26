import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ViewState } from '../App';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const slides = [
  {
    url: "https://virginvoyages.imgix.net/dam/jcr:c1ce5b19-d2ea-4357-b93c-a542f8742860/Resilient%20Lady%20-%20Gallery%2011-12.png", // Celebration/Toasting on boat - more inviting
    label: "Celebrate Life",
    desc: "Cheers to 70 & 80 Years"
  },
  {
    url: "https://virginvoyages.imgix.net/dam/jcr:81a05d8d-932c-4568-ac54-c7160485c829/Resilient%20lady-2252x1266.png", // Majestic Ship
    label: "Resilient Lady",
    desc: "Modern Luxury at Sea"
  },
  {
    url: "https://virginvoyages.imgix.net/dam/jcr:9d750829-2ef2-4377-867b-eef844cb8e32/IMG-ENT-the-manor-entrance-V1-s18-048-1600x900.jpg", // Scarlet Night
    label: "Risilient Night",
    desc: "Paint the Town Red"
  },
  {
    url: "https://virginvoyages.imgix.net/dam/jcr:707c997a-698d-4bcd-8a4d-1e1230c22a60/IMG-DEST-bimini-port-collage-1200x1440.jpg", // Bimini
    label: "Bimini Beach Club",
    desc: "Private Island Escape"
  }
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    setIsAutoPlaying(false);
  };
  
  const next = () => {
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    setIsAutoPlaying(false);
  };

  // Auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="pt-12 md:pt-16 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
      
      {/* Left Content */}
      <div className="flex flex-col items-start relative z-10 order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 pl-1 pr-4 py-1 rounded-full border border-rose-100 bg-white shadow-sm text-slate-500 text-xs mb-8 hover:shadow-md transition-shadow animate-in slide-in-from-bottom-4 fade-in duration-700">
          <span className="px-3 py-1 rounded-full bg-brand-dark text-white font-bold text-[10px] uppercase tracking-wider">
            Adults Only
          </span>
          <span className="font-bold text-brand-red tracking-wide">5-night birthday celebration at sea</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-slate-900 mb-8 tracking-tighter leading-[0.95] animate-in slide-in-from-bottom-6 fade-in duration-1000 fill-mode-both delay-100">
          Vintage & <br />
          <span className="italic font-medium bg-gradient-to-r from-brand-red via-brand-crimson to-brand-orange bg-clip-text text-transparent pb-2 pr-4">
            Vibrant Voyage
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm md:text-base uppercase tracking-widest text-slate-500 mb-10 font-bold font-sans animate-in slide-in-from-bottom-6 fade-in duration-1000 fill-mode-both delay-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand-red" />
            <span>Oct 12–17, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-yellow" />
            <span>Miami Roundtrip</span>
          </div>
        </div>

        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light animate-in slide-in-from-bottom-6 fade-in duration-1000 fill-mode-both delay-300">
          Join Vida Culbertson, Diane Nesbitt, and Marie Pringle for a 5-night birthday cruise celebration like no other aboard Virgin Voyages’ <strong className="text-slate-900 font-bold">Resilient Lady</strong>. Honor incredible 70th and 80th milestones in unforgettable style.
        </p>

        <div className="grid gap-4 mb-12 text-slate-700 text-sm md:text-base font-medium animate-in slide-in-from-bottom-6 fade-in duration-1000 fill-mode-both delay-500">
          {[
            "Adults-only (18+) sailing with refined, relaxed vibes.",
            "70th & 80th birthday celebrations with exclusive group events.",
            "Private Beach Club at Bimini access included.",
            "All dining, tips, Wi-Fi, and essential drinks included."
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 group cursor-default">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 shadow-[0_0_8px_rgba(225,29,72,0.6)] group-hover:scale-150 transition-transform duration-300" />
              <span className="group-hover:text-slate-900 transition-colors">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-8 animate-in slide-in-from-bottom-6 fade-in duration-1000 fill-mode-both delay-700">
          <button 
            onClick={() => onNavigate('booking')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-red to-brand-crimson text-white font-bold text-base shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            Reserve your cabin
            <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => onNavigate('itinerary')}
            className="px-8 py-4 rounded-full border border-slate-200 bg-white text-slate-700 font-bold hover:bg-rose-50 hover:border-rose-200 hover:text-brand-red transition-all duration-300"
          >
            View full itinerary
          </button>
        </div>

        <p className="text-xs text-slate-400 max-w-md font-medium animate-in fade-in duration-1000 delay-1000">
          $400 per person non-refundable deposit secures your spot. Monthly payments available. Final payment due June 7, 2026.
        </p>
      </div>

      {/* Right Content - Interactive Carousel */}
      <div className="relative isolate order-1 lg:order-2 hidden md:block w-full max-w-[500px] mx-auto aspect-[3/4] animate-in zoom-in-95 fade-in duration-1000 delay-200">
        {/* Decorative backdrop blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-brand-rose/80 rounded-full blur-3xl -z-10" />
        
        {/* Carousel Container */}
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-900/10 border-[6px] border-white z-10 group bg-slate-900">
          
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out transform ${
                index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img 
                src={slide.url} 
                alt={slide.label} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
              
              {/* Text Content */}
              <div className={`absolute bottom-0 left-0 p-8 w-full transition-all duration-700 delay-100 transform ${
                index === current ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 shadow-lg">
                  {slide.label}
                </div>
                <div className="text-3xl font-serif font-medium italic text-white leading-none drop-shadow-md">
                  {slide.desc}
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-brand-red hover:scale-110 transition-all duration-300 z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-brand-red hover:scale-110 transition-all duration-300 z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-5 right-8 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrent(idx); setIsAutoPlaying(false); }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === current ? 'bg-brand-red w-8' : 'bg-white/40 w-2 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating Host Badge */}
        <div className="absolute bottom-8 -right-8 z-30 bg-white p-4 rounded-2xl shadow-xl shadow-rose-900/10 border border-rose-100 flex items-center gap-3 max-w-[260px] hover:scale-105 transition-transform cursor-default animate-in slide-in-from-right-4 fade-in duration-1000 delay-500">
           <div className="w-12 h-12 rounded-full bg-brand-dark text-brand-yellow flex items-center justify-center font-bold text-sm shrink-0 border-2 border-brand-yellow shadow-md">
             JB
           </div>
           <div>
             <div className="text-[10px] uppercase tracking-widest text-brand-red font-bold mb-0.5">Your Host</div>
             <div className="text-base font-bold text-slate-900 leading-tight">Joanne Brown</div>
           </div>
        </div>
      </div>

    </section>
  );
};
