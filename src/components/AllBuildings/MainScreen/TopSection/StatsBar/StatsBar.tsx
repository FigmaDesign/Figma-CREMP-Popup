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
      className={`flex justify-around items-center p-1 bg-white shadow-xl shadow-[#1c2a44]/10 transition-all duration-500 ease-out ${
        expanded ? 'rounded-none shadow-none' : 'rounded-none'
      }`}
    >
      {stats.map((stat, idx) => (
        <React.Fragment key={idx}>
          <div className="flex flex-col items-center flex-1 space-y-1">
            {stat.icon}
            <span className="text-[0.75rem] font-bold text-[#1c2a44] leading-none">
              {stat.value}
            </span>
            <span className="text-[0.55rem] text-[#1c2a44]/60  tracking-[0.15em] font-medium leading-none">
              {stat.label}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-[#1c2a44]/15 to-transparent flex-shrink-0" />
        </React.Fragment>
      ))}

      <div
        className="flex flex-col items-center flex-1 cursor-pointer rounded-[4px] p-1 space-y-1 transition-colors duration-500 hover:bg-[#1c2a44]/5 group"
        onClick={onToggle}
      >
        <ExpandMoreIcon
          sx={{ fontSize: 18 }}
          className={`text-[#D4AF37] transition-transform duration-500 ease-out group-hover:scale-110 ${
            expanded ? 'rotate-180' : 'rotate-0'
          }`}
        />
        <span className="text-[0.55rem] font-semibold text-[#1c2a44]  tracking-[0.15em] leading-none">
          {expanded ? 'View Less' : 'View More'}
        </span>
      </div>
    </div>
  );
};

export default StatsBar;