import { RouteObject } from 'react-router-dom';
import AreaList from '../AreaList';
import Area from '../Area';

export const areaRoutes: RouteObject[] = [
  {
    path: '/areas',
    element: <Area />,
    index: true
  },
  {
    path: '/areas/list',
    element: <AreaList />,
    children: []
  }
];
