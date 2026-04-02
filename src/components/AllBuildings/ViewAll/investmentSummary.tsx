import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

interface SummaryItem {
  label: string;
  value: string;
  highlight?: boolean;
}

const summaryItems: SummaryItem[] = [
  { label: 'Sale price', value: '₹ 1,250,000' },
  { label: 'Monthly income', value: '₹ 80,000' },
  { label: 'Net yield', value: '8%', highlight: true },
  { label: 'Stamp Duty & Registration', value: 'Applicable' },
];

const InvestmentSummary: React.FC = () => {
  return (
    <Box sx={{ padding: '4px' }}>
      <Box
        sx={{
          padding: '4px',
          borderRadius: '4px',
          border: '1px solid var(--border-default)',
          backgroundColor: 'var(--bg-card)',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--text-main)',
            marginBottom: '4px',
            padding: '4px',
          }}
        >
          Investment summary
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4px',
          }}
        >
          {summaryItems.map((item, idx) => (
            <Stack 
              key={idx} 
              spacing="2px"
              sx={{
                padding: '4px',
                borderRadius: '4px',
                transition: 'all 150ms ease-in-out',
                '&:hover': {
                  backgroundColor: 'var(--bg-app)',
                }
              }}
            >
              <Typography sx={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: item.highlight ? 'var(--accent-gold)' : 'var(--text-main)',
                  transition: 'color 150ms ease-in-out',
                }}
              >
                {item.value}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InvestmentSummary;