import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import NavItem from '../../Navigation/NavItems/NavItem/NavItem';
import project from '../../../assets/images/placeholder.jpg'
import './ProjectStyle.css'


function Project({ techs }) {
  
  const pattern = /([^/]+)(?=[.][0-9a-f])/g;

  return (
    <div className="project">
      <div className="project__thumb">
        <div className="project__info" >
          <div className="project__content" >
            <FontAwesomeIcon icon={[ 'fab', 'github' ]} />
            <NavItem classes="project__info-text" href="http://www.github.com" content='Github'target rell />
          </div>
          <div className="project__content" >
            <FontAwesomeIcon icon={[ 'fa', 'globe' ]} />
            <NavItem classes="project__info-text" href="http://www.github.com" content="Site" target rell />
          </div>
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
