import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
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
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #eee',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
    }}
  >
    {/* Image */}
    <Box sx={{ position: 'relative', height: 110 }}>
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

      {/* Just Viewed overlay */}
      {unit.justViewed && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, transparent 60%)',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              top: 10,
              left: 8,
              fontSize: '10px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.9)',
              fontStyle: 'italic',
            }}
          >
            Just Viewed
          </Typography>
        </Box>
      )}

      {/* Office Tag */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 8,
          left: 8,
          display: 'flex',
          alignItems: 'center',
          gap: 0.3,
          px: 0.75,
          py: 0.3,
          borderRadius: '6px',
          backgroundColor: 'rgba(26, 35, 126, 0.85)',
        }}
      >
        <BusinessIcon sx={{ fontSize: 10, color: '#fff' }} />
        <Typography sx={{ fontSize: '9px', fontWeight: 600, color: '#fff' }}>
          Office
        </Typography>
      </Box>

      {/* Image count */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 8,
          right: 8,
          px: 0.6,
          py: 0.2,
          borderRadius: '4px',
          backgroundColor: 'rgba(0,0,0,0.55)',
        }}
      >
        <Typography sx={{ fontSize: '9px', color: '#fff', fontWeight: 500 }}>
          {unit.imageCount}
        </Typography>
      </Box>
    </Box>

    {/* Info */}
    <Box sx={{ p: 1.25 }}>
      <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#111', lineHeight: 1.3 }}>
        {unit.name}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={0.3} sx={{ mt: 0.25 }}>
        <LocationOnIcon sx={{ fontSize: 10, color: '#aaa' }} />
        <Typography sx={{ fontSize: '10px', color: '#888' }}>
          {unit.floor} | {unit.area}
        </Typography>
      </Stack>

      <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#111', mt: 0.75 }}>
        {unit.price}
      </Typography>
      <Typography sx={{ fontSize: '9px', color: '#aaa', mt: -0.25 }}>
        {unit.priceLabel}
      </Typography>

      {/* View Details button */}
      <Button
        variant="contained"
        fullWidth
        endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
        sx={{
          mt: 1,
          borderRadius: '8px',
          textTransform: 'none',
          fontSize: '11px',
          fontWeight: 600,
          py: 0.65,
          backgroundColor: '#1a237e',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#283593',
            boxShadow: 'none',
          },
        }}
      >
        View Details
      </Button>
    </Box>
  </Box>
);

const OfficeSpace: React.FC = () => {
  return (
    <Box
      sx={{
        px: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1,
      }}
    >
      {officeUnits.map((unit, idx) => (
        <OfficeCard key={idx} unit={unit} />
      ))}
    </Box>
  );
};

export default OfficeSpace;
