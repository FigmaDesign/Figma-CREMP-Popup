import React, { useState } from 'react';
import { Box, Typography, Stack, Tabs, Tab } from '@mui/material';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import BoltIcon from '@mui/icons-material/Bolt';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ShieldIcon from '@mui/icons-material/Shield';
import DomainIcon from '@mui/icons-material/Domain';
import DoneIcon from '@mui/icons-material/Done';

interface FacilityCategory {
  title: string;
  icon: React.ReactNode;
  items: { label: string; value: string | boolean }[];
}

const facilityCategories: FacilityCategory[] = [
  {
    title: 'Parking',
    icon: <LocalParkingIcon sx={{ fontSize: 16 }} />,
    items: [
      { label: 'Dedicated Parking', value: 'Yes' },
      { label: 'Number of Slots', value: '4' },
      { label: 'Visitor Parking', value: 'Yes' },
    ],
  },
  {
    title: 'Power',
    icon: <BoltIcon sx={{ fontSize: 16 }} />,
    items: [
      { label: 'Power Backup', value: 'Yes' },
      { label: 'Power Load', value: '15 kW' },
      { label: 'Power Phase', value: '3 Phase' },
    ],
  },
  {
    title: 'Water',
    icon: <WaterDropIcon sx={{ fontSize: 16 }} />,
    items: [
      { label: 'Water Connection', value: 'Yes' },
      { label: '24/7 Availability', value: 'Yes' },
    ],
  },
  {
    title: 'Safety',
    icon: <ShieldIcon sx={{ fontSize: 16 }} />,
    items: [
      { label: 'Fire Sprinklers', value: 'Yes' },
      { label: 'Fire Extinguishers', value: 'Yes' },
    ],
  },
  {
    title: 'Building Amenities',
    icon: <DomainIcon sx={{ fontSize: 16 }} />,
    items: [
      { label: 'Lift', value: 'Yes' },
      { label: 'Security', value: 'Yes' },
      { label: 'CCTV', value: 'Yes' },
      { label: 'Maintenance Staff', value: 'Yes' },
    ],
  },
];

const Facilities: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const activeCategory = facilityCategories[tabValue];

  return (
    <Box sx={{ padding: '4px', textAlign: 'left' }}>
      <Typography
        sx={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--text-main)',
          marginBottom: '4px',
        }}
      >
        Building Facilities
      </Typography>

      <Tabs 
        value={tabValue} 
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons={false}
        sx={{ 
          minHeight: '28px',
          marginBottom: '4px',
          borderBottom: '1px solid var(--border-default)',
          '& .MuiTab-root': {
            minHeight: '28px',
            textTransform: 'none',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '4px',
            color: 'var(--text-muted)',
            transition: 'all 150ms ease-in-out',
          },
          '& .Mui-selected': {
            color: 'var(--accent-gold)',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'var(--accent-gold)',
            height: '2px',
          }
        }}
      >
        {facilityCategories.map((category, idx) => (
          <Tab key={idx} label={category.title} disableRipple />
        ))}
      </Tabs>

      {activeCategory && (
        <Box
          sx={{
            padding: '4px',
            borderRadius: '4px',
            border: '1px solid var(--border-default)',
            backgroundColor: 'var(--bg-card)',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
            transition: 'all 150ms ease-in-out',
          }}
        >
          <Stack direction="row" alignItems="center" spacing="4px" sx={{ marginBottom: '4px' }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '4px',
                backgroundColor: 'var(--bg-app)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)',
              }}
            >
              {activeCategory.icon}
            </Box>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
              {activeCategory.title}
            </Typography>
          </Stack>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {activeCategory.items.map((item, i) => (
              <Box key={i} sx={{ width: 'calc(50% - 2px)' }}>
                <Stack direction="row" alignItems="flex-start" spacing="4px">
                  {item.value === 'Yes' ? (
                    <DoneIcon sx={{ fontSize: 12, color: 'var(--accent-gold)', marginTop: '2px' }} />
                  ) : (
                    <Box sx={{ width: 12, height: 12, display: 'inline-block' }} />
                  )}
                  <Box>
                    <Typography sx={{ fontSize: '0.65rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>
                      {item.label}
                    </Typography>
                    {item.value !== 'Yes' && item.value !== 'No' && (
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {item.value}
                      </Typography>
                    )}
                  </Box>
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Facilities;