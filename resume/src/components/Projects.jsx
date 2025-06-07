import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const placeholderProjects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A responsive portfolio website built with React and CSS",
      html_url: "https://github.com/aggeloskolitsis/portfolio",
      language: "JavaScript"
    },
    {
      id: 2,
      name: "E-commerce App",
      description: "Full-stack e-commerce application with modern UI/UX",
      html_url: "https://github.com/aggeloskolitsis/ecommerce-app",
      language: "React"
    },
    {
      id: 3,
      name: "Task Management Tool",
      description: "A collaborative task management application",
      html_url: "https://github.com/aggeloskolitsis/task-manager",
      language: "JavaScript"
    },
    {
      id: 4,
      name: "Weather Dashboard",
      description: "Real-time weather dashboard with beautiful visualizations",
      html_url: "https://github.com/aggeloskolitsis/weather-dashboard",
      language: "React"
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setProjects(placeholderProjects);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <section className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <span className="project-language">{project.language}</span>
                <a 
                  href={project.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
