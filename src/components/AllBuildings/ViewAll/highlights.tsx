// ...existing code...
import { Box, Typography, Stack } from '@mui/material';

interface HighlightItemProps {
  value: string;
  unit?: string;
  label: string;
}

const HighlightItem: React.FC<HighlightItemProps> = ({ value, unit, label }) => (
  <Stack
    alignItems="center"
    spacing="4px"
    sx={{
      flex: 1,
      padding: '4px',
      borderRadius: '4px',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
      <Typography
        className="highlight-value"
        sx={{
          color: 'var(--accent-gold)',
          fontWeight: 600,
          fontSize: '0.875rem',
        }}
      >
        {value}
      </Typography>
      {unit && (
        <Typography
          sx={{
            color: 'var(--text-muted)',
            fontWeight: 600,
            fontSize: '0.65rem',
          }}
        >
          {unit}
        </Typography>
      )}
    </Box>
    <Typography
      sx={{
        color: 'var(--text-muted)',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.5px',
      }}
    >
      {label}
    </Typography>
  </Stack>
);

const Highlights: React.FC = () => {
  return (
    <Box sx={{ padding: '4px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '4px',
          border: '1px solid var(--border-default)',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
          padding: '4px',
        }}
      >
        <HighlightItem value="1,200" unit="sq.ft." label="Size" />
        <Box
          sx={{
            width: '1px',
            height: 28,
            backgroundColor: 'var(--border-default)',
            flexShrink: 0,
          }}
        />
        <HighlightItem value="₹ 2.5 Cr" label="Sale Value" />
        <Box
          sx={{
            width: '1px',
            height: 28,
            backgroundColor: 'var(--border-default)',
            flexShrink: 0,
          }}
        />
        <HighlightItem value="8%" label="Expected Yield" />
      </Box>
    </Box>
  );
};

export default Highlights;