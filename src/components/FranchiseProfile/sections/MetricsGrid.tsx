import React from 'react';
import { data } from '../data';

interface MetricsGridProps {
  isDesktop: boolean;
}

const metrics = [
  { value: data.highlights.investmentRange, label: 'Investment Range' },
  { value: data.highlights.franchiseFee, label: 'Franchise Fee' },
  { value: `${data.existingNetwork.totalUnits}+`, label: 'Total Outlets', gold: true },
  { value: `${data.existingNetwork.cities} `, label: 'Cities Present' },
];

const MetricsGrid: React.FC<MetricsGridProps> = ({ isDesktop }) => {
  return (
    <div className="w-full bg-[#0f1f3d] flex justify-center border-t border-white/5">
      <div 
        className={`w-full max-w-[80rem] grid ${isDesktop ? 'grid-cols-4 py-[0.5rem]' : 'grid-cols-2 py-[0.25rem]'}`}
      >
        {metrics.map((metric, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center text-center ${
              isDesktop ? 'py-[1.25rem]' : 'py-[0.875rem]'
            } ${
              /* Desktop: Borders on first 3 items */
              isDesktop && i < 3 ? 'border-r border-white/10' : ''
            } ${
              /* Mobile: Border on 1st and 3rd item */
              !isDesktop && i % 2 === 0 ? 'border-r border-white/10' : ''
            } ${
              /* Mobile: Bottom border on top row */
              !isDesktop && i < 2 ? 'border-b border-white/10' : ''
            }`}
          >
            <span
              className={`font-bold leading-none tracking-tight ${metric.gold ? 'text-[#c9a34e]' : 'text-white'} ${
                isDesktop ? 'text-[1.375rem]' : 'text-[1.125rem]'
              }`}
            >
              {metric.value}
            </span>
            <span
              className={`text-white/60 mt-[0.375rem] leading-none font-medium ${
                isDesktop ? 'text-[0.875rem]' : 'text-[0.75rem]'
              }`}
            >
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;