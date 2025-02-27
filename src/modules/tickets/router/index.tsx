import { RouteObject } from 'react-router';
import Ticket from '../Ticket';

export const ticketRoutes: RouteObject[] = [
  {
    path: '/tickets',
    element: <Ticket />,
    index: true
  }
];
