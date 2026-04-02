import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/* ================ Featured Horizontal Card ================ */

const FeaturedCard: React.FC = () => (
  <Box
    sx={{
      mx: 2,
      mb: 1.5,
      p: 1.5,
      borderRadius: '12px',
      border: '1px solid #eee',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
    }}
  >
    <Stack direction="row" spacing={1.5}>
      {/* Left info */}
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{ fontSize: '14px', fontWeight: 700, color: '#111', lineHeight: 1.3 }}
        >
          Retail Unit A105
        </Typography>
        <Typography
          sx={{ fontSize: '11px', color: '#888', mt: 0.25 }}
        >
          Ground Floor | 1,200 sq.ft.
        </Typography>

        {/* Tenant badge */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            mt: 1,
            px: 1.25,
            py: 0.35,
            borderRadius: '16px',
            backgroundColor: '#e8f5e9',
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#4caf50',
            }}
          />
          <Typography sx={{ fontSize: '10px', fontWeight: 600, color: '#2e7d32' }}>
            Tenant: Starbucks
          </Typography>
        </Box>

        {/* Value Row */}
        <Stack direction="row" spacing={2} sx={{ mt: 1.25 }}>
          <Box>
            <Typography sx={{ fontSize: '10px', color: '#aaa' }}>Sale Value:</Typography>
            <Typography sx={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>
              ₹ 2.5 Crore
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '10px', color: '#aaa' }}>
              <Stack direction="row" alignItems="center" spacing={0.3}>
                <span>8% Expected Yield</span>
                <TrendingUpIcon sx={{ fontSize: 12, color: '#1a237e' }} />
              </Stack>
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Right image */}
      <Box
        sx={{
          width: 100,
          height: 90,
          borderRadius: '10px',
          overflow: 'hidden',
          flexShrink: 0,
          alignSelf: 'center',
        }}
      >
        <Box
          component="img"
          src="/images/mainscreen/retail-a105.png"
          alt="Retail Unit A105"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Stack>
  </Box>
);

/* ================ Standard Vertical Card ================ */

interface UnitCardData {
  name: string;
  tag: string;
  tagIcon: React.ReactNode;
  image: string;
  floor: string;
  area?: string;
  price: string;
  priceLabel: string;
  imageCount?: string;
  justViewed?: boolean;
}

const retailCards: UnitCardData[] = [
  {
    name: 'Retail Unit A215',
    tag: 'Retail',
    tagIcon: <ApartmentIcon sx={{ fontSize: 10, color: '#fff' }} />,
    image: '/images/mainscreen/retail-a215.png',
    floor: 'Second Floor',
    price: '₹ 2.5 Crore',
    priceLabel: 'Sale Value',
    imageCount: '1/6',
    justViewed: true,
  },
  {
    name: 'Office Unit B508',
    tag: 'Office',
    tagIcon: <BusinessIcon sx={{ fontSize: 10, color: '#fff' }} />,
    image: '/images/mainscreen/office-b508.png',
    floor: '5th Floor',
    area: '1,500 sq.ft.',
    price: '₹ 1.9 Crore',
    priceLabel: 'Rent',
    imageCount: '1/6',
  },
];

const UnitCard: React.FC<{ unit: UnitCardData }> = ({ unit }) => (
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

      {/* Tag badge */}
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
        {unit.tagIcon}
        <Typography sx={{ fontSize: '9px', fontWeight: 600, color: '#fff' }}>
          {unit.tag}
        </Typography>
      </Box>

      {/* Image count */}
      {unit.imageCount && (
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
      )}
    </Box>

    {/* Info */}
    <Box sx={{ p: 1.25 }}>
      <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#111', lineHeight: 1.3 }}>
        {unit.name}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={0.3} sx={{ mt: 0.25 }}>
        <LocationOnIcon sx={{ fontSize: 10, color: '#aaa' }} />
        <Typography sx={{ fontSize: '10px', color: '#888' }}>
          {unit.floor}
          {unit.area ? ` | ${unit.area}` : ''}
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

/* ================ RetailSpaces Main Component ================ */

const RetailSpaces: React.FC = () => {
  return (
    <Stack spacing={1.5}>
      {/* Featured Card */}
      <FeaturedCard />

      {/* Cards Grid */}
      <Box
        sx={{
          px: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 1,
        }}
      >
        {retailCards.map((unit, idx) => (
          <UnitCard key={idx} unit={unit} />
        ))}
      </Box>
    </Stack>
  );
};

export default RetailSpaces;
