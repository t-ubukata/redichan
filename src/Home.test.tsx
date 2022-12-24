import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const p1 = screen.getByText(
    '⭐️ redichan is a newborn social media. Please cheer us and bring your friends!'
  );
  const p2 = screen.getByText(
    `🏃 You're not traced down from other users because your user name is not shown.`
  );
  const p3 = screen.getByText(
    '👿 Malicious users will be suspended because redichan requires registration to post.'
  );
  const p4 = screen.getByText(
    '🌐 redichan suppoorts the latest version of Google Chrome and Safari.'
  );
  expect(p1).toBeInTheDocument();
  expect(p2).toBeInTheDocument();
  expect(p3).toBeInTheDocument();
  expect(p4).toBeInTheDocument();
});
