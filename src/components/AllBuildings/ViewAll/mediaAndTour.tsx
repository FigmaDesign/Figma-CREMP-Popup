import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const thumbnails = [
  '/images/viewall/thumb1.png',
  '/images/viewall/thumb2.png',
  '/images/viewall/thumb3.png',
  '/images/viewall/thumb4.png',
];

const MediaAndTour: React.FC = () => {
  return (
    <Box sx={{ padding: '4px' }}>
      <Typography
        sx={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--text-main)',
          marginBottom: '4px',
          paddingLeft: '4px',
        }}
      >
        Media & tours
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 180,
          borderRadius: '4px',
          border: '1px solid var(--border-default)',
          overflow: 'hidden',
          marginBottom: '4px',
          backgroundColor: 'var(--bg-app)',
        }}
      >
        <Box
          component="img"
          src="/images/viewall/media-main.png"
          alt="Media Preview"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(15, 26, 44, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 150ms ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(15, 26, 44, 0.5)',
            },
          }}
        >
          <PlayCircleFilledIcon
            sx={{
              fontSize: 48,
              color: 'var(--accent-gold)',
              filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.3))',
              cursor: 'pointer',
              transition: 'all 150ms ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
                color: '#FFFFFF',
              },
            }}
          />
        </Box>
      </Box>

      <Stack
        direction="row"
        spacing="4px"
        sx={{
          overflowX: 'auto',
          padding: '2px',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}
      >
        {thumbnails.map((thumb, idx) => (
          <Box
            key={idx}
            sx={{
              position: 'relative',
              width: 72,
              height: 56,
              borderRadius: '4px',
              border: '1px solid var(--border-default)',
              overflow: 'hidden',
              flexShrink: 0,
              cursor: 'pointer',
              transition: 'all 150ms ease-in-out',
              '&:hover': {
                borderColor: 'var(--accent-gold)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box
              component="img"
              src={thumb}
              alt={`Thumbnail ${idx + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {idx === thumbnails.length - 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(15, 26, 44, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                }}
              >
                <Typography
                  sx={{
                    color: 'var(--accent-gold)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                  }}
                >
                  +12 More
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default MediaAndTour;