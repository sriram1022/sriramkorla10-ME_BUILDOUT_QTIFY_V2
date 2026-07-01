import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar/Navbar';

test('navbar renders logo, search input, and feedback button', () => {
  render(<Navbar />);

  expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /give feedback/i })).toBeInTheDocument();
});
