import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="container py-5" id="projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="project-thumbnail.jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project Name</h5>
              <p className="card-text">A brief description of the project.</p>
              <a href="https://github.com/yourusername/project" className="btn btn-primary">View Code</a>
              <a href="https://live-demo-link.com" className="btn btn-secondary ms-2">Live Demo</a>
            </div>
          </div>
        </div>

        {/* Repeat the above card for more projects */}
      </div>
    </section>
  );
};

export default Projects;
