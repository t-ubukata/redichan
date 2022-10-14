import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const headerElement = screen.getByText('redichan');
  const paragraphElement1 = screen.getByText('redichan is a newborn social media. Please cheer us and bring your friends!');
  const paragraphElement2 = screen.getByText(`You're not traced down from other users because your user name is not shown.`);
  const paragraphElement3 = screen.getByText('Malicious users are suspended because redichan requires registration to post.');
  const paragraphElement4 = screen.getByText('redichan suppoorts latest version of Google Chrome and Safari.');
  expect(headerElement).toBeInTheDocument();
  expect(paragraphElement1).toBeInTheDocument();
  expect(paragraphElement2).toBeInTheDocument();
  expect(paragraphElement3).toBeInTheDocument();
  expect(paragraphElement4).toBeInTheDocument();
})
