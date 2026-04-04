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
    <div className={`flex items-end w-full space-x-[-8px] px-1 pt-2 overflow-hidden isolate ${className}`}>
      {tabs.map((tab, index) => {
        const isActive = tab.value === value;
        const activeGradId = `grad-active-${tab.value}`;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            style={{ zIndex: isActive ? 10 : 5 - index }}
            className="relative h-[30px] flex-1 min-w-[90px] max-w-[140px] outline-none group transition-all duration-300 bg-transparent"
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
                d="M 12 40 L 25 5 C 27 2 30 0 35 0 L 165 0 C 170 0 173 2 175 5 L 188 40 Z"
                fill={isActive ? `url(#${activeGradId})` : '#f0f2f5'}
                stroke={isActive ? 'none' : '#cbd5e1'}
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                className="transition-all duration-300"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
              <span
                className={`text-[13px] font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-white ' : 'text-[#595959] '
                  }`}
              >
                {tab.label}
              </span>

              <div
                className={`h-[2.5px] w-6 mt-[2px] rounded-full transition-all duration-300 ${isActive ? 'bg-[#C69C44] opacity-100' : 'bg-transparent opacity-0'
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