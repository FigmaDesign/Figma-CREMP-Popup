import React from 'react';
import HeaderSection from './sections/HeaderSection';
import BusinessOverviewSection from './sections/BusinessOverviewSection';
import SupportRequirementsSection from './sections/SupportRequirementsSection';
import MediaDownloadsSection from './sections/MediaDownloadsSection';
import InvestmentDetailsSection from './sections/InvestmentDetailsSection';
import TerritoryNetworkSection from './sections/TerritoryNetworkSection';
import ContactSection from './sections/ContactSection';

export default function FranchiseProfile({ viewMode }: { viewMode: 'desktop' | 'mobile' }) {
  const isDesktop = viewMode === 'desktop';

  return (
    <div className="w-full flex flex-col items-center pb-8 min-h-screen pt-[12px] font-medium bg-white">
      <div className={`transition-all duration-300 mx-auto bg-white ${isDesktop ? 'max-w-[1400px] w-full p-[4px]' : 'w-[400px] shrink-0 border-[14px] border-black rounded-[36px] overflow-hidden shadow-2xl relative h-[812px] flex flex-col hide-scrollbar'}`}>

        <div className={`w-full flex gap-[4px] relative items-start overflow-y-auto hide-scrollbar bg-white ${isDesktop ? 'flex-row' : 'flex-col p-[4px] h-full'}`}>
          <div className={`w-full flex flex-col gap-[4px] ${isDesktop ? 'w-[70%]' : ''}`}>
            <HeaderSection isDesktop={isDesktop} />
            <div className="flex flex-col gap-[4px]">
              <BusinessOverviewSection isDesktop={isDesktop} />
              <SupportRequirementsSection isDesktop={isDesktop} />
              <MediaDownloadsSection isDesktop={isDesktop} />
            </div>
          </div>

          <div className={`w-full flex flex-col gap-[4px] pb-4 pt-[4px] ${isDesktop ? 'w-[30%] sticky top-[76px]' : ''}`}>
            <InvestmentDetailsSection isDesktop={isDesktop} />
            <TerritoryNetworkSection isDesktop={isDesktop} />
            <ContactSection isDesktop={isDesktop} />
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
