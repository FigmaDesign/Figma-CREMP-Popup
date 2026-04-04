import React from 'react';
import { data } from '../data';

interface TerritoryNetworkProps {
  isDesktop: boolean;
}

const TerritoryNetwork: React.FC<TerritoryNetworkProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? '' : 'px-4 py-5'}>
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-4 ${
          isDesktop ? 'text-[1rem]' : 'text-[0.95rem]'
        }`}
      >
        Geography &amp; Territory
      </h3>

      {/* Territory details */}
      <div className={`grid gap-x-8 mb-5 ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {[
          { label: 'Preferred Cities', value: data.territoryAvailability.cities },
          { label: 'Primary Regions', value: data.territoryAvailability.regions },
          { label: 'Exclusivity', value: data.territoryAvailability.exclusive },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2.5 border-b border-[#f1f5f9] last:border-0"
          >
            <span className="text-[0.8rem] font-medium text-[#6b7280]">{item.label}</span>
            <span className="text-[0.875rem] font-semibold text-[#1c2a44]">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Network stats */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {[
          { label: 'Total Units', value: data.existingNetwork.totalUnits },
          { label: 'Franchise Units', value: data.existingNetwork.franchiseUnits },
          { label: 'Company Units', value: data.existingNetwork.companyUnits },
          { label: 'Cities', value: data.existingNetwork.cities },
        ].map((stat, i) => (
          <div key={i} className="px-3 py-2.5 rounded bg-[#f8fafc] border border-[#f1f5f9]">
            <span className="text-[0.68rem] font-medium text-[#6b7280] block mb-0.5">
              {stat.label}
            </span>
            <span className="text-[1rem] font-semibold text-[#1c2a44]">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Expansion roadmap */}
      <div className="px-3.5 py-3 rounded bg-[#f8fafc] border-l-2 border-l-[#1c2a44] border border-[#f1f5f9]">
        <span className="text-[0.68rem] font-semibold text-[#1c2a44]/50 block mb-1">
          Growth Roadmap
        </span>
        <p className="text-[0.8rem] font-medium text-[#1c2a44] m-0 leading-[1.5]">
          {data.territoryAvailability.expansionPlans}
        </p>
      </div>
    </div>
  );
};

export default TerritoryNetwork;
