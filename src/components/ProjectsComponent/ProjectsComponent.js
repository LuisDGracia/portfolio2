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
  
    // console.log( techspaths['tech'] )

  const projectQuantity = []

  for (let i = 0; i < 8; i++) {
    projectQuantity.push(<Project />)
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h3 className="projects__tittle">Projects</h3>
        <div className="projects__container">
          <Project techs={[  techspaths['./html5.svg'].default, techspaths['./css3.svg'].default,techspaths['./javascript.svg'].default]} />
        </div>
      </div>
    </section>
  );
}

export default Projects
