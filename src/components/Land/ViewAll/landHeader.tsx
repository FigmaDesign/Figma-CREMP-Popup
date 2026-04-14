import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface LandHeaderProps {
  onBack?: () => void;
}

const LandHeader: React.FC<LandHeaderProps> = ({ onBack }) => {
  return (
    <div className="p-1">
      <div className="relative w-full h-[260px] overflow-hidden rounded-md border border-[#1c2a44]/10 shadow-md group">

        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
          alt="Land Plot Hero, Hyderabad"
          className="w-full h-full object-cover block transition-transform duration-1000 group-hover:scale-105"
        />

        <button
          onClick={onBack}
          className="absolute top-2 left-2 w-7 h-7 flex items-center justify-center rounded-[4px] bg-gradient-to-r from-[#bf953f]/80 via-[#d4af37]/80 to-[#b38728]/80 backdrop-blur-md border border-white/20 text-white cursor-pointer transition-all hover:from-[#bf953f] hover:via-[#d4af37] hover:to-[#b38728] shadow-[0_4px_10px_rgba(212,175,55,0.2)] z-20"
          aria-label="Go Back"
        >
          <ArrowBackIcon sx={{ fontSize: 16, color: 'white' }} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-[#1A376C]/60 backdrop-blur-md flex items-center py-2 px-1 text-white z-10 border-t border-white/10 rounded-b-md">

          <div className="flex-1 flex flex-col items-center border-r border-white/10">
            <div className="flex items-baseline">
              <span className="text-[1rem] font-bold leading-none tracking-tight drop-shadow-md">2.5</span>
              <span className="text-[0.5rem] font-semibold opacity-90 ml-0.5">Acres</span>
            </div>
            <span className="text-[0.55rem] font-medium opacity-90 leading-none mt-0.5">Plot Size</span>
          </div>

          <div className="flex-1 flex flex-col items-center border-r border-white/10">
            <span className="text-[1rem] font-bold leading-none tracking-tight drop-shadow-md">₹ 2.5 Cr</span>
            <span className="text-[0.55rem] font-medium opacity-90 leading-none mt-0.5">Sale Value</span>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <span className="text-[1rem] font-bold leading-none tracking-tight text-[#D4AF37] drop-shadow-md">Commercial</span>
            <span className="text-[0.55rem] font-medium opacity-90 leading-none mt-0.5">Zoning</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandHeader;
