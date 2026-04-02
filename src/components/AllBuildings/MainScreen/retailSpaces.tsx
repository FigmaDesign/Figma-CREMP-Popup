import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FeaturedCard: React.FC = () => (
  <Box
    sx={{
      margin: '4px',
      padding: '4px',
      borderRadius: '4px',
      border: '1px solid var(--border-default)',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
      backgroundColor: 'var(--bg-card)',
      transition: 'all 150ms ease-in-out',
      '&:hover': {
        borderColor: 'var(--accent-gold)',
      }
    }}
  >
    <Stack direction="row" spacing="4px">
      <Box sx={{ flex: 1, padding: '4px' }}>
        <Typography
          sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.2 }}
        >
          Retail Unit A105
        </Typography>
        <Typography
          sx={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}
        >
          Ground Floor | 1,200 sq.ft.
        </Typography>

        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            marginTop: '4px',
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: 'var(--bg-app)',
          }}
        >
          <Box
            sx={{
              width: '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: 'var(--accent-gold)',
            }}
          />
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-main)' }}>
            Tenant: Starbucks
          </Typography>
        </Box>

        <Stack direction="row" spacing="8px" sx={{ marginTop: '8px' }}>
          <Box sx={{ padding: '4px' }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Sale Value:</Typography>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
              ₹ 2.5 Crore
            </Typography>
          </Box>
          <Box sx={{ padding: '4px' }}>
            <Stack direction="row" alignItems="center" spacing="4px">
              <Typography component="span" sx={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                8% Expected Yield
              </Typography>
              <TrendingUpIcon sx={{ fontSize: 12, color: 'var(--accent-gold)' }} />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box
        sx={{
          width: 100,
          borderRadius: '4px',
          overflow: 'hidden',
          flexShrink: 0,
          backgroundColor: 'var(--bg-app)',
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
    tagIcon: <ApartmentIcon sx={{ fontSize: 12, color: 'var(--text-inverse)' }} />,
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
    tagIcon: <BusinessIcon sx={{ fontSize: 12, color: 'var(--text-inverse)' }} />,
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
        {unit.tagIcon}
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-inverse)' }}>
          {unit.tag}
        </Typography>
      </Box>

      {unit.imageCount && (
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
      )}
    </Box>

    <Box sx={{ padding: '4px' }}>
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.2 }}>
        {unit.name}
      </Typography>
      <Stack direction="row" alignItems="center" spacing="4px" sx={{ marginTop: '4px' }}>
        <LocationOnIcon sx={{ fontSize: 12, color: 'var(--text-muted)' }} />
        <Typography sx={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
          {unit.floor}
          {unit.area ? ` | ${unit.area}` : ''}
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

const RetailSpaces: React.FC = () => {
  return (
    <Stack spacing="4px" sx={{ padding: '4px' }}>
      <FeaturedCard />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4px',
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