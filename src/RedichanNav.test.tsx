import React from 'react';
import { render, screen } from '@testing-library/react';
/* import { within } from '@testing-library/react'; */
import userEvent from '@testing-library/user-event';
/* import consola from 'consola' */
import RedichanNav from './RedichanNav';

test('renders nav', async () => {
  const user = userEvent.setup();
  render(<RedichanNav />);

  const navBarBrandEl = screen.getByText('redichan');
  const navDropDownElEn = screen.getByText('English');
  const navDropDownElJa = screen.getByText('日本語');

  expect(navBarBrandEl).toBeInTheDocument();
  expect(navDropDownElEn).toBeInTheDocument();
  expect(navDropDownElJa).toBeInTheDocument();

  // TODO: Test NavDropdown.Item elements.

  const enBoards = screen.getByTestId('en-boards');
  await user.click(enBoards);
  /* const enNews = within(enBoards).getByTestId('en-news') */

  /* expect(enNews).toBeInTheDocument() */
});
