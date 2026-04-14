import { useState, useEffect } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import SidebarNavigation from './components/SidebarNavigation';
import type { PageId } from './components/SidebarNavigation';
import RoleGuard from './components/RoleGuard';
import ListFranchise from './pages/ListFranchise';
import SavedListings from './pages/SavedListings';
import Leads from './pages/Leads';
import PostRequirement from './pages/PostRequirement';
import MyListings from './pages/MyListings';
import MyPackages from './pages/Packages/MyPackages';
import Compare from './pages/Compare';
import HiddenListings from './pages/HiddenListings';

interface PostRegistrationProps {
  viewMode: 'desktop' | 'mobile';
  userType: 'seller' | 'buyer';
}

const PAGE_TITLES: Record<PageId, string> = {
  overview:          'Dashboard',
  'list-franchise':  'List Your Franchise',
  'saved-listings':  'Saved Listings',
  leads:             'Leads',
  'post-requirement': 'Post Requirement',
  'my-listings':     'My Listings',
  'my-packages':     'My Packages',
  compare:           'Compare',
  'hidden-listings': 'Hidden Listings',
};

const SELLER_TILES = [
  { label: 'Active Listings',  value: '5',  sub: '+2 this month',   icon: ListAltOutlinedIcon,        page: 'my-listings'      as PageId, color: 'emerald' },
  { label: 'Leads Received',   value: '14', sub: 'This month',      icon: PeopleAltOutlinedIcon,      page: 'leads'            as PageId, color: 'blue' },
  { label: 'Saved Franchises', value: '6',  sub: '1 new',           icon: BookmarkBorderOutlinedIcon, page: 'saved-listings'   as PageId, color: 'amber' },
  { label: 'Active Package',   value: '1',  sub: '18 days left',    icon: CardMembershipOutlinedIcon, page: 'my-packages'      as PageId, color: 'purple' },
];

const BUYER_TILES = [
  { label: 'Saved Franchises', value: '6',  sub: '2 new this week', icon: BookmarkBorderOutlinedIcon, page: 'saved-listings'   as PageId, color: 'amber' },
  { label: 'Hidden Listings',  value: '4',  sub: 'Manage visibility', icon: VisibilityOffOutlinedIcon,  page: 'hidden-listings'  as PageId, color: 'gray' },
  { label: 'My Requirements',  value: '2',  sub: 'Active postings',  icon: PostAddOutlinedIcon,        page: 'post-requirement' as PageId, color: 'blue' },
  { label: 'Comparisons',      value: '3',  sub: 'Items compared',   icon: CompareArrowsOutlinedIcon,  page: 'compare'          as PageId, color: 'emerald' },
];

const TILE_COLORS: Record<string, { bg: string, text: string, iconBg: string }> = {
  emerald: { bg: 'hover:border-emerald-200', text: 'text-emerald-600', iconBg: 'bg-emerald-50' },
  blue:    { bg: 'hover:border-blue-200',    text: 'text-blue-600',    iconBg: 'bg-blue-50' },
  amber:   { bg: 'hover:border-amber-200',   text: 'text-amber-600',   iconBg: 'bg-amber-50' },
  purple:  { bg: 'hover:border-purple-200',  text: 'text-purple-600',  iconBg: 'bg-purple-50' },
  gray:    { bg: 'hover:border-gray-300',    text: 'text-gray-600',    iconBg: 'bg-gray-100' },
};

interface OverviewProps {
  userType: 'seller' | 'buyer';
  isDesktop: boolean;
  onNavigate: (page: PageId) => void;
}

function Overview({ userType, isDesktop, onNavigate }: OverviewProps) {
  const tiles = userType === 'seller' ? SELLER_TILES : BUYER_TILES;
  const quickActions = userType === 'seller'
    ? [
        { label: 'List a Franchise',  icon: AddBusinessOutlinedIcon, page: 'list-franchise'   as PageId, desc: 'Add a new opportunity' },
        { label: 'View My Listings',  icon: ListAltOutlinedIcon,     page: 'my-listings'      as PageId, desc: 'Manage your portfolio' },
        { label: 'Check Leads',       icon: PeopleAltOutlinedIcon,   page: 'leads'            as PageId, desc: 'View interested buyers' },
      ]
    : [
        { label: 'Browse Saved',      icon: BookmarkBorderOutlinedIcon, page: 'saved-listings'   as PageId, desc: 'View your shortlisted options' },
        { label: 'Post a Requirement',icon: PostAddOutlinedIcon,        page: 'post-requirement' as PageId, desc: 'Let sellers find you' },
        { label: 'Compare Franchises',icon: CompareArrowsOutlinedIcon,  page: 'compare'          as PageId, desc: 'Analyze options side-by-side' },
      ];

  return (
    <div className="flex flex-col gap-6">
      
      {/* Stat Tiles */}
      <div className={`grid gap-3 sm:gap-4 ${isDesktop ? 'grid-cols-4' : 'grid-cols-2'}`}>
        {tiles.map(({ label, value, sub, icon: Icon, page, color }) => {
          const theme = TILE_COLORS[color];
          return (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`bg-white rounded-[8px] border border-black/5 shadow-sm p-4 text-left hover:shadow-md transition-all duration-300 group flex flex-col justify-between min-h-[110px] ${theme.bg}`}
            >
              <div className="flex items-start justify-between w-full">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${theme.iconBg}`}>
                  <Icon sx={{ fontSize: 18 }} className={theme.text} />
                </div>
                <span className="text-[22px] font-bold text-[#0a1128]">{value}</span>
              </div>
              <div className="mt-3">
                <p className="text-[13px] font-semibold text-[#0a1128]">{label}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {sub.includes('+') && <TrendingUpIcon sx={{ fontSize: 12, color: '#10b981' }} />}
                  <p className="text-[11px] font-light text-[#637089] truncate">{sub}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className={`grid gap-6 ${isDesktop ? 'grid-cols-3' : 'grid-cols-1'}`}>
        {/* Quick Actions */}
        <div className={isDesktop ? 'col-span-2' : 'col-span-1'}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[13px] font-bold text-[#0a1128]  tracking-wide">Quick Actions</h3>
          </div>
          <div className={`grid gap-3 ${isDesktop ? 'grid-cols-3' : 'grid-cols-1'}`}>
            {quickActions.map(({ label, icon: Icon, page, desc }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className="flex items-center gap-3 p-3.5 bg-white rounded-[8px] border border-black/5 shadow-sm hover:shadow-md hover:border-[#d4af37]/40 transition-all text-left group"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#fafafb] group-hover:bg-[#d4af37]/10 flex items-center justify-center transition-colors">
                  <Icon sx={{ fontSize: 20, color: '#d4af37' }} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] font-semibold text-[#0a1128] group-hover:text-[#d4af37] transition-colors truncate">{label}</span>
                  <span className="text-[11px] font-light text-[#637089] truncate">{desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[13px] font-bold text-[#0a1128]  tracking-wide">Recent Activity</h3>
          </div>
          <div className="bg-white rounded-[8px] border border-black/5 shadow-sm overflow-hidden flex-1 p-1">
            {[
              { text: 'New lead from Rahul Sharma', time: '2 hrs ago', color: 'blue' },
              { text: 'Listing "Sunrise Café" approved', time: '1 day ago', color: 'emerald' },
              { text: 'Package renewed — Starter Plan', time: '3 days ago', color: 'amber' },
            ].map(({ text, time, color }, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-black/[0.03] last:border-b-0 hover:bg-[#fafafb] transition-colors rounded-[4px]">
                <div className={`w-2 h-2 rounded-full shrink-0 ${
                  color === 'blue' ? 'bg-blue-500' : color === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500'
                }`} />
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-[#0a1128] truncate">{text}</p>
                  <p className="text-[10px] font-light text-[#a0aabf] mt-0.5">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const PAGE_ACCESS: Record<PageId, ('seller' | 'buyer')[]> = {
  overview:          ['seller', 'buyer'],
  'list-franchise':  ['seller'],
  'saved-listings':  ['seller', 'buyer'],
  leads:             ['seller'],
  'post-requirement': ['seller', 'buyer'],
  'my-listings':     ['seller'],
  'my-packages':     ['seller'],
  compare:           ['seller', 'buyer'],
  'hidden-listings': ['buyer'],
};

export default function PostRegistration({ viewMode, userType }: PostRegistrationProps) {
  const isDesktop = viewMode === 'desktop';
  const [activePage, setActivePage] = useState<PageId>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActivePage('overview');
    setMobileMenuOpen(false);
  }, [userType]);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  const renderPage = () => {
    const allowed = PAGE_ACCESS[activePage];
    return (
      <RoleGuard allowed={allowed} currentRole={userType}>
        {activePage === 'overview'          && <Overview userType={userType} isDesktop={isDesktop} onNavigate={handleNavigate} />}
        {activePage === 'list-franchise'    && <ListFranchise isDesktop={isDesktop} />}
        {activePage === 'saved-listings'    && <SavedListings isDesktop={isDesktop} />}
        {activePage === 'leads'             && <Leads isDesktop={isDesktop} />}
        {activePage === 'post-requirement'  && <PostRequirement isDesktop={isDesktop} userType={userType} />}
        {activePage === 'my-listings'       && <MyListings isDesktop={isDesktop} />}
        {activePage === 'my-packages'       && <MyPackages isDesktop={isDesktop} />}
        {activePage === 'compare'           && <Compare isDesktop={isDesktop} />}
        {activePage === 'hidden-listings'   && <HiddenListings isDesktop={isDesktop} />}
      </RoleGuard>
    );
  };

  return (
    <div
      className={`w-full flex flex-col ${isDesktop ? 'items-stretch bg-[#fafafb]' : 'items-center justify-start bg-[#fafafb]'}`}
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <div
        className={`flex flex-col transition-all duration-700 ease-in-out ${
          isDesktop
            ? 'w-full h-full'
            : 'w-[24.375rem] shrink-0 h-full rounded-none shadow-[0_0_40px_rgba(0,0,0,0.08)]'
        }`}
      >
        {/* Header Area */}
        <div className="w-full bg-gradient-to-br from-[#0a1128] via-[#121c33] to-[#0a1128] relative overflow-hidden shrink-0 border-b border-white/[0.05]">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4af37]/10 blur-[80px] -translate-y-1/3 translate-x-1/4 rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[60px] translate-y-1/3 -translate-x-1/4 rounded-full pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className={`w-full relative z-10 flex items-center justify-between gap-3 ${isDesktop ? 'px-8 py-5' : 'px-4 py-4'}`}>
            {!isDesktop && (
              <button
                onClick={() => setMobileMenuOpen((p) => !p)}
                className="shrink-0 w-9 h-9 rounded-[4px] border border-white/10 hover:border-[#d4af37]/40 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/10"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen
                  ? <CloseIcon sx={{ fontSize: '1.2rem', color: '#ffffff' }} />
                  : <MenuIcon sx={{ fontSize: '1.2rem', color: '#ffffff' }} />}
              </button>
            )}

            <div className="flex-1 min-w-0">
              <h1 className={`font-extralight text-white tracking-wide ${isDesktop ? 'text-[28px]' : 'text-lg'}`}>
                {activePage === 'overview' ? (
                  <>
                    Welcome back,{' '}
                    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">
                      {userType === 'seller' ? 'Seller' : 'Buyer'}
                    </span>
                  </>
                ) : (
                  PAGE_TITLES[activePage]
                )}
              </h1>
              {activePage !== 'overview' && (
                <p className="text-[#a0aabf] text-[12px] font-light mt-0.5">
                  Manage your {PAGE_TITLES[activePage].toLowerCase()} preferences
                </p>
              )}
            </div>

            <div className={`shrink-0 rounded-[6px] border border-[#d4af37]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.05)] ${isDesktop ? 'w-12 h-12' : 'w-9 h-9'}`}>
              {userType === 'seller'
                ? <StorefrontIcon sx={{ fontSize: isDesktop ? '1.5rem' : '1.1rem', color: '#e5c158' }} />
                : <PersonSearchIcon sx={{ fontSize: isDesktop ? '1.5rem' : '1.1rem', color: '#e5c158' }} />
              }
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden relative">
          {isDesktop && (
            <SidebarNavigation
              activePage={activePage}
              onNavigate={handleNavigate}
              userType={userType}
              isDesktop={true}
            />
          )}

          {!isDesktop && (
            <SidebarNavigation
              activePage={activePage}
              onNavigate={handleNavigate}
              userType={userType}
              isDesktop={false}
              mobileOpen={mobileMenuOpen}
              onMobileClose={() => setMobileMenuOpen(false)}
            />
          )}

          <div className={`flex-1 overflow-y-auto ${isDesktop ? 'p-8' : 'px-3 py-4'}`}>
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
}