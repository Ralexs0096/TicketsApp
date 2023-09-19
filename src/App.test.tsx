import { screen } from '@testing-library/react';
import App from './App';
import render from './router/testRenderer';

it('App feature tour', async () => {
  render(<App />);

  // now we expect to see all button options
  screen.getByRole('button', {
    name: /area/i
  });
  screen.getByRole('button', {
    name: /tickets/i
  });
  screen.getByRole('button', {
    name: /brand/i
  });
  screen.getByRole('button', {
    name: /users/i
  });
});
