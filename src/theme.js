import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a90e2', 
    },
    secondary: {
      main: '#f50057', 
    },
    success: {
      main: '#4caf50', 
    },
    warning: {
      main: '#ff9800', 
    },
    info: {
      main: '#2196f3', 
    },
    error: {
      main: '#f44336', 
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#333',
    },
    body1: {
      fontSize: '1rem',
      color: '#555',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          margin: '20px 0',
          borderRadius: '8px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '10px 0',
        },
      },
    },
  },
});

export default theme;
