import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'index.css';
import Home from 'Home';
import Board from 'Board';
import StartThread from 'StartThread';
import Thread from 'Thread';
import Post from 'Post';
import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board/en/news" element={<Board name="enNews" />} />
      <Route path="/board/ja/news" element={<Board name="jaNews" />} />
      <Route
        path="/board/:lang/:shortBoardName/start-thread"
        element={<StartThread />}
      />
      <Route path="/thread/:threadID" element={<Thread />} />
      <Route path="/thread/:threadID/post" element={<Post />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
