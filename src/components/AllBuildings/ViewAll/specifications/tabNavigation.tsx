import React from 'react';
import { Box, Typography } from '@mui/material';

export type SpecTab = 'readiness' | 'furnishing' | 'interiors';

interface SpecTabNavigationProps {
  activeTab: SpecTab;
  onTabChange: (tab: SpecTab) => void;
}

const specTabs: { id: SpecTab; label: string }[] = [
  { id: 'readiness', label: 'Readiness' },
  { id: 'furnishing', label: 'Furnishing' },
  { id: 'interiors', label: 'Interiors' },
];

const SpecTabNavigation: React.FC<SpecTabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '4px',
        marginBottom: '4px',
      }}
    >
      {specTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <Box
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            sx={{
              padding: '4px 8px',
              borderRadius: '4px',
              backgroundColor: isActive ? 'var(--bg-card)' : 'transparent',
              cursor: 'pointer',
              transition: 'all 150ms ease-in-out',
              border: '1px solid',
              borderColor: isActive ? 'var(--accent-gold)' : 'var(--border-default)',
              boxShadow: isActive ? '0px 2px 4px rgba(0, 0, 0, 0.04)' : 'none',
              '&:hover': {
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--accent-gold)',
              },
              '&:hover .tab-text': {
                color: isActive ? 'var(--accent-gold)' : 'var(--text-main)',
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

export default SpecTabNavigation;