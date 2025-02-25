import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <p className="mb-0 text-center">© 2025 Aysan. All rights reserved.</p>
        <p className="text-center">
          <a href="mailto:aymarasanchez88@gmail.com" className="text-light">Contact Me</a> |
          <a href="https://github.com/aymara88" target="_blank" rel="noopener noreferrer" className="text-light">GitHub</a> |
          <a href="https://www.linkedin.com/in/aymara-sanchez-padilla/" target="_blank" rel="noopener noreferrer" className="text-light">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
