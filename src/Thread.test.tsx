import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Thread from './Thread';

test('renders thread', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/thread/0" element={<Thread />} />
      </Routes>
    </BrowserRouter>
  );

  /*
  const post= screen.getByText('➕');

  expect(post).toBeInTheDocument();
  */
});
