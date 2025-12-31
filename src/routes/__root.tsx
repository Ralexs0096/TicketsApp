import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { authQueryOptions } from '../queries/auth';
import type { QueryClient } from '@tanstack/react-query';
import { Container } from '@mui/material';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <Container
    maxWidth="sm"
    sx={{
      borderRadius: 5,
      padding: 2,
      backgroundColor: '#F9FAFB',
      height: '100vh',
    }}
  >
    <Outlet />
    <TanStackRouterDevtools />
  </Container>
);

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  loader: ({ context }) => {
    return context.queryClient.ensureQueryData(authQueryOptions);
  },
  component: () => <RootLayout />,
});
