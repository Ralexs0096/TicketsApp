import { Outlet, RouteObject } from 'react-router-dom';
import App from '../App';
import { areaRoutes } from '../modules/areas/router';
import { ticketRoutes } from '../modules/tickets/router';
import { userRoutes } from '../modules/users/router';
import { brandRoutes } from '../modules/brands/router';
import AppBarComponent from '../components/AppBarComponent';

export const routes: RouteObject[] = [
  {
    element: (
      <>
        <AppBarComponent />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <App />,
        index: true
      },
      {
        path: '/areas',
        element: <Outlet />,
        children: [...areaRoutes]
      },
      {
        path: '/tickets',
        element: <Outlet />,
        children: [...ticketRoutes]
      },
      {
        path: '/users',
        element: <Outlet />,
        children: [...userRoutes]
      },
      {
        path: '/brands',
        element: <Outlet />,
        children: [...brandRoutes]
      }
    ]
  }
];
