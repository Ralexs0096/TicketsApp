import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import AppBarComponent from '../components/AppBarComponent';
import { Container } from '@mui/material';

const RootLayout = () => (
  <Container maxWidth="sm" sx={{
    borderRadius: 5,
    padding: 2,
    backgroundColor: '#F9FAFB'
  }}>
    <AppBarComponent />
    <Outlet />
    <TanStackRouterDevtools />
  </Container>
);

export const Route = createRootRoute({ component: RootLayout });
