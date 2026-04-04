import React from 'react';
import { data } from '../data';

interface MetricsGridProps {
  isDesktop: boolean;
}

const metrics = [
  { value: data.highlights.investmentRange, label: 'Investment Range' },
  { value: data.highlights.franchiseFee, label: 'Franchise Fee' },
  { value: `${data.existingNetwork.totalUnits}+`, label: 'Total Outlets', gold: true },
  { value: data.existingNetwork.cities, label: 'Cities Present' },
];

const MetricsGrid: React.FC<MetricsGridProps> = ({ isDesktop }) => {
  return (
    <div className={`grid ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'} bg-[#0f1f3d] border-b border-white/10`}>
      {metrics.map((metric, i) => (
        <div
          key={i}
          className={`flex flex-col items-center justify-center text-center ${
            isDesktop ? 'py-3 px-4' : 'py-2.5 px-3'
          } ${
            i < metrics.length - 1 ? 'border-r border-white/10' : ''
          } ${
            !isDesktop && i === 0 ? 'border-r border-white/10' : ''
          } ${
            !isDesktop && i < 2 ? 'border-b border-white/10' : ''
          }`}
        >
          <span
            className={`font-semibold leading-none ${metric.gold ? 'text-[#c9a34e]' : 'text-white'} ${
              isDesktop ? 'text-[1.0625rem]' : 'text-[0.9375rem]'
            }`}
          >
            {metric.value}
          </span>
          <span
            className={`text-white/50 mt-1 leading-none font-medium ${
              isDesktop ? 'text-[0.7rem]' : 'text-[0.65rem]'
            }`}
          >
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;
