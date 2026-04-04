import React, { useState } from 'react';
import { CheckCircle, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const allTags = [
  'Apparel & Fashion', 'Luxury Watches', 'Electronics', 'F&B', 'Salon / Spa', 'Pharmacy',
  'IT / Startup', 'Coworking', 'Corporate',
  'Art Gallery', 'Premium Cafe', 'Clinic', 'Showroom',
];

const SuitedFor: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const tagsToShow = expanded ? allTags : allTags.slice(0, 4);

  return (
    <div className="p-0 w-full">
      <div className="bg-white rounded-none flex flex-col">
        <div className="px-4 pt-1 pb-[2px] flex items-center gap-1.5 mb-1">
          <div className="w-1 h-4 bg-[#1c2a44] rounded-[2px]" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight ">
            Suited For
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5 px-4 pb-1">
          {tagsToShow.map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 px-1.5 py-[3px] bg-[#f8fafc] rounded-[4px] hover:border-[#C69C44]/40 hover:bg-white transition-all duration-200 cursor-default group"
            >
              <CheckCircle
                sx={{ fontSize: 13 }}
                className="text-[#C69C44] opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[0.65rem] font-bold text-[#1c2a44]/70 group-hover:text-[#1c2a44] tracking-tight whitespace-nowrap transition-colors">
                {tag}
              </span>
            </div>
          ))}

          {allTags.length > 4 && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="flex items-center gap-0.5 px-1.5 py-[3px] rounded-[4px] text-[#1c2a44] hover:bg-[#f1f5f9] transition-colors outline-none"
            >
              <span className="text-[0.65rem] font-bold tracking-tight whitespace-nowrap">
                {expanded ? 'View Less' : 'View More'}
              </span>
              {expanded ? (
                <KeyboardArrowUp sx={{ fontSize: 14 }} />
              ) : (
                <KeyboardArrowDown sx={{ fontSize: 14 }} />
              )}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default SuitedFor;