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
    icon: <ApartmentIcon sx={{ fontSize: 20, color: '#1a237e' }} />,
    value: '24',
    label: 'Units',
  },
  {
    icon: <SquareFootIcon sx={{ fontSize: 20, color: '#1a237e' }} />,
    value: '25L sq.ft.',
    label: 'Overall Area',
  },
  {
    icon: <LayersIcon sx={{ fontSize: 20, color: '#1a237e' }} />,
    value: '15',
    label: 'Floors',
  },
  {
    icon: <LocalParkingIcon sx={{ fontSize: 20, color: '#1a237e' }} />,
    value: '400+',
    label: 'Parking',
  },
];

const TopSection: React.FC = () => {
  return (
    <Box>
      {/* Hero Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 200,
          overflow: 'hidden',
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

        {/* Heart / Favourite Icon */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 34,
            height: 34,
            borderRadius: '10px',
            backgroundColor: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            transition: 'transform 0.15s ease',
            '&:hover': {
              transform: 'scale(1.08)',
            },
          }}
        >
          <FavoriteBorderIcon sx={{ fontSize: 18, color: '#1a237e' }} />
        </Box>

        {/* Bottom gradient */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(255,255,255,0.7) 0%, transparent 100%)',
          }}
        />
      </Box>

      {/* Title Section */}
      <Box sx={{ px: 2, pt: 1.5, pb: 0.5 }}>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 800,
            color: '#111',
            lineHeight: 1.2,
            letterSpacing: '-0.3px',
          }}
        >
          XYZ Plaza
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 400,
            color: '#777',
            mt: 0.25,
          }}
        >
          Premium Commercial Property
        </Typography>
      </Box>

      {/* Stats Card */}
      <Box sx={{ px: 2, pt: 1, pb: 1.5 }}>
        <Box
          sx={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #eee',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            py: 1.25,
            px: 1,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <Stack alignItems="center" spacing={0.25} sx={{ flex: 1 }}>
                {stat.icon}
                <Typography
                  sx={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#111',
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '9px',
                    color: '#999',
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
                    height: 36,
                    backgroundColor: '#eee',
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
