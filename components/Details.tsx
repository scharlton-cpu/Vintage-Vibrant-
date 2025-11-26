import React from 'react';
import { Check, Users, GlassWater, Wifi, Utensils, Star } from 'lucide-react';

export const Details: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="max-w-3xl mb-14">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-3 pl-1">Trip Experience</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight leading-none">
          A celebration of <span className="italic text-brand-red font-medium">life, laughter,</span> and legacy.
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-light">
          Set sail from sunny Miami to the vibrant shores of Puerto Plata and Virgin Voyages’ private beach club in Bimini. Indulge in world-class dining, curated onboard experiences, and lively entertainment in a luxurious adults-only setting designed for joy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* Card 1 */}
        <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-lg shadow-rose-100/50 hover:shadow-xl hover:shadow-rose-100/80 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-[100px] -z-0 group-hover:scale-110 transition-transform duration-500" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <Star size={28} fill="currentColor" className="opacity-100" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">The Vibe</h3>
            <p className="text-slate-600 text-base mb-6 leading-relaxed">
              Whether you’re dancing at sunset, relaxing on the beach, or sharing laughter over cocktails, this is more than a cruise—it’s a celebration of timeless memories.
            </p>
            <ul className="space-y-4">
              {[
                "Hosted birthday experiences for 70th & 80th milestones.",
                "Atmosphere of joy, connection, and togetherness.",
                "Time to reconnect, unwind, and truly celebrate."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-slate-700 font-medium">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-brand-red stroke-[3]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-lg shadow-rose-100/50 hover:shadow-xl hover:shadow-rose-100/80 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100px] -z-0 group-hover:scale-110 transition-transform duration-500" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <Users size={28} fill="currentColor" className="opacity-100" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Who is this for?</h3>
            <p className="text-slate-600 text-base mb-6 leading-relaxed">
              Designed for travelers craving curated experiences who know that luxury is best savored with style and good company.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Adults-only 18+", "Hosted Group", "Milestones"].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-xl bg-slate-50 text-slate-700 text-xs font-bold border border-slate-100 hover:text-brand-red transition-colors uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inclusions Strip */}
      <div id="included" className="border-t border-slate-200 pt-16">
         <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-10 text-center">Always Included Luxury</div>
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
                { icon: <Utensils />, title: "All Food", desc: "Refined dining to casual eats" },
                { icon: <GlassWater />, title: "Essential Drinks", desc: "Water, coffee, tea, juices" },
                { icon: <Wifi />, title: "WiFi", desc: "Browse, post, & connect" },
                { icon: <Users />, title: "Tips", desc: "Gratuities taken care of" },
            ].map((inc, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                        {React.cloneElement(inc.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.5 })}
                    </div>
                    <div className="font-bold text-slate-900 text-lg mb-1 font-serif">{inc.title}</div>
                    <div className="text-sm text-slate-500 font-medium">{inc.desc}</div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};