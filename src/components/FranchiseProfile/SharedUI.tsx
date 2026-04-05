import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isDesktop?: boolean;
}

export const Card = ({ children, className = "", isDesktop = false }: CardProps) => (
  <div className={`bg-white rounded-[0.25rem] border border-[#eef0f3] overflow-hidden shadow-sm ${className}`}>
    <div className="w-full h-[0.25rem] bg-gradient-to-r from-[#0f1f3d] via-[#1f3b73] to-[#c9a34e]" />
    <div className={`flex flex-col ${isDesktop ? 'p-[1.5rem] gap-[1.25rem]' : 'p-[0.125rem] gap-[0.25rem]'}`}>
      {children}
    </div>
  </div>
);

interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
  isDesktop?: boolean;
}

export const SectionTitle = ({ title, icon, isDesktop = false }: SectionTitleProps) => (
  <div className={`flex items-center gap-[0.25rem] border-b border-[#eef0f3] ${isDesktop ? 'pb-[0.75rem]' : 'pb-[0.125rem]'}`}>
    {icon && (
      <span className="flex items-center text-[#c9a34e]">
        {icon}
      </span>
    )}
    <h2 className={`text-[#0f1f3d] font-semibold m-0 leading-none ${isDesktop ? 'text-[1.25rem]' : 'text-[0.875rem]'}`}>
      {title}
    </h2>
  </div>
);

interface LabelValueRowProps {
  label: string;
  value: string | React.ReactNode;
  isDesktop?: boolean;
}

export const LabelValueRow = ({ label, value, isDesktop = false }: LabelValueRowProps) => (
  <div className={`flex justify-between items-center border-b border-[#eef0f3] last:border-0 ${isDesktop ? 'py-[0.875rem]' : 'py-[0.125rem]'}`}>
    <span className={`text-[#64748b] ${isDesktop ? 'text-[0.875rem]' : 'text-[0.75rem]'}`}>
      {label}
    </span>
    <div className={`font-semibold text-[#0f1f3d] text-right ${isDesktop ? 'text-[1rem]' : 'text-[0.8rem]'}`}>
      {value}
    </div>
  </div>
);