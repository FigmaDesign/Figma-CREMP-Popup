import { useState } from 'react';
import PremiumTabs from '../ui/PremiumTabs';
import HandpickedHeader from './sections/HandpickedHeader';
import PropertyGrid from './sections/PropertyGrid';

type TabId = 'all' | 'income' | 'vacant' | 'franchisee' | 'others';

const tabs: { label: string; value: TabId }[] = [
  { label: 'All', value: 'all' },
  { label: 'Income Generating', value: 'income' },
  { label: 'Vacant', value: 'vacant' },
  { label: 'Franchisee', value: 'franchisee' },
  { label: 'Others', value: 'others' },
];

export interface Property {
  id: string;
  name: string;
  tagline: string;
  category: string;
  investmentRange: string;
  monthlyRevenue: string;
  location: string;
  image: string;
  tags: string[];
  isVerified?: boolean;
}

export const handpickedData: Property[] = [
  {
    id: '1',
    name: 'DLF sky plaza',
    tagline: 'Premium Commercial Space',
    category: 'Real Estate',
    investmentRange: '₹ 8Cr',
    monthlyRevenue: '₹ 4L/ Month',
    location: 'Hitech city, Hyderabad',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    tags: ['Income Generating'],
    isVerified: true,
  },
  {
    id: '2',
    name: 'Burger King',
    tagline: 'Fast Food Franchise',
    category: 'Food & Beverage',
    investmentRange: '₹ 4L/ Month',
    monthlyRevenue: '',
    location: 'Hitech city, Hyderabad',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop',
    tags: ['Franchisee'],
    isVerified: true,
  },
  {
    id: '3',
    name: 'Profitable Gym & Fitness Center',
    tagline: 'Health & Fitness',
    category: 'Health & Fitness',
    investmentRange: '',
    monthlyRevenue: '₹ 2L/ Month',
    location: 'Hitech city, Hyderabad',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop',
    tags: ['Income Generating', 'Others'],
    isVerified: true,
  },
  {
    id: '4',
    name: 'PVR cinemas',
    tagline: 'Entertainment & Multiplex',
    category: 'Entertainment',
    investmentRange: '₹ 14Cr',
    monthlyRevenue: '₹ 8.5L/ Month',
    location: 'Hitech city, Hyderabad',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop',
    tags: ['Income Generating'],
    isVerified: true,
  },
  {
    id: '5',
    name: 'DLF sky plaza',
    tagline: 'Premium Commercial Space',
    category: 'Real Estate',
    investmentRange: '₹ 8Cr',
    monthlyRevenue: '₹ 4L/ Month',
    location: 'Hitech city, Hyderabad',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    tags: ['Income Generating'],
    isVerified: true,
  },
  {
    id: '6',
    name: 'Burger King',
    tagline: 'Fast Food Franchise',
    category: 'Food & Beverage',
    investmentRange: '₹ 4L/ Month',
    monthlyRevenue: '',
    location: 'Hitech city, Hyderabad',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop',
    tags: ['Franchisee'],
    isVerified: true,
  },
];

interface HandpickedProps {
  viewMode: 'desktop' | 'mobile';
}

export default function Handpicked({ viewMode }: HandpickedProps) {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const isDesktop = viewMode === 'desktop';

  const filteredProperties = handpickedData.filter((property) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'income') return property.tags.includes('Income Generating');
    if (activeTab === 'vacant') return property.tags.includes('Vacant');
    if (activeTab === 'franchisee') return property.tags.includes('Franchisee');
    if (activeTab === 'others') return property.tags.includes('Others');
    return true;
  });

  return (
    <div
      className={`w-full flex flex-col items-center overflow-hidden ${
        isDesktop ? 'bg-[#f4f7f9]' : 'h-screen bg-white'
      }`}
    >
      <div
        className={`transition-all duration-500 mx-auto overflow-hidden shadow-2xl bg-white flex flex-col ${
          isDesktop
            ? 'max-w-[100%] w-[100%] rounded-none border border-[#1c2a44]/10'
            : 'w-[24.375rem] shrink-0 pt-2 rounded-none'
        }`}
        style={{ height: isDesktop ? 'calc(100vh - 6.25rem)' : '48.75rem' }}
      >
        <div className="relative h-full flex flex-col overflow-hidden">
          <div
            className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:w-[0.25rem] [&::-webkit-scrollbar-thumb]:bg-[#1c2a44]/15 [&::-webkit-scrollbar-thumb]:rounded"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <HandpickedHeader isDesktop={isDesktop} />

            <div className="sticky top-0 z-40 bg-white">
              <div className={isDesktop ? 'max-w-[80rem] mx-auto px-6' : 'px-1'}>
                <PremiumTabs
                  tabs={tabs}
                  value={activeTab}
                  onChange={(v) => setActiveTab(v as TabId)}
                  isDesktop={isDesktop}
                />
              </div>
            </div>

            <div className={isDesktop ? 'max-w-[80rem] mx-auto px-10 py-6 pb-10' : 'px-3 py-4 pb-20'}>
              <PropertyGrid
                properties={filteredProperties}
                isDesktop={isDesktop}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}