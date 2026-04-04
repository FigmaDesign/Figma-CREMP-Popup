import React from 'react';

interface HighlightItemProps {
  value: string;
  unit?: string;
  label: string;
  isGold?: boolean;
}

const HighlightItem: React.FC<HighlightItemProps> = ({ value, unit, label, isGold }) => (
  <div className="flex flex-1 flex-col items-center gap-1 p-1">
    <div className="flex items-baseline gap-1">
      <span className={`text-[0.9rem] font-bold tracking-tight ${isGold ? 'text-[#D4AF37]' : 'text-[#1c2a44]'}`}>
        {value}
      </span>
      {unit && (
        <span className="text-[0.6rem] font-bold text-[#1c2a44]/60 lowercase">
          {unit}
        </span>
      )}
    </div>
    <span className="text-[0.55rem] font-bold text-[#1c2a44]/50 tracking-[0.1em] leading-none">
      {label}
    </span>
  </div>
);

const LandHighlights: React.FC = () => {
  return (
    <div className="p-1">
      <div className="flex items-center justify-around bg-white rounded-md border border-[#1c2a44]/10 shadow-[#1c2a44]/5 p-1">
        <HighlightItem value="2.5" unit="Acres" label="Plot Size" />

        <div className="h-7 w-[1px] bg-gradient-to-b from-transparent via-[#1c2a44]/15 to-transparent shrink-0" />

        <HighlightItem value="₹ 2.5 L" label="Rent/Month" />

        <div className="h-7 w-[1px] bg-gradient-to-b from-transparent via-[#1c2a44]/15 to-transparent shrink-0" />

        <HighlightItem value="Commercial" label="Zoning" isGold />
      </div>
    </div>
  );
};

export default LandHighlights;
