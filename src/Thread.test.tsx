import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Thread from './Thread';

test('renders thread', () => {
  render(
    <MemoryRouter initialEntries={["/thread/0"]}>
      <Routes>
        <Route path="/thread/:id" element={<Thread />} />
      </Routes>
    </MemoryRouter>
  );

  const post = screen.getByText('➕');

  expect(post).toBeInTheDocument();
});
