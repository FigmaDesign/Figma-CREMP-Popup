import React from 'react';
import { Box, Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';

type TabType = 'retail' | 'office' | 'coworking';

interface TabNavigationProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType) => void;
}

interface TabDef {
  id: TabType;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabDef[] = [
  {
    id: 'retail',
    label: 'Retail',
    icon: <ApartmentIcon sx={{ fontSize: 15 }} />,
  },
  {
    id: 'office',
    label: 'Office',
    icon: <BusinessIcon sx={{ fontSize: 15 }} />,
  },
  {
    id: 'coworking',
    label: 'Co-working',
    icon: <GroupsIcon sx={{ fontSize: 15 }} />,
  },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ selectedTab, onTabChange }) => {
  return (
    <Box
      sx={{
        px: 2,
        pb: 1.5,
        display: 'flex',
        gap: 0.75,
        justifyContent: 'flex-start',
      }}
    >
      {tabs.map((tab) => {
        const isActive = selectedTab === tab.id;
        return (
          <Box
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              px: 2,
              py: 0.85,
              borderRadius: '22px',
              backgroundColor: isActive ? '#1a237e' : 'transparent',
              border: isActive ? '1px solid #1a237e' : '1px solid #d0d0d0',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: isActive ? '#283593' : '#f5f5f5',
              },
            }}
          >
            <Box
              sx={{
                color: isActive ? '#FFFFFF' : '#555',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {tab.icon}
            </Box>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#FFFFFF' : '#555',
                whiteSpace: 'nowrap',
                lineHeight: 1,
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
