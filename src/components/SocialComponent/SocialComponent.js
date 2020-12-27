import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialStyles.css'
function Social() {
  return (
    <section className="socials" >
      <div className="container">
        <a href="https://www.twitter.com" className="twitter" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={[ 'fab', 'twitter' ]} />
        </a>
        <a href="https://www.github.com" className="github" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={[ 'fab', 'github' ]} />
        </a>
        <a href="https://www.linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} />
        </a>
      </div>
    </section>
  )
}

export default Social
