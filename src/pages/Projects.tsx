import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <img src="project-thumbnail.jpg" alt="Project Thumbnail" />
        <h3>Project Name</h3>
        <p>A brief description of what the project is and the technologies used.</p>
        <a href="https://live-demo-link.com" target="_blank">View Demo</a>
        <br/>
        <a href="https://github.com/yourusername/project-repo" target="_blank">View Code</a>
      </div>
    </section>
  );
};

export default Projects;
