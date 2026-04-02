import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface SuitedCategory {
  title: string;
  tags: string[];
}

const categories: SuitedCategory[] = [
  {
    title: '🏬 Retail Categories',
    tags: ['Apparel & Fashion', 'Luxury Watches', 'Electronics', 'F&B', 'Salon / Spa', 'Pharmacy'],
  },
  {
    title: '🏢 Office Use',
    tags: ['IT / Startup', 'Coworking', 'Corporate'],
  },
  {
    title: '🏠 Also Suitable For',
    tags: ['Art Gallery', 'Premium Cafe', 'Clinic', 'Showroom'],
  },
];

const SuitedFor: React.FC = () => {
  return (
    <Box sx={{ padding: '4px' }}>
      <Box
        sx={{
          padding: '4px',
          borderRadius: '4px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-default)',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--text-main)',
            marginBottom: '8px',
            paddingLeft: '4px',
          }}
        >
          Suited for
        </Typography>

        <Stack spacing="8px">
          {categories.map((category, catIdx) => (
            <Box key={catIdx} sx={{ paddingLeft: '4px' }}>
              <Typography 
                sx={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 600, 
                  color: 'var(--text-muted)', 
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {category.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px',
                }}
              >
                {category.tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    icon={<CheckCircleIcon sx={{ fontSize: 14, color: 'var(--accent-gold) !important' }} />}
                    label={tag}
                    variant="outlined"
                    sx={{
                      borderRadius: '4px',
                      borderColor: 'var(--border-default)',
                      backgroundColor: 'var(--bg-app)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      height: 28,
                      transition: 'all 150ms ease-in-out',
                      '&:hover': {
                        borderColor: 'var(--accent-gold)',
                        backgroundColor: 'var(--bg-card)',
                      },
                      '& .MuiChip-label': {
                        paddingLeft: '4px',
                        paddingRight: '8px',
                      },
                      '& .MuiChip-icon': {
                        marginLeft: '4px',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default SuitedFor;