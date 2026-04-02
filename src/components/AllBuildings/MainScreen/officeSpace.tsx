import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface OfficeUnitData {
  name: string;
  image: string;
  floor: string;
  area: string;
  price: string;
  priceLabel: string;
  imageCount: string;
  justViewed?: boolean;
}

const officeUnits: OfficeUnitData[] = [
  {
    name: 'Office Unit B508',
    image: '/images/mainscreen/office-b508.png',
    floor: '5th Floor',
    area: '1,500 sq.ft.',
    price: '₹ 1.9 Crore',
    priceLabel: 'Rent',
    imageCount: '1/6',
  },
  {
    name: 'Office Unit C1009',
    image: '/images/mainscreen/office-c1009.png',
    floor: '10th Floor',
    area: '2,000 sq.ft.',
    price: '₹ 2.8 Crore',
    priceLabel: 'Rent',
    imageCount: '1/6',
    justViewed: true,
  },
  {
    name: 'Office Unit A712',
    image: '/images/mainscreen/office-a712.png',
    floor: '7th Floor',
    area: '800 sq.ft.',
    price: '₹ 90 Lakh',
    priceLabel: 'Sale Value',
    imageCount: '1/6',
  },
];

const OfficeCard: React.FC<{ unit: OfficeUnitData }> = ({ unit }) => (
  <Box
    sx={{
      borderRadius: '4px',
      overflow: 'hidden',
      border: '1px solid var(--border-default)',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
      backgroundColor: 'var(--bg-card)',
      transition: 'all 150ms ease-in-out',
      '&:hover': {
        borderColor: 'var(--accent-gold)',
        transform: 'translateY(-2px)',
      }
    }}
  >
    <Box sx={{ position: 'relative', height: 110, backgroundColor: 'var(--bg-app)' }}>
      <Box
        component="img"
        src={unit.image}
        alt={unit.name}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {unit.justViewed && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(15, 26, 44, 0.85) 0%, transparent 70%)',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              top: '4px',
              left: '4px',
              fontSize: '0.65rem',
              fontWeight: 600,
              color: 'var(--accent-gold)',
              fontStyle: 'italic',
            }}
          >
            Just Viewed
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          position: 'absolute',
          bottom: '4px',
          left: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px',
          borderRadius: '4px',
          backgroundColor: 'var(--bg-header)',
        }}
      >
        <BusinessIcon sx={{ fontSize: 12, color: 'var(--text-inverse)' }} />
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-inverse)' }}>
          Office
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: '4px',
          right: '4px',
          padding: '2px 4px',
          borderRadius: '4px',
          backgroundColor: 'var(--bg-header)',
        }}
      >
        <Typography sx={{ fontSize: '0.65rem', color: 'var(--text-inverse)', fontWeight: 600 }}>
          {unit.imageCount}
        </Typography>
      </Box>
    </Box>

    <Box sx={{ padding: '4px' }}>
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.2 }}>
        {unit.name}
      </Typography>
      <Stack direction="row" alignItems="center" spacing="4px" sx={{ marginTop: '4px' }}>
        <LocationOnIcon sx={{ fontSize: 12, color: 'var(--text-muted)' }} />
        <Typography sx={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
          {unit.floor} | {unit.area}
        </Typography>
      </Stack>

      <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '4px' }}>
        {unit.price}
      </Typography>
      <Typography sx={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
        {unit.priceLabel}
      </Typography>

      <Box
        sx={{
          marginTop: '4px',
          borderRadius: '4px',
          padding: '4px',
          backgroundColor: 'var(--bg-header)',
          border: '1px solid transparent',
          transition: 'all 150ms ease-in-out',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          '&:hover': {
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--accent-gold)',
          },
        }}
      >
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-inverse)' }}>
          View Details
        </Typography>
        <ArrowForwardIcon sx={{ fontSize: 12, color: 'var(--text-inverse)' }} />
      </Box>
    </Box>
  </Box>
);

const OfficeSpace: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '4px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4px',
      }}
    >
      {officeUnits.map((unit, idx) => (
        <OfficeCard key={idx} unit={unit} />
      ))}
    </Box>
  );
};

export default OfficeSpace;