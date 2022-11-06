import React from 'react';
import './Home.css';
import RedichanNav from 'RedichanNav';

const Home = (): JSX.Element => (
  <div>
    <RedichanNav />
    <div className="Home mx-auto">
      <p>
        redichan is a newborn social media. Please cheer us and bring your
        friends!
      </p>
      <p>
        You&apos;re not traced down from other users because your user name is not
        shown.
      </p>
      <p>
        Malicious users will be suspended because redichan requires registration
        to post.
      </p>
      <p>redichan suppoorts the latest version of Google Chrome and Safari.</p>
    </div>
  </div>
);

export default Home;
