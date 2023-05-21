import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Board from 'Board';

test('renders Board', () => {
  render(
    <MemoryRouter initialEntries={['/board/en/news']}>
      <Routes>
        <Route path="/board/en/news" element={<Board name="enNews" />} />
      </Routes>
    </MemoryRouter>
  );

  /* const search = screen.getByText('🔍'); */
  /* expect(search).toBeInTheDocument(); */

  const startThread = screen.getByText('➕');
  expect(startThread).toBeInTheDocument();
});
