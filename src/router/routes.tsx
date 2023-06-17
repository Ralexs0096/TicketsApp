import { Outlet, RouteObject } from 'react-router-dom';
import App from '../App';
import { areaRoutes } from '../modules/areas/router';

export const routes: RouteObject[] = [
  {
    element: <Outlet />,
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
      }
    ]
  }
];
