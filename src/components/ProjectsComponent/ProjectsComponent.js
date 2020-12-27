import React from 'react'
import './ProjectsStyle.css'
import Project from '../ProjectComponent/ProjectComponent'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h3 className="tittle">Projects</h3>
        <div className="projects-container">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
}

export default Projects
