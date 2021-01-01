import React from 'react'
import './ProjectsStyle.css'
import Project from './ProjectComponent/ProjectComponent'

function Projects() {

  const techs = require.context('../../assets/svgs/Use', true, /\.svg$/);
  const techspaths = techs
    .keys()
    .reduce( (images, paths ) => {
      images[paths] = techs(paths)
      return images
    }, {})

  const techsName = ( name ) => {
    return techspaths[`./${name}.svg`].default
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h3 className="projects__tittle">Projects</h3>
        <div className="projects__container">
          <Project techs={[ techsName('html5'), techsName('css3'), techsName('javascript') ]} />
          <Project techs={[ techsName('html5'), techsName('css3'), techsName('javascript') ]} />
          <Project techs={[ techsName('html5'), techsName('css3'), techsName('javascript') ]} />
          <Project techs={[ techsName('html5'), techsName('css3'), techsName('javascript') ]} />
          <Project techs={[ techsName('html5'), techsName('css3'), techsName('javascript') ]} />
          <Project techs={[ techsName('html5'), techsName('css3'), techsName('javascript') ]} />
          <Project techs={[ techsName('html5'), techsName('css3'), techsName('javascript') ]} />
          <Project techs={[ techsName('html5'), techsName('css3'), techsName('javascript') ]} />
        </div>
      </div>
    </section>
  );
}

export default Projects
