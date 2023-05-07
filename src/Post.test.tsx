import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Post from 'Post';

test('renders Post', () => {
  render(
    <MemoryRouter initialEntries={['/thread/0/post']}>
      <Routes>
        <Route
          path="/thread/:id/post" element={<Post />} />
        </Routes>
    </MemoryRouter>
  );

  const contentArea = screen.getByTestId('content-area');
  expect(contentArea).toBeInTheDocument();

  const cancel = screen.getByText('Cancel');
  expect(cancel).toBeInTheDocument();

  const submit = screen.getByTestId('submit-button');
  expect(submit).toBeInTheDocument();
});
