import { Box, Container, CssBaseline, Paper } from '@mui/material';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default'
      }}
    >
      <CssBaseline />
      <Container
        component={Paper}
        elevation={3}
        maxWidth="sm"
        sx={{
          width: '100%',
          minHeight: '100vh',
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
