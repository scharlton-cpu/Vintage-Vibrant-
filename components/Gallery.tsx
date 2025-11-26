import React from 'react';
import { Camera, MapPin, Wine, Anchor, Music, Sun } from 'lucide-react';

const galleryImages = [
  {
    url: "https://virginvoyages.imgix.net/dam/jcr:551b2f37-0b7e-493c-ac8b-f68d3e548908/IMG-BEACHCLUB-2022-drone-021-extended%201600%C3%97900.png", // Beach Club vibe
    title: "Bimini Beach Club",
    subtitle: "Private island luxury",
    icon: <Sun size={18} />,
    className: "md:col-span-2 md:row-span-2",
    category: "Destination"
  },
  {
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop", // Elegant cocktail/dining
    title: "The Wake",
    subtitle: "Glamorous steak & seafood",
    icon: <Wine size={18} />,
    className: "md:col-span-1 md:row-span-1",
    category: "Dining"
  },
  {
    url: "https://virgin.3dseatmapvr.com/SCARLET_LADY/img/spaces/acuatic_club.jpg", // Pool
    title: "Aquatic Club",
    subtitle: "Poolside relaxation",
    icon: <Anchor size={18} />,
    className: "md:col-span-1 md:row-span-1",
    category: "Onboard"
  },
  {
    url: "https://virginvoyages.imgix.net/dam/jcr:ab1224d0-4bee-4d5d-a141-394e65683286/IMG-VAL-2023-wellness-spa-pools-mudroom-sauna-saltroom-31935-1600x1600.jpg", // Spa
    title: "Redemption Spa",
    subtitle: "Mud room & thermal suite",
    icon: <MapPin size={18} />,
    className: "md:col-span-1 md:row-span-1",
    category: "Wellness"
  },
  {
    url: "https://virginvoyages.imgix.net/dam/jcr:e236d18e-9aca-4205-83d7-56ec06616887/DiscoCircus_504x424.jpg", // Red party crowd
    title: "Disco Circus",
    subtitle: "Immersive entertainment",
    icon: <Music size={18} />,
    className: "md:col-span-1 md:row-span-1",
    category: "Entertainment"
  },
  {
     url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop", // Nightclub
     title: "The Manor",
     subtitle: "Nightclub vibes",
     icon: <Camera size={18} />,
     className: "md:col-span-1 md:row-span-1",
     category: "Venue"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="scroll-mt-24">
      <div className="mb-12 max-w-2xl">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-3 pl-1">Visuals</div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Glimpse the <span className="italic text-brand-red">Experience</span>
        </h2>
        <p className="text-slate-600 font-light text-lg">
          From the turquoise waters of Bimini to the neon lights of the Manor, immerse yourself in the visual journey that awaits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
        {galleryImages.map((img, i) => (
          <div 
            key={i} 
            className={`group relative rounded-[2rem] overflow-hidden shadow-lg shadow-rose-900/5 cursor-pointer ${img.className}`}
          >
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            
            <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            <div className="absolute bottom-0 left-0 p-6 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-brand-yellow mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {img.icon}
                    <span className="text-[10px] uppercase tracking-widest font-bold">{img.category}</span>
                </div>
                <h3 className="text-white font-serif font-bold text-2xl leading-tight mb-1">{img.title}</h3>
                <p className="text-slate-300 text-sm font-medium">{img.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
