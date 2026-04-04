import React from 'react';

export type PremiumTabOption<T> = {
  label: string;
  value: T;
};

interface PremiumTabsProps<T> {
  tabs: PremiumTabOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

const PremiumTabs = <T extends string>({ tabs, value, onChange, className = '' }: PremiumTabsProps<T>) => {
  return (
    <div className={`flex items-end w-full space-x-[-12px] px-1 pt-2 overflow-hidden bg-[#f0f2f5] ${className}`}>
      {tabs.map((tab, index) => {
        const isActive = tab.value === value;
        const activeGradId = `grad-active-${tab.value}`;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            style={{ zIndex: isActive ? 50 : 40 - index }}
            className="relative h-[36px] flex-1 min-w-[100px] outline-none group transition-all duration-300 bg-transparent"
          >
            <svg 
              className="absolute inset-0 block size-full" 
              fill="none" 
              preserveAspectRatio="none" 
              viewBox="0 0 200 40"
            >
              <defs>
                <linearGradient id={activeGradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1C448E" />
                  <stop offset="100%" stopColor="#152C5B" />
                </linearGradient>
              </defs>
              <path 
                d="M 0 40 L 20 5 C 22 2 25 0 30 0 L 170 0 C 175 0 178 2 180 5 L 200 40 Z" 
                fill={isActive ? `url(#${activeGradId})` : '#FFFFFF'} 
                className="transition-colors duration-300"
              />
            </svg>
            
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
              <span 
                className={`text-[14px] font-bold tracking-tight transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-[#595959]'
                }`}
              >
                {tab.label}
              </span>
              
           
              <div 
                className={`h-[3px] w-8 mt-1 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-[#C69C44] opacity-100' : 'bg-transparent opacity-0'
                }`} 
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default PremiumTabs;