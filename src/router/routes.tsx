import { RouteObject } from 'react-router-dom';
import App from '../App';
import Area from '../modules/areas/Area';
import { areaRoutes } from '../modules/areas/router';

export const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: '/',
        index: true
      },
      {
        path: '/areas',
        element: <Area />,
        children: [...areaRoutes]
      }
    ]
  }
];
