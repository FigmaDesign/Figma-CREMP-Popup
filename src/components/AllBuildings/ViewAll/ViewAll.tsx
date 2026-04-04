import React, { useState, useRef, useEffect } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Layers } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Header from './header';
import UnitDescription from './unitDescription';
import MediaAndTour from './mediaAndTour';
import Specifications from './Specifications';

import SuitedFor from './suitedFor';
import InvestmentSummary from './investmentSummary';
import Footer from './footer';

interface ViewAllProps {
  onBack?: () => void;
}

const KeyIconItem: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="flex flex-1 items-center gap-1 p-1 rounded border border-[#1c2a44]/10 bg-white shadow-[#1c2a44]/5">
    <div className="w-7 h-7 rounded bg-[#f8fafc] flex items-center justify-center text-[#D4AF37] shrink-0">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[0.75rem] font-bold text-[#1c2a44] leading-tight">
        {value}
      </span>
      <span className="text-[0.6rem] text-[#1c2a44]/70 leading-tight">
        {label}
      </span>
    </div>
  </div>
);

const ViewAll: React.FC<ViewAllProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<string>('unitDetails');

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // A flag to prevent the scroll spy from updating the active tab while a smooth-scroll click is happening
  const isClickScrolling = useRef(false);

  const tabBarRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const unitDescRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  const suitedForRef = useRef<HTMLDivElement>(null);
  const investmentRef = useRef<HTMLDivElement>(null);

  const tabItems = [
    { id: 'unitDetails', label: 'Unit Details', ref: unitDescRef },
    { id: 'media', label: 'Media & Tour', ref: mediaRef },
    { id: 'specifications', label: 'Specifications', ref: specsRef },

    { id: 'suitedFor', label: 'Suited For', ref: suitedForRef },
    { id: 'investmentSummary', label: 'Investment Summary', ref: investmentRef },
  ];

  // --- Main Scroll Logic (Scroll Spy & Sticky Header Reveal) ---
  const handleMainScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;

      // Reveal sticky header after 150px
      setIsScrolled(scrollTop > 150);

      // Scroll Spy: Update active tab based on scroll position
      if (!isClickScrolling.current) {
        const scrollPosition = scrollTop + 100; // 100px offset
        let currentFocusedTab = tabItems[0].id;

        for (const tab of tabItems) {
          if (tab.ref.current && tab.ref.current.offsetTop <= scrollPosition) {
            currentFocusedTab = tab.id;
          }
        }

        if (activeTab !== currentFocusedTab) {
          setActiveTab(currentFocusedTab);
        }
      }
    }
  };

  const handleTabBarScroll = () => {
    if (tabBarRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabBarRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    handleTabBarScroll();
    window.addEventListener('resize', handleTabBarScroll);
    return () => window.removeEventListener('resize', handleTabBarScroll);
  }, []);

  const scrollTabBar = (direction: 'left' | 'right') => {
    if (tabBarRef.current) {
      const scrollAmount = 200;
      tabBarRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleTabClick = (id: string, ref: React.RefObject<HTMLDivElement | null>) => {
    // Lock the scroll spy
    isClickScrolling.current = true;
    setActiveTab(id);

    if (ref.current && scrollContainerRef.current) {
      const offsetTop = ref.current.offsetTop - 55;
      scrollContainerRef.current.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    // Unlock the scroll spy after the smooth scroll finishes (~800ms)
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <div className="relative h-full flex flex-col bg-[#f8fafc] overflow-hidden">

      {/* Sticky Tab Bar */}
      <div
        className={`absolute top-0 left-0 right-0 z-50 bg-white border-b border-[#1c2a44]/10 flex items-center shadow-md shadow-[#1c2a44]/5 transition-all duration-300 ease-out ${isScrolled ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        {showLeftArrow && (
          <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-1 bg-gradient-to-r from-white via-white to-transparent w-8">
            <button
              onClick={() => scrollTabBar('left')}
              className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-[#1c2a44]/10 text-[#1c2a44] hover:bg-[#f8fafc] transition-colors"
            >
              <ChevronLeftIcon sx={{ fontSize: 16 }} />
            </button>
          </div>
        )}

        <div
          ref={tabBarRef}
          onScroll={handleTabBarScroll}
          className={`flex-1 flex overflow-x-auto gap-3 pt-2 scroll-smooth ${showLeftArrow ? 'pl-8' : 'pl-2'} ${showRightArrow ? 'pr-8' : 'pr-2'} [&::-webkit-scrollbar]:hidden`}
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {tabItems.map(tab => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.ref)}
              className={`pb-1 cursor-pointer whitespace-nowrap border-b-[2.5px] transition-colors duration-200 group ${tab.id === activeTab ? 'border-[#D4AF37]' : 'border-transparent hover:border-[#D4AF37]/50'
                }`}
            >
              <span
                className={`text-[0.8rem] font-semibold tracking-wide transition-colors duration-200 ${tab.id === activeTab ? 'text-[#D4AF37]' : 'text-[#1c2a44]/60 group-hover:text-[#1c2a44]'
                  }`}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-end px-1 bg-gradient-to-l from-white via-white to-transparent w-8">
            <button
              onClick={() => scrollTabBar('right')}
              className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-[#1c2a44]/10 text-[#1c2a44] hover:bg-[#f8fafc] transition-colors"
            >
              <ChevronRightIcon sx={{ fontSize: 16 }} />
            </button>
          </div>
        )}
      </div>

      {/* Main Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleMainScroll}
        className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#1c2a44]/20 [&::-webkit-scrollbar-thumb]:rounded-full"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <Header onBack={onBack} />


        {/* Unit Summary Section */}
        <div className="p-0 bg-white mb-2 pb-2">
          <div className="flex justify-between items-start mb-2 px-4">
            <div>
              <h2 className="text-[1.125rem] font-extrabold text-[#1c2a44] leading-tight">
                Retail Unit A105
              </h2>
              <div className="flex items-center gap-1 mt-[2px]">
                <span className="text-[0.75rem] text-[#1c2a44]/70 font-medium">
                  XYZ Mall, Manhattan
                </span>
              </div>
            </div>

            <div className="px-2 py-[2px] bg-[#D4AF37]/10 rounded border border-[#D4AF37]/30">
              <span className="text-[0.65rem] font-bold text-[#D4AF37] tracking-wider ">
                Available
              </span>
            </div>
          </div>

          <div className="flex gap-1.5 mt-2 px-4">
            <KeyIconItem icon={<StorefrontIcon sx={{ fontSize: 16 }} />} value="25 ft" label="Frontage" />
            <KeyIconItem icon={<Layers sx={{ fontSize: 14 }} />} value="Ground" label="Floor" />
            <KeyIconItem icon={<VisibilityIcon sx={{ fontSize: 16 }} />} value="Main Road" label="Visibility" />
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="flex flex-col gap-2 pb-2">
          <div ref={unitDescRef}>
            <UnitDescription />
          </div>

          <div ref={mediaRef}>
            <MediaAndTour />
          </div>

          <div ref={specsRef}>
            <Specifications />
          </div>



          <div ref={suitedForRef}>
            <SuitedFor />
          </div>

          <div ref={investmentRef}>
            <InvestmentSummary />
          </div>
        </div>
      </div>

      <div className="shrink-0 border-t border-[#1c2a44]/10 bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default ViewAll;