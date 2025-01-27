import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Order Management', () => {
  render(<App />);
  const linkElement = screen.getByText(/Order Management/i);
  expect(linkElement).toBeTruthy();
});
