import type { RouteConfig } from '@react-router/dev/routes';

export default [
  {
    path: '/',
    file: './App.tsx'
  },
  {
    path: '/areas',
    file: './modules/areas/Area.tsx'
  },
  {
    path: '/tickets',
    file: './modules/tickets/Ticket.tsx'
  }
  // {
  //   path: '/users',
  //   element: <Outlet />,
  //   children: [...userRoutes]
  // },
  // {
  //   path: '/brands',
  //   element: <Outlet />,
  //   children: [...brandRoutes]
  // }
] satisfies RouteConfig;
