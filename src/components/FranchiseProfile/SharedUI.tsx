import React from 'react';

export const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-[6px] border border-[#d9dde3] overflow-hidden shadow-[0_1px_4px_rgba(15,31,61,0.06),0_0_1px_rgba(15,31,61,0.04)] ${className}`}>
    <div className="w-full h-[3px] bg-gradient-to-r from-[#0f1f3d] via-[#1f3b73] to-[#c9a34e]" />
    <div className="px-[16px] py-[12px] flex flex-col gap-[12px]">
      {children}
    </div>
  </div>
);

export const SectionTitle = ({ title, icon, isDesktop }: { title: string, icon?: React.ReactNode, isDesktop?: boolean }) => (
  <div className="flex items-center gap-[6px] pb-[8px] border-b border-[#eef0f3]">
    {icon && <span className="flex items-center text-[#c9a34e]" style={{ fontSize: 15 }}>{icon}</span>}
    <h2 className={`text-[#0f1f3d] font-semibold m-0 leading-none ${isDesktop ? 'text-[13px]' : 'text-[12px]'}`}>{title}</h2>
  </div>
);

export const LabelValueRow = ({ label, value }: { label: string, value: string | React.ReactNode }) => (
  <div className="flex justify-between items-center min-h-[28px] border-b border-[#f5f6f8] last:border-0">
    <span className="text-[#6b7280] text-[12px] font-normal">{label}</span>
    <span className="text-[#0f1f3d] text-[12px] font-semibold text-right ml-[8px]">{value}</span>
  </div>
);

export const Pill = ({ text }: { text: string }) => (
  <span className="inline-flex items-center h-[22px] px-[8px] bg-[#f5f6f8] border border-[#d9dde3] text-[#c9a34e] text-[10px] font-semibold rounded-[4px] whitespace-nowrap leading-none">
    {text}
  </span>
);
