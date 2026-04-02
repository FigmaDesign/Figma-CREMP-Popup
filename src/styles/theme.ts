import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  spacing: 4, 
  shape: {
    borderRadius: 4,
  },
  palette: {
    mode: 'light',
    background: {
      default: '#F4F6F8',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#C69C44',
    },
    secondary: {
      main: '#A0AAB5',
    },
    text: {
      primary: '#1A2332',
      secondary: '#A0AAB5',
    },
    divider: '#E5E7EB',
  },
  typography: {
    fontFamily: '"Inter", "-apple-system", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      fontWeight: 600,
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --bg-app: #F4F6F8;
          --bg-card: #FFFFFF;
          --bg-header: #0F1A2C;
          --accent-gold: #C69C44;
          --border-default: #E5E7EB;
          --text-main: #1A2332;
          --text-muted: #A0AAB5;
          --text-inverse: #FFFFFF;
        }
      `,
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          padding: '4px 12px',
          transition: 'all 150ms ease-in-out',
          justifyContent: 'flex-start',
          border: '1px solid transparent',
        },
        containedPrimary: {
          backgroundColor: 'var(--accent-gold)',
          color: 'var(--text-inverse)',
          '&:hover': {
            backgroundColor: '#B38B3A',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
          },
        },
        outlined: {
          borderColor: 'var(--border-default)',
          color: 'var(--text-main)',
          '&:hover': {
            borderColor: 'var(--accent-gold)',
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});