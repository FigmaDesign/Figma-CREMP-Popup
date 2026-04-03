import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LayersIcon from '@mui/icons-material/Layers';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <ApartmentIcon sx={{ fontSize: 16, color: 'var(--accent-gold)' }} />,
    value: '24',
    label: 'Units',
  },
  {
    icon: <SquareFootIcon sx={{ fontSize: 16, color: 'var(--accent-gold)' }} />,
    value: '25L sq.ft.',
    label: 'Overall Area',
  },
  {
    icon: <LayersIcon sx={{ fontSize: 16, color: 'var(--accent-gold)' }} />,
    value: '15',
    label: 'Floors',
  },
  {
    icon: <LocalParkingIcon sx={{ fontSize: 16, color: 'var(--accent-gold)' }} />,
    value: '400+',
    label: 'Parking',
  },
];

const TopSection: React.FC = () => {
  return (
    <Box sx={{ padding: '4px' }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 200,
          overflow: 'hidden',
          borderRadius: '4px',
          border: '1px solid var(--border-default)',
        }}
      >
        <Box
          component="img"
          src="/images/mainscreen/hero.png"
          alt="XYZ Plaza"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: 32,
            height: 32,
            borderRadius: '4px',
            backgroundColor: 'var(--bg-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid var(--border-default)',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
            transition: 'all 150ms ease-in-out',
            '&:hover': {
              borderColor: 'var(--accent-gold)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <FavoriteBorderIcon sx={{ fontSize: 16, color: 'var(--text-main)' }} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(15, 26, 44, 0.85) 0%, transparent 100%)',
          }}
        />
        
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: '8px', 
            left: '8px', 
            padding: '4px' 
          }}
        >
          <Typography
            sx={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--text-inverse)',
              lineHeight: 1.2,
            }}
          >
            XYZ Plaza
          </Typography>

        </Box>
      </Box>

      <Box sx={{ paddingTop: '4px' }}>
        <Box
          sx={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '4px',
            border: '1px solid var(--border-default)',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
            padding: '8px 4px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <Stack alignItems="center" spacing="4px" sx={{ flex: 1 }}>
                {stat.icon}
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {stat.label}
                </Typography>
              </Stack>
              {idx < stats.length - 1 && (
                <Box
                  sx={{
                    width: '1px',
                    height: 32,
                    backgroundColor: 'var(--border-default)',
                    flexShrink: 0,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TopSection;