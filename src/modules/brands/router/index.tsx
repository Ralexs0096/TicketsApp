import { RouteObject } from 'react-router-dom';
import Brand from '../Brand';

export const brandRoutes: RouteObject[] = [
  {
    path: '/brands',
    element: <Brand />,
    index: true
  }
];
