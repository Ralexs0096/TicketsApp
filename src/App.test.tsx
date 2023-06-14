import { screen, render } from '@testing-library/react';
import App from './App';

it('displays a +1 button', () => {
  render(<App />);

  expect(
    screen.getByRole('button', {
      name: /\+1/i
    })
  ).toBeInTheDocument();
});
