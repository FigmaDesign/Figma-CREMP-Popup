import React from 'react';

interface SummaryItem {
  label: string;
  value: string;
  highlight?: boolean;
}

const summaryItems: SummaryItem[] = [
  { label: 'Sale price', value: '₹ 1,250,000' },
  { label: 'Monthly income', value: '₹ 80,000' },
  { label: 'Net yield', value: '8%', highlight: true },
  { label: 'Stamp Duty & Reg.', value: 'Applicable' },
];

const InvestmentSummary: React.FC = () => {
  return (
    <div className="p-0 w-full">
      <div className="bg-white rounded-none flex flex-col">

        <div className="px-4 pt-1 pb-[2px] flex items-center gap-1.5 mb-1">
          <div className="w-1 h-4 bg-[#1c2a44] rounded-[2px]" />
          <h3 className="text-[0.85rem] font-extrabold text-[#1c2a44] tracking-tight ">
            Investment Summary
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-1.5 px-4 pb-2">
          {summaryItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center px-2 py-1.5 rounded-[4px] cursor-default transition-all duration-200 ${item.highlight
                ? 'hover:border-[#C89B3C]/30 bg-[#FFFCF5] shadow-[0_1px_2px_rgba(200,155,60,0.05)]'
                : ' hover:bg-white hover:hover:border-[#1c2a44]/10 bg-[#f8fafc]'
                }`}
            >
              <span className="text-[0.55rem] font-bold text-[#6B7280] tracking-wider  mb-0.5 leading-tight">
                {item.label}
              </span>
              <span
                className={`text-[0.85rem] font-extrabold tracking-tight leading-none ${item.highlight ? 'text-[#C89B3C]' : 'text-[#1c2a44]'
                  }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InvestmentSummary;