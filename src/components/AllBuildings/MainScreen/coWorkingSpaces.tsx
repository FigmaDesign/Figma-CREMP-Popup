import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const navyPrimary = '#1C2A44'; 
const navyMuted = '#334155';
const goldAccent = '#D4AF37';

const FeaturedCoWorking: React.FC = () => (
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
      }
    }}
  >
    <Stack direction="row" sx={{ display: 'flex', alignItems: 'stretch' }}>
      <Box sx={{ flex: 1, padding: '4px' }}>
        <Typography
          sx={{ fontSize: '0.9rem', fontWeight: 700, color: navyPrimary, lineHeight: 1.2, letterSpacing: '0.01em' }}
        >
          Co-Work Hub 305
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: navyMuted, letterSpacing: '0.01em', mt: '2px' }}>
          3rd Floor <span style={{ color: goldAccent }}>•</span> 50 Seats
        </Typography>

        <Stack direction="row" spacing="8px" sx={{ marginTop: '6px' }}>
          <Stack direction="row" alignItems="center" spacing="4px">
            <WifiIcon sx={{ fontSize: 14, color: goldAccent }} />
            <Typography sx={{ fontSize: '0.6rem', color: navyMuted, letterSpacing: '0.02em' }}>High-Speed</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing="4px">
            <LocalCafeIcon sx={{ fontSize: 14, color: goldAccent }} />
            <Typography sx={{ fontSize: '0.6rem', color: navyMuted, letterSpacing: '0.02em' }}>Cafeteria</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing="4px">
            <MeetingRoomIcon sx={{ fontSize: 14, color: goldAccent }} />
            <Typography sx={{ fontSize: '0.6rem', color: navyMuted, letterSpacing: '0.02em' }}>Meeting</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing="12px" sx={{ marginTop: '10px' }}>
          <Box>
            <Typography sx={{ fontSize: '0.6rem', color: navyMuted, letterSpacing: '0.02em' }}>Per Seat</Typography>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: navyPrimary }}>
              ₹ 8,500/mo
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.6rem', color: navyMuted, letterSpacing: '0.02em' }}>Full Floor</Typography>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: navyPrimary }}>
              ₹ 3.5 Lakh/mo
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box
        sx={{
          width: 80,
          borderRadius: '4px',
          overflow: 'hidden',
          flexShrink: 0,
          backgroundColor: '#F8FAFC', 
          border: '1px solid rgba(10, 17, 32, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <GroupsIcon sx={{ fontSize: 28, color: goldAccent }} />
      </Box>
    </Stack>
  </Box>
);

interface CoWorkUnit {
  name: string;
  floor: string;
  seats: string;
  price: string;
  priceLabel: string;
}

const coWorkUnits: CoWorkUnit[] = [
  {
    name: 'Flex Desk Zone',
    floor: '4th Floor',
    seats: '30 Seats',
    price: '₹ 6,000/mo',
    priceLabel: 'Per Seat',
  },
  {
    name: 'Private Suite 601',
    floor: '6th Floor',
    seats: '10 Seats',
    price: '₹ 1.2 Lakh/mo',
    priceLabel: 'Full Suite',
  },
  {
    name: 'Hot Desk Area',
    floor: '2nd Floor',
    seats: '80 Seats',
    price: '₹ 4,500/mo',
    priceLabel: 'Per Seat',
  },
];

const CoWorkCard: React.FC<{ unit: CoWorkUnit }> = ({ unit }) => (
  <Box
    sx={{
      borderRadius: '6px',
      overflow: 'hidden',
      backgroundColor: '#FFFFFF', 
      border: '1px solid rgba(10, 17, 32, 0.08)',
      boxShadow: '0 4px 12px rgba(10, 17, 32, 0.05)',
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 20px rgba(10, 17, 32, 0.08), 0 4px 8px rgba(212, 175, 55, 0.1)',
      }
    }}
  >
    <Box
      sx={{
        height: 110, 
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#F8FAFC',
      }}
    >
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80"
        alt={unit.name}
        sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </Box>

    <Box sx={{ padding: '8px' }}>
      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: navyPrimary, lineHeight: 1.2 }}>
        {unit.name}
      </Typography>
      <Stack direction="row" alignItems="center" spacing="4px" sx={{ marginTop: '4px' }}>
        <LocationOnIcon sx={{ fontSize: 12, color: goldAccent }} />
        <Typography sx={{ fontSize: '0.65rem', color: navyMuted }}>
          {unit.floor} <span style={{ color: goldAccent }}>•</span> {unit.seats}
        </Typography>
      </Stack>

      <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '8px', color: navyPrimary }}>
        {unit.price}
      </Typography>
      <Typography sx={{ fontSize: '0.6rem', color: navyMuted, letterSpacing: '0.02em' }}>
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
              gap: '20px',
          },
          '&:hover .arrow-icon': {
            display: 'block',
             gap: '20px',
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

const CoWorkingSpaces: React.FC = () => {
  return (
    <Stack spacing="8px" sx={{ padding: '4px' }}> 
      <FeaturedCoWorking />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
        }}
      >
        {coWorkUnits.map((unit, idx) => (
          <CoWorkCard key={idx} unit={unit} />
        ))}
      </Box>
    </Stack>
  );
};

export default CoWorkingSpaces;