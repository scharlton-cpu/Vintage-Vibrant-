import React from 'react';
import { BedDouble, Waves, Sun, Check } from 'lucide-react';

const cabins = [
  {
    name: "The Insider",
    desc: "Cozy, quiet, and smartly designed. The perfect retreat if you plan to spend most of your time exploring the ship or partying till dawn.",
    price: "$1,850",
    features: ["Roomy Rainshower", "Mood Lighting", "Transformational Bed"],
    image: "https://virginvoyages.imgix.net/dam/jcr:2f7288d1-b90f-42cd-b4aa-0ee75cc57aeb/IMG-SCL-2021-CAB-the-insider-interior-bed-configuration-day-UNCROPPED.JPG", // Modern cozy interior
    icon: <BedDouble />
  },
  {
    name: "Sea View",
    desc: "A window to the world. Watch the waves roll by from the comfort of your personal sanctuary. Perfect for ocean gazers.",
    price: "$2,150",
    features: ["Porthole Window", "Roomy Rainshower", "Mood Lighting"],
    image: "https://virginvoyages.imgix.net/dam/jcr:8ff2ac61-7ace-4363-803b-659173334fd4/IMG-SCL-2021-CAB-the-sea-view-interior-bed-configuration-day-UNCROPPED.JPG", // Ocean view window
    icon: <Waves />
  },
  {
    name: "Sea Terrace",
    desc: "The most popular choice. Step out onto your private balcony and relax in the iconic red hammock as the world goes by.",
    price: "$2,450",
    features: ["Private Balcony + Hammock", "Roomy Rainshower", "Configurable Layout"],
    popular: true,
    image: "https://virginvoyages.imgix.net/dam/jcr:09235b3e-54f1-4b3a-ac01-dfa457419d55/IMG-SCL-2021-CAB-sea-terrace-interior-bed-configuration-day-UNCROPPED.JPG", // Balcony/Resort vibe
    icon: <Sun />
  }
];

export const Cabins: React.FC = () => {
  return (
    <section id="cabins" className="scroll-mt-24">
       <div className="mb-12 max-w-2xl">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-3 pl-1">Accommodation</div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Rest Your Head</h2>
        <p className="text-slate-500 text-sm font-medium">
          Modern, yacht-inspired cabins designed with intelligent mood lighting and the signature Virgin red hammocks.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cabins.map((cabin, i) => (
          <div 
            key={i} 
            className={`flex flex-col rounded-[2rem] border overflow-hidden transition-all duration-300 group ${
                cabin.popular 
                ? 'bg-slate-900 text-white shadow-2xl shadow-brand-red/20 scale-[1.02] border-brand-red z-10' 
                : 'bg-white text-slate-900 border-slate-200 hover:shadow-xl hover:shadow-rose-100/40 hover:border-brand-red/30 hover:-translate-y-1'
            }`}
          >
            {/* Cabin Image - Placed above description */}
            <div className="h-56 relative overflow-hidden shrink-0">
                <img 
                  src={cabin.image} 
                  alt={cabin.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                
                {cabin.popular && (
                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                        Most Popular
                    </div>
                )}
                
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <div className={`p-2 rounded-xl backdrop-blur-md ${cabin.popular ? 'bg-brand-red/80' : 'bg-white/20'}`}>
                        {React.cloneElement(cabin.icon as React.ReactElement<any>, { size: 20, strokeWidth: 1.5 })}
                    </div>
                    <span className="font-serif font-bold text-lg">{cabin.name}</span>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
                <div className={`text-3xl font-serif font-medium mb-4 flex items-baseline ${cabin.popular ? 'text-white' : 'text-slate-900'}`}>
                    {cabin.price}
                    <span className={`text-sm font-sans font-medium ml-1 ${cabin.popular ? 'text-slate-400' : 'text-slate-500'}`}>/pp</span>
                </div>
                
                <p className={`text-sm mb-8 leading-relaxed font-medium ${cabin.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {cabin.desc}
                </p>
                
                <div className={`mt-auto pt-6 border-t ${cabin.popular ? 'border-slate-800' : 'border-slate-100'}`}>
                    <ul className="space-y-3">
                        {cabin.features.map((f, j) => (
                        <li key={j} className={`text-xs font-bold uppercase tracking-wide flex items-center gap-2.5 ${cabin.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${cabin.popular ? 'bg-brand-red/20 text-brand-red' : 'bg-slate-100 text-slate-400'}`}>
                                <Check size={10} strokeWidth={3} />
                            </div>
                            {f}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
