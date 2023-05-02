import { render, screen } from '@testing-library/react';
import Board from './Board';

test('renders nav', async () => {
  render(<Board name="enNews"/>);

  const search = screen.getByText('🔍');
  const startThread= screen.getByText('➕');

  expect(search).toBeInTheDocument();
  expect(startThread).toBeInTheDocument();
});
