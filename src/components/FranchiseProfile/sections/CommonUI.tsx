import React from 'react';

interface SectionHeadingProps {
  title: string;
  isDesktop?: boolean;
}

// ─── Section Heading ───────────────────────────────────────────────────────────
export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, isDesktop = false }) => (
  <div className={`flex items-center gap-[0.5rem] ${isDesktop ? 'mb-[0.75rem]' : 'mb-[0.5rem]'}`}>
    {/* Accent Indicator */}
    <div className={`${isDesktop ? 'w-[0.25rem] h-[1.25rem]' : 'w-[0.25rem] h-[1.125rem]'} bg-[#1c2a44] rounded-[0.125rem] shrink-0`} />
    <h3 className={`${isDesktop ? 'text-[1.125rem]' : 'text-[1rem]'} font-semibold text-[#1c2a44] tracking-tight m-0 leading-none`}>
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
  <div className={`flex justify-between items-center ${isDesktop ? 'py-[0.625rem]' : 'py-[0.5rem]'} border-b border-[#e2e8f0] last:border-0`}>
    <span className={`${isDesktop ? 'text-[0.875rem]' : 'text-[0.75rem]'} font-medium text-[#64748b]`}>
      {label}
    </span>
    <span className={`${isDesktop ? 'text-[0.875rem]' : 'text-[0.8rem]'} font-semibold text-[#1c2a44] text-right ml-[1rem]`}>
      {value}
    </span>
  </div>
);