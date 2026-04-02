import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

/* ================ Featured Co-working Card ================ */

const FeaturedCoWorking: React.FC = () => (
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
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{ fontSize: '14px', fontWeight: 700, color: '#111', lineHeight: 1.3 }}
        >
          Co-Work Hub 305
        </Typography>
        <Typography sx={{ fontSize: '11px', color: '#888', mt: 0.25 }}>
          3rd Floor | 50 Seats
        </Typography>

        {/* Amenities */}
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Stack direction="row" alignItems="center" spacing={0.3}>
            <WifiIcon sx={{ fontSize: 12, color: '#1a237e' }} />
            <Typography sx={{ fontSize: '9px', color: '#555' }}>High-Speed</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.3}>
            <LocalCafeIcon sx={{ fontSize: 12, color: '#1a237e' }} />
            <Typography sx={{ fontSize: '9px', color: '#555' }}>Cafeteria</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.3}>
            <MeetingRoomIcon sx={{ fontSize: 12, color: '#1a237e' }} />
            <Typography sx={{ fontSize: '9px', color: '#555' }}>Meeting</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ mt: 1.25 }}>
          <Box>
            <Typography sx={{ fontSize: '10px', color: '#aaa' }}>Per Seat:</Typography>
            <Typography sx={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>
              ₹ 8,500/mo
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '10px', color: '#aaa' }}>Full Floor:</Typography>
            <Typography sx={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>
              ₹ 3.5 Lakh/mo
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box
        sx={{
          width: 100,
          height: 90,
          borderRadius: '10px',
          overflow: 'hidden',
          flexShrink: 0,
          alignSelf: 'center',
          backgroundColor: '#e8eaf6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <GroupsIcon sx={{ fontSize: 36, color: '#1a237e' }} />
      </Box>
    </Stack>
  </Box>
);

/* ================ Co-Working Unit Card ================ */

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
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #eee',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
    }}
  >
    {/* Image placeholder */}
    <Box
      sx={{
        height: 90,
        backgroundColor: '#e8eaf6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <GroupsIcon sx={{ fontSize: 32, color: '#1a237e', opacity: 0.5 }} />

      {/* Tag */}
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
        <GroupsIcon sx={{ fontSize: 10, color: '#fff' }} />
        <Typography sx={{ fontSize: '9px', fontWeight: 600, color: '#fff' }}>
          Co-Work
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
          {unit.floor} | {unit.seats}
        </Typography>
      </Stack>

      <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#111', mt: 0.75 }}>
        {unit.price}
      </Typography>
      <Typography sx={{ fontSize: '9px', color: '#aaa', mt: -0.25 }}>
        {unit.priceLabel}
      </Typography>

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

/* ================ CoWorkingSpaces Main ================ */

const CoWorkingSpaces: React.FC = () => {
  return (
    <Stack spacing={1.5}>
      <FeaturedCoWorking />
      <Box
        sx={{
          px: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 1,
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
