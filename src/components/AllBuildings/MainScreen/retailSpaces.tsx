import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Use the established consistent colors
const navyPrimary = '#1C2A44'; 
const navyMuted = '#334155';
const goldAccent = '#D4AF37';

const FeaturedCard: React.FC = () => (
  <Box
    sx={{
      margin: '2px',
      padding: '6px', 
      borderRadius: '6px',
      border: `1px solid rgba(10, 17, 32, 0.08)`, 
      borderTop: 'none', 
      position: 'relative',
      overflow: 'hidden', 
      boxShadow: '0 4px 16px rgba(10, 17, 32, 0.06)', 
      backgroundColor: '#FFFFFF',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex', 
      alignItems: 'stretch',
      height: 140, // Explicitly lock height so it doesn't expand vertically
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px', 
        background: 'linear-gradient(90deg, #1C2A44 0%, #3b5998 50%, #C89B3C 100%)',
        zIndex: 1,
      },
      '&:hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0 8px 24px rgba(10, 17, 32, 0.1), 0 2px 8px rgba(212, 175, 55, 0.15)',
      },
      // Target the view details overlay inside the image container on card hover
      '&:hover .featured-view-details': {
        opacity: 1,
        pointerEvents: 'auto',
      }
    }}
  >
    {/* Text Section (Left) */}
    <Box sx={{ flex: 1, padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box>
        <Typography
          sx={{ fontSize: '1rem', fontWeight: 700, color: navyPrimary, lineHeight: 1.2 }}
        >
          Retail Unit A105
        </Typography>
        <Typography
          sx={{ fontSize: '0.8rem', color: navyMuted, marginTop: '4px' }}
        >
          Ground Floor | 1,200 sq.ft.
        </Typography>

        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '10px',
            padding: '6px 10px',
            borderRadius: '4px',
            backgroundColor: '#F8FAFC',
            border: '1px solid rgba(10, 17, 32, 0.05)',
          }}
        >
          <Box
            sx={{
              width: '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: goldAccent,
            }}
          />
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: navyPrimary }}>
            Tenant: Starbucks
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Typography sx={{ fontSize: '0.7rem', color: navyMuted }}>Sale Value:</Typography>
        <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: navyPrimary }}>
          ₹ 2.5 Crore
        </Typography>
      </Box>
    </Box>

    {/* Image Section (Right) */}
    <Box
      sx={{
        width: 160, // Increased width exclusively
        borderRadius: '4px',
        overflow: 'hidden',
        flexShrink: 0,
        position: 'relative',
        backgroundColor: '#F8FAFC',
      }}
    >
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
        alt="Retail Unit A105"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Hover Overlay with "View Details" */}
      <Box
        className="featured-view-details"
        sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(28, 42, 68, 0.6)', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0, 
          pointerEvents: 'none', 
          transition: 'opacity 0.3s ease',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            borderRadius: '4px',
            padding: '6px 12px',
            backgroundColor: navyPrimary,
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            transition: 'background-color 0.2s ease',
            pointerEvents: 'auto', 
            '&:hover': { backgroundColor: '#111A2B' },
            '&:hover .chevron-icon': { display: 'none' },
            '&:hover .arrow-icon': { display: 'block' }
          }}
        >
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'inherit', letterSpacing: '0.02em' }}>
            View Details
          </Typography>
          <ChevronRightIcon className="chevron-icon" sx={{ fontSize: 16, display: 'block', color: '#FFFFFF' }} />
          <ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 16, display: 'none', color: '#FFFFFF' }} />
        </Box>
      </Box>
    </Box>
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
    tagIcon: <ApartmentIcon sx={{ fontSize: 12, color: '#FFFFFF' }} />,
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=400&q=80',
    floor: 'Second Floor',
    price: '₹ 2.5 Crore',
    priceLabel: 'Sale Value',
    imageCount: '1/6',
    justViewed: true,
  },
  {
    name: 'Retail Unit G08',
    tag: 'Retail',
    tagIcon: <ApartmentIcon sx={{ fontSize: 12, color: '#FFFFFF' }} />,
    image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=400&q=80',
    floor: 'Ground Floor',
    area: '950 sq.ft.',
    price: '₹ 1.8 Lakh/mo',
    priceLabel: 'Rent',
    imageCount: '1/4',
  },
];

const UnitCard: React.FC<{ unit: UnitCardData }> = ({ unit }) => (
  <Box
    sx={{
      borderRadius: '6px',
      overflow: 'hidden',
      border: '1px solid rgba(10, 17, 32, 0.08)',
      boxShadow: '0 4px 12px rgba(10, 17, 32, 0.05)',
      backgroundColor: '#FFFFFF',
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 20px rgba(10, 17, 32, 0.08), 0 4px 8px rgba(212, 175, 55, 0.1)',
      }
    }}
  >
    <Box sx={{ position: 'relative', height: 110, backgroundColor: '#F8FAFC' }}>
      <Box
        component="img"
        src={unit.image}
        alt={unit.name}
        sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {unit.justViewed && (
        <Box
          sx={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(28, 42, 68, 0.45)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', zIndex: 2, 
          }}
        >
          <Typography
            sx={{
              fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', fontStyle: 'italic',
              letterSpacing: '0.02em', textShadow: '0 2px 4px rgba(0,0,0,0.5)', 
            }}
          >
            Just Viewed
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          position: 'absolute', top: '50%', left: '4px', transform: 'translateY(-50%)',
          backgroundColor: 'rgba(10, 17, 32, 0.4)', borderRadius: '50%', p: '2px', cursor: 'pointer', zIndex: 1,
          transition: 'background-color 0.2s ease', '&:hover': { backgroundColor: 'rgba(10, 17, 32, 0.8)' }
        }}
      >
        <ChevronLeftIcon sx={{ color: '#FFFFFF', fontSize: 16 }} />
      </Box>
      <Box
        sx={{
          position: 'absolute', top: '50%', right: '4px', transform: 'translateY(-50%)',
          backgroundColor: 'rgba(10, 17, 32, 0.4)', borderRadius: '50%', p: '2px', cursor: 'pointer', zIndex: 1,
          transition: 'background-color 0.2s ease', '&:hover': { backgroundColor: 'rgba(10, 17, 32, 0.8)' }
        }}
      >
        <ChevronRightIcon sx={{ color: '#FFFFFF', fontSize: 16 }} />
      </Box>

      {unit.imageCount && (
        <Box
          sx={{
            position: 'absolute', bottom: '4px', right: '4px', padding: '2px 6px',
            borderRadius: '4px', backgroundColor: 'rgba(28, 42, 68, 0.9)', zIndex: 1,
          }}
        >
          <Typography sx={{ fontSize: '0.65rem', color: goldAccent, fontWeight: 700 }}>
            {unit.imageCount}
          </Typography>
        </Box>
      )}
    </Box>

    <Box sx={{ padding: '8px' }}>
      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: navyPrimary, lineHeight: 1.2 }}>
        {unit.name}
      </Typography>
      <Stack direction="row" alignItems="center" spacing="4px" sx={{ marginTop: '4px' }}>
        <LocationOnIcon sx={{ fontSize: 12, color: goldAccent }} />
        <Typography sx={{ fontSize: '0.65rem', color: navyMuted }}>
          {unit.floor}
          {unit.area ? ` | ${unit.area}` : ''}
        </Typography>
      </Stack>

      <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: navyPrimary, marginTop: '8px' }}>
        {unit.price}
      </Typography>
      <Typography sx={{ fontSize: '0.6rem', color: navyMuted }}>
        {unit.priceLabel}
      </Typography>

      <Box
        sx={{
          marginTop: '10px',
          borderRadius: '4px',
          padding: '4px 8px',
          backgroundColor: navyPrimary, 
          color: '#FFFFFF',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          transition: 'all 0.2s ease',
          '&:hover': { backgroundColor: '#111A2B' },
          '&:hover .chevron-icon': { display: 'none' },
          '&:hover .arrow-icon': { display: 'block' }
        }}
      >
        <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: 'inherit', letterSpacing: '0.02em' }}>
          View Details
        </Typography>
        <ChevronRightIcon className="chevron-icon" sx={{ fontSize: 16, display: 'block', color: '#FFFFFF' }} />
        <ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 16, display: 'none', color: '#FFFFFF' }} />
      </Box>
    </Box>
  </Box>
);

const RetailSpaces: React.FC = () => {
  return (
    <Stack spacing="8px" sx={{ padding: '4px' }}>
      <FeaturedCard />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
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