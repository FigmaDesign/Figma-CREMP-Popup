import { useState, useRef, useEffect, useCallback } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export type PremiumTabOption<T> = {
  label: string;
  value: T;
};

interface PremiumTabsProps<T> {
  tabs: PremiumTabOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  isDesktop?: boolean;
}

const PremiumTabs = <T extends string>({ 
  tabs, 
  value, 
  onChange, 
  className = '', 
  isDesktop = false 
}: PremiumTabsProps<T>) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check if we need to show the left/right arrows based on scroll position
  const updateArrows = useCallback(() => {
    if (!scrollRef.current || isDesktop) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    // Use a small 1px threshold for floating point rounding safety
    setShowLeftArrow(scrollLeft > 1);
    setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
  }, [isDesktop]);

  // Update arrows on mount and window resize
  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [tabs, updateArrows]);

  // Scroll to active tab and center it whenever the `value` changes
  useEffect(() => {
    if (!scrollRef.current) return;
    const activeTabBtn = scrollRef.current.querySelector(`button[data-value="${value}"]`);
    
    if (activeTabBtn) {
      activeTabBtn.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [value]);

  // Handle manual arrow clicks
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by half the container width
      const scrollAmount = direction === 'left' ? -(clientWidth / 2) : (clientWidth / 2);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative flex items-center w-full bg-white  ${className}`}>
      
      {/* Left Gradient & Arrow (Hidden on Desktop) */}
      {!isDesktop && (
        <div 
          className={`absolute left-0 top-0 bottom-0 z-20 flex items-center transition-opacity duration-300 ${
            showLeftArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-gradient-to-r from-white via-white to-transparent pr-[1rem] pl-[0.5rem] h-full flex items-center">
            <button
              onClick={() => scroll('left')}
              className="w-[1.75rem] h-[1.75rem] flex items-center justify-center bg-white rounded-[50%] shadow-md border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#1c2a44] transition-colors focus:outline-none"
            >
              <ChevronLeftIcon sx={{ fontSize: '1.25rem' }} />
            </button>
          </div>
        </div>
      )}

      {/* Scrollable Tabs Container */}
      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className={`flex items-end w-full space-x-[-0.5rem] px-[0.5rem] pt-[0.25rem] isolate scroll-smooth ${
          isDesktop 
            ? 'overflow-hidden justify-center' 
            : 'overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
        }`}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.value === value;
          const activeGradId = `grad-active-${tab.value}`;

          return (
            <button
              key={tab.value}
              data-value={tab.value}
              onClick={() => onChange(tab.value)}
              style={{ zIndex: isActive ? 10 : tabs.length - index }}
              className="relative h-[2.5rem] shrink-0 flex-1 min-w-[7rem] max-w-[10rem] outline-none group transition-all duration-300 bg-transparent"
            >
              {/* Slanted SVG Background */}
              <svg
                className="absolute inset-0 block w-full h-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 200 40"
              >
                <defs>
                  <linearGradient id={activeGradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1c2a44" />
                    <stop offset="100%" stopColor="#0f1f3d" />
                  </linearGradient>
                </defs>
                <path
                  d="M 12 40 L 25 5 C 27 2 30 0 35 0 L 165 0 C 170 0 173 2 175 5 L 188 40 Z"
                  fill={isActive ? `url(#${activeGradId})` : '#f8fafc'}
                  stroke={isActive ? 'none' : '#e2e8f0'}
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-300"
                />
              </svg>

              {/* Tab Content */}
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pb-[0.125rem]">
                <span
                  className={`text-[0.875rem] font-semibold tracking-tight transition-colors duration-300 whitespace-nowrap px-[1rem] ${
                    isActive ? 'text-white' : 'text-[#64748b] group-hover:text-[#1c2a44]'
                  }`}
                >
                  {tab.label}
                </span>

                {/* Active Indicator Line */}
                <div
                  className={`h-[0.125rem] w-[1.5rem] mt-[0.125rem] rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[#c9a34e] opacity-100' : 'bg-transparent opacity-0'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Gradient & Arrow (Hidden on Desktop) */}
      {!isDesktop && (
        <div 
          className={`absolute right-0 top-0 bottom-0 z-20 flex items-center transition-opacity duration-300 ${
            showRightArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-gradient-to-l from-white via-white to-transparent pl-[1rem] pr-[0.5rem] h-full flex items-center">
            <button
              onClick={() => scroll('right')}
              className="w-[1.75rem] h-[1.75rem] flex items-center justify-center bg-white rounded-[50%] shadow-md border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#1c2a44] transition-colors focus:outline-none"
            >
              <ChevronRightIcon sx={{ fontSize: '1.25rem' }} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default PremiumTabs;