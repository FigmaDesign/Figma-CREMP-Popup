import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { data } from '../data';

interface USPSectionProps {
  isDesktop: boolean;
}

const USPSection: React.FC<USPSectionProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? 'py-[0.5rem]' : 'px-[1rem] py-[0.75rem]'}>
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-[0.5rem] ${
          isDesktop ? 'text-[1rem]' : 'text-[0.9rem]'
        }`}
      >
        Unique Selling Points
      </h3>

      <ul
        className={`list-none m-0 p-0 grid gap-[0.375rem] ${
          isDesktop ? 'grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {data.businessOverview.usps.map((usp, i) => (
          <li
            key={i}
            className="flex items-start gap-[0.5rem] p-[0.625rem] rounded-[0.25rem] bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-colors cursor-default"
          >
            <CheckCircleIcon
              sx={{ fontSize: '1rem', color: '#c9a34e', mt: '0.0625rem', flexShrink: 0 }}
            />
            <span className="text-[0.8rem] font-medium text-[#4b5563] leading-snug">
              {usp}
            </span>
          </li>
        ))}
      </ul>

      {/* Business model concept tags */}
      <div className="flex flex-wrap gap-[0.375rem] mt-[0.75rem]">
        {data.conceptTags.map(tag => (
          <span
            key={tag}
            className="inline-flex items-center gap-[0.375rem] px-[0.5rem] py-[0.25rem] rounded-[0.25rem] bg-white border border-[#e2e8f0] text-[0.7rem] font-semibold text-[#1c2a44] shadow-sm hover:border-[#c9a34e]/40 transition-colors"
          >
            <span className="w-[0.375rem] h-[0.375rem] rounded-full bg-[#c9a34e] shrink-0" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default USPSection;