import { RouteObject } from 'react-router';
import Brand from '../Brand';

export const brandRoutes: RouteObject[] = [
  {
    path: '/brands',
    element: <Brand />,
    index: true
  }
];
