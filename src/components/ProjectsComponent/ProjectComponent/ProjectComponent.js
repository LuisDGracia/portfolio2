import React from 'react'
import './ProjectStyle.css'
import project from '../../../assets/images/placeholder.jpg'
import ProjectContent from '../ProjectContent/ProjectContent';


function Project({ techs }) {
  
  const pattern = /([^/]+)(?=[.][0-9a-f])/g;

  return (
    <div className="project">
      <div className="project__thumb">
        <div className="project__info" >
          <ProjectContent />
          <ProjectContent />
        </div>
        <img src={ project } alt="project 1" className="project__img" />
      </div>
      <div className="project__description">
        <p className="project__tittle">Lorem Ipsum</p>

        <div className="techs">          
          { techs.map( tech => {

            let techname= tech.match(pattern)

            return (
              <div className="techs__container">
                <img className="techs__img" src={`${tech}`} key={techname} alt={techname} />
                <p className="techs__name">{techname}</p>
              </div>
              )
            }) 
          }
        </div>

      </div>
    </div>
  );
}

export default Project
