import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  const enBoards = screen.getByTestId('en-boards');
  const enBoardsButton = within(enBoards).getByRole('button');

  await user.click(enBoardsButton);
  const enNews = within(enBoards).getByText('News');
  const enSensitiveMay = within(enBoards).getByText('Sensitive may');

  expect(enNews).toBeInTheDocument();
  expect(enSensitiveMay).toBeInTheDocument();

  const jaBoards = screen.getByTestId('ja-boards');
  const jaBoardsButton = within(jaBoards).getByRole('button');

  await user.click(jaBoardsButton);
  const jaNews = within(jaBoards).getByText('ニュース');
  const jaSensitiveMay = within(jaBoards).getByText('裏may');

  expect(jaNews).toBeInTheDocument();
  expect(jaSensitiveMay).toBeInTheDocument();
});
