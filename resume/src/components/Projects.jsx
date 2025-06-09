import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const placeholderProjects = [
    {
      id: 1,
      name: "Resume Website",
      description: "A responsive resume website built with React and CSS",
      html_url: "https://github.com/AggelosK004/resume",
      language: "JavaScript"
    },
    {
      id: 2,
      name: "Wallpaper Catalogue",
      description: "A variety-filled wallpaper catalogue with downloadable images(unfinished)",
      html_url: "https://github.com/AggelosK004/Wallpaper-Catalogue",
      language: "React"
    },
    {
      id: 3,
      name: "",
      description: "",
      html_url: "https://github.com/aggeloskolitsis/task-manager",
      language: "JavaScript"
    },
    {
      id: 4,
      name: "",
      description: "",
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
