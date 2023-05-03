import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RedichanNav from 'RedichanNav';

test('renders RedichanNav', async () => {
  const user = userEvent.setup();
  render(<RedichanNav />);

  const navBarBrandEl = screen.getByText('redichan');
  const navDropDownElEn = screen.getByText('English');
  const navDropDownElJa = screen.getByText('日本語');

  expect(navBarBrandEl).toBeInTheDocument();
  expect(navDropDownElEn).toBeInTheDocument();
  expect(navDropDownElJa).toBeInTheDocument();

  const enBoards = await screen.findByTestId('en-boards');
  const enBoardsButton = await within(enBoards).findByRole('button');

  /*
  await user.click(enBoardsButton);
  const enNews = await within(enBoards).findByText('News');
  const enMay = await within(enBoards).findByText('may');

  expect(enNews).toBeInTheDocument();
  expect(enMay).toBeInTheDocument();

  const jaBoards = await screen.findByTestId('ja-boards');
  const jaBoardsButton = await within(jaBoards).findByRole('button');

  await user.click(jaBoardsButton);
  const jaNews = await within(jaBoards).findByText('ニュース');
  const jaMay = await within(jaBoards).findByText('may');

  expect(jaNews).toBeInTheDocument();
  expect(jaMay).toBeInTheDocument();
  */
});
