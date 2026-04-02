import React from 'react';
import { Box, Typography } from '@mui/material';

export type ViewAllTab = 'unitDetails' | 'media' | 'specs' | 'facilities' | 'suited';

interface TabNavigationProps {
  activeTab: ViewAllTab;
  onTabChange: (tab: ViewAllTab) => void;
}

const tabs: { id: ViewAllTab; label: string }[] = [
  { id: 'unitDetails', label: 'Unit details' },
  { id: 'media', label: 'Media' },
  { id: 'specs', label: 'Specs' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'suited', label: 'Suited' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '4px',
        borderBottom: '1px solid var(--border-default)',
        overflowX: 'auto',
        padding: '0 4px',
        backgroundColor: 'var(--bg-card)',
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <Box
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            sx={{
              px: '8px',
              py: '8px',
              cursor: 'pointer',
              position: 'relative',
              flexShrink: 0,
              transition: 'all 150ms ease-in-out',
              borderBottom: '2px solid',
              borderColor: isActive ? 'var(--accent-gold)' : 'transparent',
              '&:hover': {
                backgroundColor: 'var(--bg-app)',
              },
              '&:hover .tab-text': {
                color: 'var(--text-main)',
              }
            }}
          >
            <Typography
              className="tab-text"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)',
                whiteSpace: 'nowrap',
                transition: 'color 150ms ease-in-out',
              }}
            >
              {tab.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default TabNavigation;