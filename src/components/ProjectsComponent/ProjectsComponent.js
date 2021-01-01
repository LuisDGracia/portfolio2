import React from 'react'
import './ProjectsStyle.css'
import Project from './ProjectComponent/ProjectComponent'

function Projects() {

  const projectQuantity = []

  for (let i = 0; i < 8; i++) {
    projectQuantity.push(<Project />)
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h3 className="projects__tittle">Projects</h3>
        <div className="projects__container">
          {projectQuantity}
        </div>
      </div>
    </section>
  );
}

export default Projects
