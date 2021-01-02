import React from 'react'
import './ProjectContent.css'
import NavItem from '../../Navigation/NavItems/NavItem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectContent() {
  return (
    <div className="project__content" >
      <FontAwesomeIcon icon={[ 'fab', 'github' ]} />
      <NavItem classes="project__info-text" href="http://www.github.com" content='Github'target rell />
    </div>
  )
}

export default ProjectContent
