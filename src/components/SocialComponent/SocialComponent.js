import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Social() {
  return (
    <section className="socials" >
      <div className="container">
        <a href="https://www.twitter.com" className="social"><FontAwesomeIcon icon={[ 'fab', 'twitter' ]} /></a>
        <a href="https://www.github.com" className="social"><FontAwesomeIcon icon={[ 'fab', 'github' ]} /></a>
        <a href="https://www.linkedin.com" className="social"><FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} /></a>
      </div>
    </section>
  )
}

export default Social
