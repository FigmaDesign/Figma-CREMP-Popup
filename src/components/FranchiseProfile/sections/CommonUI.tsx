import React from 'react';

interface SectionHeadingProps {
  title: string;
  isDesktop?: boolean;
}

// ─── Section Heading ───────────────────────────────────────────────────────────
export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, isDesktop = false }) => (
  <div className={`flex items-center gap-2 ${isDesktop ? 'pb-2' : 'pb-1'}`}>
    {/* Accent Indicator */}
    <div className={`${isDesktop ? 'w-1.5 h-6' : 'w-1 h-5'} bg-[#1c2a44] rounded-sm shrink-0`} />
    <h3 className={`${isDesktop ? 'text-[1.25rem]' : 'text-[1rem]'} font-extrabold text-[#1c2a44] tracking-tight m-0`}>
      {title}
    </h3>
  </div>
);


interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  isDesktop?: boolean;
}

// ─── Info Row ──────────────────────────────────────────────────────────────────
export const InfoRow: React.FC<InfoRowProps> = ({ label, value, isDesktop = false }) => (
  <div className={`flex justify-between items-center ${isDesktop ? 'min-h-[3rem] py-2' : 'min-h-[2.5rem] py-1.5'} border-b border-[#f1f5f9] last:border-0`}>
    <span className={`${isDesktop ? 'text-[0.875rem]' : 'text-[0.75rem]'} font-bold text-[#1c2a44]/60`}>
      {label}
    </span>
    <span className={`${isDesktop ? 'text-[1rem]' : 'text-[0.875rem]'} font-extrabold text-[#1c2a44] text-right ml-4`}>
      {value}
    </span>
  </div>
);