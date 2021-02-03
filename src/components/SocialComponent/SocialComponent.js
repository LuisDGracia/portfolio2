import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialStyles.css'
import NavItem from '../Navigation/NavItems/NavItem/NavItem'

function Social() {
  return (
    <section className="socials" >
      <div className="container">
        
        <NavItem 
          href="https://www.twitter.com" 
          classes="socials__link twitter" 
          content={ <FontAwesomeIcon icon={[ 'fab', 'twitter' ]} /> }
          target 
          rell />

        <NavItem 
          href="https://www.github.com" 
          classes="socials__link github" 
          content={ <FontAwesomeIcon icon={[ 'fab', 'github' ]} /> }
          target 
          rell />
          
        <NavItem 
          href="https://www.linkedin.com" 
          classes="socials__link linkedin" 
          content={ <FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} /> }
          target 
          rell />
      </div>
    </section>
  )
}

export default Social
