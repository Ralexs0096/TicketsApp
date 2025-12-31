import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { authQueryOptions } from '../queries/auth';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context, location }) => {
    const session = await context.queryClient.ensureQueryData(authQueryOptions);

    if (!session.user) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => <Outlet />,
});
