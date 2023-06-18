import { RouteObject } from 'react-router-dom';
import AreaList from '../AreaList';
import Area from '../Area';
import CreateArea from '../CreateArea';

export const areaRoutes: RouteObject[] = [
  {
    path: '/areas',
    element: <Area />,
    children: [
      {
        path: '/areas/create',
        element: <CreateArea />
      }
    ]
  },
  {
    path: '/areas/list',
    element: <AreaList />,
    children: []
  }
];
