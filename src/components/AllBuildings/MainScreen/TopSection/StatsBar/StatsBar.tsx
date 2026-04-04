import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { stats } from '../data';

interface StatsBarProps {
  expanded: boolean;
  onToggle: () => void;
}

const StatsBar: React.FC<StatsBarProps> = ({ expanded, onToggle }) => {
  return (
    <div
      className={`flex justify-around items-center py-2 bg-white shadow-xl shadow-[#1c2a44]/10 transition-all duration-500 ease-out ${expanded ? 'rounded-none shadow-none' : 'rounded-none'
        }`}
    >
      {stats.map((stat, idx) => (
        <React.Fragment key={idx}>
          <div className="flex flex-col items-center flex-1 space-y-1">
            {stat.icon}
            <span className="text-[0.75rem] font-bold text-[#1c2a44] leading-none">
              {stat.value}
            </span>
            <span className="text-[0.55rem] text-[#1c2a44]/60 tracking-[0.15em] font-medium leading-none">
              {stat.label}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-[#1c2a44]/15 to-transparent flex-shrink-0" />
        </React.Fragment>
      ))}

      {/* DISTINCT INTERACTIVE BUTTON */}
      <div className="flex items-center justify-center flex-1 px-1">
        <div
          className="flex flex-row items-center justify-center gap-1 w-full max-w-[85px] cursor-pointer rounded-md bg-[#1c2a44] py-1.5 transition-all duration-300 hover:bg-[#111A2B] hover:shadow-md shadow-[#1c2a44]/20 group"
          onClick={onToggle}
        >
          <span className="text-[0.55rem] font-bold text-white tracking-[0.1em]  leading-none mt-[1px]">
            {expanded ? 'View Less' : 'View More'}
          </span>
          <ExpandMoreIcon
            sx={{ fontSize: 16 }}
            className={`text-[#D4AF37] transition-transform duration-500 ease-out group-hover:scale-110 ${expanded ? 'rotate-180' : 'rotate-0'
              }`}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsBar;