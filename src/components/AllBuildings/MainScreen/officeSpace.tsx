import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Use the established consistent colors
const navyPrimary = '#1C2A44'; 
const navyMuted = '#334155';
const goldAccent = '#D4AF37';

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
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
    floor: '5th Floor',
    area: '1,500 sq.ft.',
    price: '₹ 1.9 Crore',
    priceLabel: 'Rent',
    imageCount: '1/6',
  },
  {
    name: 'Office Unit C1009',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    floor: '10th Floor',
    area: '2,000 sq.ft.',
    price: '₹ 2.8 Crore',
    priceLabel: 'Rent',
    imageCount: '1/6',
    justViewed: true,
  },
  {
    name: 'Office Unit A712',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
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
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Just Viewed - Centered overlay */}
      {unit.justViewed && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(28, 42, 68, 0.45)', // Dimmed overlay
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2, // Above the arrows
          }}
        >
          <Typography
            sx={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#FFFFFF',
              fontStyle: 'italic',
              letterSpacing: '0.02em',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)', // Gives text pop without needing a solid box
            }}
          >
            Just Viewed
          </Typography>
        </Box>
      )}

      {/* Image Slider Controls (Left/Right Arrows) */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '4px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(10, 17, 32, 0.4)',
          borderRadius: '50%',
          display: 'flex',
          padding: '2px',
          cursor: 'pointer',
          zIndex: 1,
          transition: 'background-color 0.2s ease',
          '&:hover': { backgroundColor: 'rgba(10, 17, 32, 0.8)' }
        }}
      >
        <ChevronLeftIcon sx={{ color: '#FFFFFF', fontSize: 16 }} />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '4px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(10, 17, 32, 0.4)',
          borderRadius: '50%',
          display: 'flex',
          padding: '2px',
          cursor: 'pointer',
          zIndex: 1,
          transition: 'background-color 0.2s ease',
          '&:hover': { backgroundColor: 'rgba(10, 17, 32, 0.8)' }
        }}
      >
        <ChevronRightIcon sx={{ color: '#FFFFFF', fontSize: 16 }} />
      </Box>

      {/* Image Count - Gold Color */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '4px',
          right: '4px',
          padding: '2px 6px',
          borderRadius: '4px',
          backgroundColor: 'rgba(28, 42, 68, 0.9)',
          zIndex: 1,
        }}
      >
        <Typography sx={{ fontSize: '0.65rem', color: goldAccent, fontWeight: 700 }}>
          {unit.imageCount}
        </Typography>
      </Box>
    </Box>

    <Box sx={{ padding: '8px' }}>
      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: navyPrimary, lineHeight: 1.2 }}>
        {unit.name}
      </Typography>
      <Stack direction="row" alignItems="center" spacing="4px" sx={{ marginTop: '4px' }}>
        <LocationOnIcon sx={{ fontSize: 12, color: goldAccent }} />
        <Typography sx={{ fontSize: '0.65rem', color: navyMuted }}>
          {unit.floor} | {unit.area}
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
          gap: '16px',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: '#111A2B', 
          },
          '&:hover .chevron-icon': {
            display: 'none',
          },
          '&:hover .arrow-icon': {
            display: 'block',
          }
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

const OfficeSpace: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '4px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
      }}
    >
      {officeUnits.map((unit, idx) => (
        <OfficeCard key={idx} unit={unit} />
      ))}
    </Box>
  );
};

export default OfficeSpace;