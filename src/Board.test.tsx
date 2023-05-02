import { render, screen } from '@testing-library/react';
import Board from './Board';

test('renders Board', () => {
  render(<Board name="enNews"/>);

  const search = screen.getByText('🔍');
  const startThread= screen.getByText('➕');

  expect(search).toBeInTheDocument();
  expect(startThread).toBeInTheDocument();
});
