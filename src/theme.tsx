import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Sorts Mill Goudy", serif',
    h1: {
      fontSize: '2.8rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.2rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
  palette: {
    primary: {
      main: '#40B5AD',
    },
    secondary: {
      main: '#296bd8',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#fff',
    },
  },
  // Add more theme customizations if needed
});

export default theme;
