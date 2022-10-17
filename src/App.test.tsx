import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement = screen.getByText('redichan');
  const pElement1 = screen.getByText(
    'redichan is a newborn social media. Please cheer us and bring your friends!'
  );
  const pElement2 = screen.getByText(
    `You're not traced down from other users because your user name is not shown.`
  );
  const pElement3 = screen.getByText(
    'Malicious users are suspended because redichan requires registration to post.'
  );
  const pElement4 = screen.getByText(
    'redichan suppoorts latest version of Google Chrome and Safari.'
  );
  expect(headerElement).toBeInTheDocument();
  expect(pElement1).toBeInTheDocument();
  expect(pElement2).toBeInTheDocument();
  expect(pElement3).toBeInTheDocument();
  expect(pElement4).toBeInTheDocument();
});
