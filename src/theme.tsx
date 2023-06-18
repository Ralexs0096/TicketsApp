import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4C4C6D'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    grey: {
      '100': '#EEEEEE'
    }
  }
});

export default theme;
