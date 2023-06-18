import { RouteObject } from 'react-router-dom';
import User from '../User';

export const userRoutes: RouteObject[] = [
  {
    path: '/users',
    element: <User />,
    index: true
  }
];
