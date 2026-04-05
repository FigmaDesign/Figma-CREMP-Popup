import React from 'react';
import { data } from '../data';

interface TerritoryNetworkProps {
  isDesktop: boolean;
}

const TerritoryNetwork: React.FC<TerritoryNetworkProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? 'py-[0.5rem]' : 'px-[1rem] py-[0.75rem]'}>
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-[0.5rem] ${
          isDesktop ? 'text-[1rem]' : 'text-[0.9rem]'
        }`}
      >
        Geography & Territory
      </h3>

      {/* Territory details */}
      <div className={`grid gap-x-[1rem] mb-[1rem] ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {[
          { label: 'Preferred Cities', value: data.territoryAvailability.cities },
          { label: 'Primary Regions', value: data.territoryAvailability.regions },
          { label: 'Exclusivity', value: data.territoryAvailability.exclusive },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-[0.375rem] border-b border-[#e2e8f0] last:border-0"
          >
            <span className="text-[0.75rem] font-medium text-[#64748b]">{item.label}</span>
            <span className="text-[0.8rem] font-semibold text-[#1c2a44] text-right">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Network stats */}
      <div className={`grid gap-[0.375rem] mb-[1rem] ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'}`}>
        {[
          { label: 'Total Units', value: data.existingNetwork.totalUnits },
          { label: 'Franchise Units', value: data.existingNetwork.franchiseUnits },
          { label: 'Company Units', value: data.existingNetwork.companyUnits },
          { label: 'Cities', value: data.existingNetwork.cities },
        ].map((stat, i) => (
          <div key={i} className="px-[0.625rem] py-[0.5rem] rounded-[0.25rem] bg-[#f8fafc] border border-transparent hover:border-[#e2e8f0] transition-colors cursor-default">
            <span className="text-[0.65rem] font-medium text-[#64748b] block mb-[0.125rem] leading-none">
              {stat.label}
            </span>
            <span className="text-[0.875rem] font-semibold text-[#1c2a44] leading-tight block">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Expansion roadmap */}
      <div className="p-[0.625rem] rounded-[0.25rem] bg-[#f8fafc] border border-[#e2e8f0] border-l-[0.125rem] border-l-[#1c2a44] shadow-sm">
        <span className="text-[0.65rem] font-semibold text-[#64748b] block mb-[0.125rem] leading-none">
          Growth Roadmap
        </span>
        <p className="text-[0.75rem] font-medium text-[#1c2a44] m-0 leading-snug">
          {data.territoryAvailability.expansionPlans}
        </p>
      </div>
    </div>
  );
};

export default TerritoryNetwork;