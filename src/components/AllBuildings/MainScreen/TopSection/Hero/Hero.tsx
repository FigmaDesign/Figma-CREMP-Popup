import React from 'react';

interface HeroProps {
  expanded: boolean;
}

const Hero: React.FC<HeroProps> = ({ expanded }) => {
  return (
  <div
      className={`relative w-full h-[260px] overflow-hidden shadow-xl shadow-[#1c2a44]/10 transition-[border-radius] duration-500 ease-out group ${
        expanded ? 'rounded-t-none' : 'rounded-t-[4px]'
      }`}
    
    >
      <img
        src="./src/assets/building-hero.jpg"
        alt="Transcon Ramdev Plaza"
        className="w-full h-full object-cover block transform group-hover:scale-105 transition-transform duration-1000 ease-out"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1c2a44]/90 via-[#1c2a44]/20 to-transparent opacity-90" />

      <div className="absolute bottom-3 left-3 right-3 flex flex-col justify-end">
        <h2 className="text-[1.5rem] font-semibold text-white tracking-wide drop-shadow-lg leading-tight mb-1">
          XYZ Plaza
        </h2>
      </div>
    </div>
  );
};

export default Hero;