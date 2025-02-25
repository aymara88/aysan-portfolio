import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <header>
      <h1>Hi, I'm [Your Name]</h1>
      <p>Frontend Developer passionate about creating beautiful and functional user interfaces with React and modern web technologies.</p>
      <button><Link to='/projects'>Explore my projects</Link></button>
    </header>
  );
};

export default Home;
