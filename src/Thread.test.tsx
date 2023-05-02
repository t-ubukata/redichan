import { render, screen } from '@testing-library/react';
import Thread from './Thread';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

test('renders thread', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/thread/0" element={<Thread />} />
      </Routes>
    </BrowserRouter>);

  /*
  const post= screen.getByText('➕');

  expect(post).toBeInTheDocument();
  */
});
