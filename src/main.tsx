import React from 'react';
import ReactDOM from 'react-dom/client';

import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
