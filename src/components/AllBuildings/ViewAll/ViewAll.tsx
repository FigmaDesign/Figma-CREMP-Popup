import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Stack, Divider, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Header from './header';
import Highlights from './highlights';
import UnitDescription from './unitDescription';
import MediaAndTour from './mediaAndTour';
import Specifications from './Specifications';
import Facilities from './facilities';
import SuitedFor from './suitedFor';
import InvestmentSummary from './investmentSummary';
import Footer from './footer';

interface ViewAllProps {
  onBack?: () => void;
}

const KeyIconItem: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <Stack 
    direction="row" 
    alignItems="center" 
    spacing="4px" 
    sx={{ 
      flex: 1,
      padding: '4px',
      borderRadius: '4px',
      backgroundColor: 'var(--bg-app)',
      border: '1px solid var(--border-default)',
    }}
  >
    <Box sx={{ width: 28, height: 28, borderRadius: '4px', backgroundColor: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
      {icon}
    </Box>
    <Stack spacing={0}>
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.2 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.6rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>
        {label}
      </Typography>
    </Stack>
  </Stack>
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
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const suitedForRef = useRef<HTMLDivElement>(null);
  const investmentRef = useRef<HTMLDivElement>(null);

  const tabItems = [
    { id: 'unitDetails', label: 'Unit Details', ref: unitDescRef },
    { id: 'media', label: 'Media & Tour', ref: mediaRef },
    { id: 'specifications', label: 'Specifications', ref: specsRef },
    { id: 'facilities', label: 'Facilities', ref: facilitiesRef },
    { id: 'suitedFor', label: 'Suited For', ref: suitedForRef },
    { id: 'investmentSummary', label: 'Investment Summary', ref: investmentRef },
  ];

  // --- Main Scroll Logic (Scroll Spy & Sticky Header Reveal) ---
  const handleMainScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      
      // Reveal sticky header after 150px
      setIsScrolled(scrollTop > 150);

      // Scroll Spy: Update active tab based on scroll position (if not currently auto-scrolling from a click)
      if (!isClickScrolling.current) {
        const scrollPosition = scrollTop + 100; // 100px offset to detect section slightly before it hits the very top
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
    <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F9FAFB', overflow: 'hidden' }}>
      
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0,
          zIndex: 100, 
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transform: isScrolled ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isScrolled ? 1 : 0,
          pointerEvents: isScrolled ? 'auto' : 'none',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
        }}
      >
        {showLeftArrow && (
          <Box 
            sx={{ 
              position: 'absolute', left: 0, top: 0, bottom: 0, zIndex: 10,
              display: 'flex', alignItems: 'center', px: '2px',
              background: 'linear-gradient(to right, #FFFFFF 60%, transparent)',
            }}
          >
            <IconButton size="small" onClick={() => scrollTabBar('left')} sx={{ color: '#1C2A44', backgroundColor: '#FFFFFF', boxShadow: '1px 0 4px rgba(0,0,0,0.05)' }}>
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
          </Box>
        )}

        <Stack
          ref={tabBarRef}
          onScroll={handleTabBarScroll}
          direction="row"
          spacing={3}
          sx={{
            flex: 1,
            overflowX: 'auto',
            px: showLeftArrow ? '36px' : '16px',
            pr: showRightArrow ? '36px' : '16px',
            pt: '8px',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {tabItems.map(tab => (
            <Box
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.ref)}
              sx={{
                paddingBottom: '8px',
                borderBottom: tab.id === activeTab
                  ? '2.5px solid #C69C44'
                  : '2.5px solid transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'border-color 0.2s',
                '&:hover': {
                  borderBottom: '2.5px solid #a67c2c',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: tab.id === activeTab ? '#C69C44' : '#6B7280',
                  textDecoration: 'underline',
                  textUnderlineOffset: '6px',
                  textDecorationColor: '#C69C44',
                }}
              >
                {tab.label}
              </Typography>
            </Box>
          ))}
        </Stack>

        {showRightArrow && (
          <Box 
            sx={{ 
              position: 'absolute', right: 0, top: 0, bottom: 0, zIndex: 10,
              display: 'flex', alignItems: 'center', px: '2px',
              background: 'linear-gradient(to left, #FFFFFF 60%, transparent)',
            }}
          >
            <IconButton size="small" onClick={() => scrollTabBar('right')} sx={{ color: '#1C2A44', backgroundColor: '#FFFFFF', boxShadow: '-1px 0 4px rgba(0,0,0,0.05)' }}>
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>

      <Box
        ref={scrollContainerRef}
        onScroll={handleMainScroll}
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          WebkitOverflowScrolling: 'touch',
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: '#D1D5DB', borderRadius: '4px' },
        }}
      >
        <Header onBack={onBack} />
        <Highlights />
        
        <Box sx={{ padding: '8px 2px', backgroundColor: '#FFFFFF', mb: '4px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '4px' }}>
            <Box>
              <Typography sx={{ fontSize: '1.125rem', fontWeight: 600, color: '#1C2A44', lineHeight: 1.2 }}>
                Retail Unit A105
              </Typography>
              <Stack direction="row" alignItems="center" spacing="4px" sx={{ mt: '2px' }}>
                <LocationOnIcon sx={{ fontSize: 14, color: '#C89B3C' }} />
                <Typography sx={{ fontSize: '0.75rem', color: '#6B7280' }}>
                  Ground Floor, XYZ Mall, Manhattan
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ px: '4px', py: '2px', backgroundColor: '#FFFCF5', borderRadius: '4px', border: '1px solid #C89B3C' }}>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: '#C89B3C'}}>
                Available
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: '4px' }}>
            <KeyIconItem icon={<StorefrontIcon sx={{ fontSize: 16 }} />} value="25 ft" label="Frontage" />
            <KeyIconItem icon={<PeopleAltIcon sx={{ fontSize: 16 }} />} value="High" label="Footfall" />
            <KeyIconItem icon={<VisibilityIcon sx={{ fontSize: 16 }} />} value="Main Road" label="Visibility" />
          </Box>
        </Box>

        <Box sx={{ px: '2px', pt: '4px', pb: '40px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          
          <Box ref={unitDescRef}>
            <UnitDescription />
          </Box>
          <Divider sx={{ mx: '2px', borderColor: '#E5E7EB' }} />
          
          <Box ref={mediaRef}>
            <MediaAndTour />
          </Box>
          <Divider sx={{ mx: '2px', borderColor: '#E5E7EB' }} />
          
          <Box ref={specsRef}>
            <Specifications />
          </Box>
          <Divider sx={{ mx: '2px', borderColor: '#E5E7EB' }} />
          
          <Box ref={facilitiesRef}>
            <Facilities />
          </Box>
          <Divider sx={{ mx: '2px', borderColor: '#E5E7EB' }} />
          
          <Box ref={suitedForRef}>
            <SuitedFor />
          </Box>
          <Divider sx={{ mx: '2px', borderColor: '#E5E7EB' }} />
          
          <Box ref={investmentRef}>
            <InvestmentSummary />
          </Box>
          
        </Box>
      </Box>

      <Box sx={{ flexShrink: 0, borderTop: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ViewAll;