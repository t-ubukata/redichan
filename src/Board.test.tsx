import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Board from './Board';

test('renders nav', async () => {
  render(<Board name="enNews"/>);

  const search = screen.getByText('🔍');
  const startThread= screen.getByText('➕');

  expect(search).toBeInTheDocument();
  expect(startThread).toBeInTheDocument();
  
});
