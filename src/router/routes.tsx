import { ReactElement } from 'react';
import App from '../App';

interface Route {
  path: string;
  element: ReactElement;
}

export const routes: Route[] = [
  {
    path: '/',
    element: <App />
  }
];
