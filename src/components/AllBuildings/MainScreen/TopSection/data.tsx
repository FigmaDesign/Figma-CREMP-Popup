import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LayersIcon from '@mui/icons-material/Layers';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';

// ─── Tailwind Classes for Colors ──────────────────────────────────────────────
export const colors = {
  navy: 'text-[#1C2A44]',
  bgNavy: 'bg-[#1C2A44]',
  navyMuted: 'text-[#334155]',
  gold: 'text-[#C89B3C]',
  bgGold: 'bg-[#C89B3C]',
  goldLight: 'text-[#D4AF37]',
  bgLight: 'bg-[#F8FAFC]',
  border: 'border-[#EEF0F3]',
};

// ─── Stats ────────────────────────────────────────────────────────────────────
export interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  {
    icon: <ApartmentIcon sx={{ fontSize: 15 }} className="text-[#C89B3C]" />,
    value: '24',
    label: 'Units',
  },
  {
    icon: <SquareFootIcon sx={{ fontSize: 15 }} className="text-[#C89B3C]" />,
    value: '25L sqft',
    label: 'Overall Area',
  },
  {
    icon: <LayersIcon sx={{ fontSize: 15 }} className="text-[#C89B3C]" />,
    value: '15',
    label: 'Floors',
  },
];

// ─── Media assets ─────────────────────────────────────────────────────────────
export const mediaThumbs = {
  mainVideo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=200&q=70',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&q=70',
    'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=200&q=70',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=200&q=70',
  ],
};

// ─── Detail Sections ──────────────────────────────────────────────────────────
export interface DetailRow {
  label: string;
  value: string;
}

export interface DetailSection {
  title: string;
  icon?: React.ReactNode;
  rows: DetailRow[];
}

export const expandedSections: DetailSection[] = [
  {
    title: 'Location',
    rows: [
      { label: 'Address', value: 'HITEC City, Hyderabad' },
      { label: 'Zone', value: 'Commercial Zone 3' },
      { label: 'Nearest Metro', value: 'Madhapur (0.8 km)' },
      { label: 'Landmark', value: 'Cyber Towers Junction' },
    ],
  },
  {
    title: 'Facilities',
    icon: <FitnessCenterIcon sx={{ fontSize: 14 }} className="text-[#C89B3C]" />,
    rows: [
      { label: 'Parking', value: '400+ slots' },
      { label: 'Cafeteria', value: 'Yes (3 outlets)' },
      { label: 'Gym / Wellness', value: 'Available' },
      { label: 'Conference Rooms', value: '8 rooms' },
      { label: 'EV Charging', value: 'Yes' },
    ],
  },
  {
    title: 'Security',
    icon: <SecurityIcon sx={{ fontSize: 14 }} className="text-[#C89B3C]" />,
    rows: [
      { label: 'CCTV Coverage', value: '24 × 7' },
      { label: 'Access Control', value: 'Biometric + Card' },
      { label: 'Security Staff', value: 'On-site (3 shifts)' },
      { label: 'Fire Safety', value: 'Sprinklers + Alarms' },
    ],
  },
  {
    title: 'Compliance',
    icon: <VerifiedIcon sx={{ fontSize: 14 }} className="text-[#C89B3C]" />,
    rows: [
      { label: 'RERA Registered', value: 'Yes — AP/RERA/10234' },
      { label: 'OC Status', value: 'Obtained' },
      { label: 'Green Rating', value: 'IGBC Gold' },
      { label: 'Last Audit', value: 'Feb 2025' },
    ],
  },
];
