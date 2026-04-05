import React from 'react';
import { data } from '../data';

interface BusinessOverviewProps {
  isDesktop: boolean;
}

const BusinessOverview: React.FC<BusinessOverviewProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? 'py-[0.5rem]' : 'px-[1rem] py-[0.75rem]'}>
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-[0.5rem] ${
          isDesktop ? 'text-[1rem]' : 'text-[0.9rem]'
        }`}
      >
        Overview
      </h3>

      <p className={`text-[#475569] font-medium leading-[1.6] m-0 max-w-[65ch] ${
        isDesktop ? 'text-[0.875rem]' : 'text-[0.8rem]'
      }`}>
        {data.businessOverview.description}
      </p>

      {/* Business Model Callout */}
      <div className="mt-[1rem] p-[0.75rem] rounded-[0.25rem] bg-[#f8fafc] border border-[#e2e8f0] border-l-[0.125rem] border-l-[#c9a34e] shadow-sm">
        <span className="text-[0.85rem] text-[#64748b] font-bold block mb-[0.25rem]  tracking-wider">
          Business Model
        </span>
        <p className={`text-[#1c2a44] font-medium leading-relaxed m-0 ${
          isDesktop ? 'text-[0.875rem]' : 'text-[0.8rem]'
        }`}>
          {data.businessOverview.modelSummary}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-[0.5rem] mt-[1rem]">
        {[
          data.franchiseModel.modelType,
          data.franchiseModel.unitType,
          `Est. ${data.basicInfo.establishedYear}`,
        ].map(tag => (
          <span
            key={tag}
            className="px-[0.625rem] py-[0.375rem] rounded-[0.25rem] bg-white border border-[#e2e8f0] text-[0.75rem] font-semibold text-[#1c2a44] shadow-sm hover:border-[#c9a34e]/40 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BusinessOverview;