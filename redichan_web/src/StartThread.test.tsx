import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import StartThread from 'StartThread';

test('renders StartThread', () => {
  render(
    <MemoryRouter initialEntries={['/board/en/news/start-thread']}>
      <Routes>
        <Route
          path="/board/:lang/:shortBoardName/start-thread"
          element={<StartThread />}
        />
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
