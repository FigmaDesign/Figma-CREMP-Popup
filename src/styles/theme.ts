import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  spacing: 4,
  shape: {
    borderRadius: 4,
  },
  palette: {
    mode: 'light',
    background: {
      default: '#f5f6f8',
      paper: '#ffffff',
    },
    primary: {
      main: '#0f1f3d',
    },
    secondary: {
      main: '#c9a34e',
    },
    text: {
      primary: '#0f1f3d',
      secondary: '#637089',
    },
    divider: '#eef0f3',
  },
  typography: {
    fontFamily: 'Outfit, sans-serif',
    button: {
      fontWeight: 600,
    },
    h1: {
      fontWeight: 700,
      color: '#0f1f3d',
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --bg-app: #f5f6f8;
          --bg-card: #ffffff;
          --bg-header: linear-gradient(135deg, #0f1f3d 0%, #1f3b73 100%);
          --accent-navy: #0f1f3d;
          --accent-gold-start: #c9a34e;
          --accent-gold-end: #b8903c;
          --accent-gold-light: #e3c980;
          --border-default: #eef0f3;
          --border-dark: #d9dde3;
          --text-main: #0f1f3d;
          --text-muted: #637089;
          --text-inverse: #ffffff;
        }
        body {
          background: var(--bg-app);
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
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
          padding: '8px 24px',
          justifyContent: 'center',
          border: '1px solid transparent',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, var(--accent-gold-start) 0%, var(--accent-gold-end) 100%)',
          color: 'var(--text-inverse)',
          '&:hover': {
            background: 'linear-gradient(135deg, var(--accent-gold-end) 0%, var(--accent-gold-start) 100%)',
            boxShadow: '0px 4px 12px rgba(201, 163, 78, 0.3)',
          },
        },
        outlined: {
          borderColor: 'var(--border-dark)',
          color: 'var(--text-main)',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'var(--bg-app)',
            borderColor: 'var(--accent-navy)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          border: '1px solid var(--border-default)',
          boxShadow: '0px 8px 32px rgba(15, 31, 61, 0.04)',
          background: 'var(--bg-card)',
        },
      },
    },
  },
});