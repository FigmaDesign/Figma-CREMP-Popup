import React from 'react';
import { data } from '../data';

interface BusinessOverviewProps {
  isDesktop: boolean;
}

const BusinessOverview: React.FC<BusinessOverviewProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? '' : 'px-4 py-5'}>
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-3 ${
          isDesktop ? 'text-[1rem]' : 'text-[0.95rem]'
        }`}
      >
        Overview
      </h3>

      <p className="text-[0.9rem] text-[#4b5563] font-medium leading-[1.65] m-0 max-w-[55ch]">
        {data.businessOverview.description}
      </p>

      <div className="mt-4 px-3.5 py-3 rounded bg-[#f8fafc] border-l-2 border-l-[#1c2a44] border border-[#f1f5f9]">
        <span className="text-[0.7rem] text-[#1c2a44]/50 font-semibold block mb-1">
          Business Model
        </span>
        <p className="text-[0.875rem] text-[#1c2a44] font-medium leading-[1.6] m-0">
          {data.businessOverview.modelSummary}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {[
          data.franchiseModel.modelType,
          data.franchiseModel.unitType,
          `Est. ${data.basicInfo.establishedYear}`,
        ].map(tag => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded bg-[#eef0f3] border border-[#e2e8f0] text-[0.75rem] font-semibold text-[#1c2a44]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BusinessOverview;