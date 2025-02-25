import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <header className="text-center py-5">
      <h1>Hi, I'm Aymara</h1>
      <p>Frontend Developer passionate about creating beautiful and functional user interfaces with React and modern web technologies.</p>
      {/* Link styled as a button */}
      <Link to="/projects" className="btn btn-primary">Explore my projects</Link>
    </header>
  );
};

export default Home;
