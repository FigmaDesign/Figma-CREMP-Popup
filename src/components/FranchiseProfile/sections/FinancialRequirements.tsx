import React from 'react';
import { data } from '../data';

interface FinancialRequirementsProps {
  isDesktop: boolean;
}

const FinancialRequirements: React.FC<FinancialRequirementsProps> = ({ isDesktop }) => {
  return (
    <div className={isDesktop ? '' : 'px-4 py-5'}>
      <h3
        className={`font-semibold text-[#1c2a44] m-0 mb-4 ${
          isDesktop ? 'text-[1rem]' : 'text-[0.95rem]'
        }`}
      >
        Financial Requirements
      </h3>

      {/* Headline cards */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {[
          { label: 'Investment Range', value: data.highlights.investmentRange },
          { label: 'Franchise Fee', value: data.highlights.franchiseFee },
        ].map((item, i) => (
          <div key={i} className="px-4 py-3 rounded bg-[#f8fafc] border border-[#e2e8f0]">
            <span className="text-[0.68rem] font-semibold text-[#6b7280] block mb-1">{item.label}</span>
            <span className="text-[1.0625rem] font-semibold text-[#1c2a44]">{item.value}</span>
          </div>
        ))}
      </div>

      <h4 className="text-[0.875rem] font-semibold text-[#1c2a44] m-0 mb-3">Cost Breakdown</h4>

      <div className={`grid gap-x-8 ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {data.investmentDetails.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2.5 border-b border-[#f1f5f9] last:border-0"
          >
            <span className="text-[0.8rem] font-medium text-[#6b7280]">{item.item}</span>
            <span className="text-[0.875rem] font-semibold text-[#1c2a44]">{item.amount}</span>
          </div>
        ))}
      </div>

      {/* Total row */}
      <div className="mt-4 flex items-center justify-between px-4 py-3 bg-[#0f1f3d] rounded">
        <span className="text-[0.75rem] font-medium text-white/60">Estimated Total</span>
        <span className="text-[0.95rem] font-semibold text-white">{data.totalInvestmentRange}</span>
      </div>
    </div>
  );
};

export default FinancialRequirements;
