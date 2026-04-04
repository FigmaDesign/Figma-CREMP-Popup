import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { data } from '../data';

interface USPSectionProps {
  isDesktop: boolean;
}

const USPSection: React.FC<USPSectionProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? '' : 'px-4 py-5'}>
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-3 ${
          isDesktop ? 'text-[1rem]' : 'text-[0.95rem]'
        }`}
      >
        Unique Selling Points
      </h3>

      <ul
        className={`list-none m-0 p-0 grid gap-2 ${
          isDesktop ? 'grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {data.businessOverview.usps.map((usp, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 p-3 rounded bg-[#f8fafc] border border-[#f1f5f9]"
          >
            <CheckCircleIcon
              sx={{ fontSize: '0.95rem', color: '#c9a34e', mt: '0.125rem', flexShrink: 0 }}
            />
            <span className="text-[0.875rem] font-medium text-[#4b5563] leading-[1.5]">
              {usp}
            </span>
          </li>
        ))}
      </ul>

      {/* Business model concept tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {data.conceptTags.map(tag => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-[#e2e8f0] text-[0.75rem] font-semibold text-[#1c2a44]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a34e] shrink-0" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default USPSection;
