import React from 'react'
import './ProjectStyle.css'

function Project() {
  return (
    <div className="project">
      <div className="thumb">
        <img src="/assets/images/placeholder.jpg" alt="project 1" />
      </div>
      <div className="description">
        <p className="name">Lorem Ipsum</p>
        <p className="techs">HTML - CSS - JS</p>
      </div>
    </div>
  );
}

export default Project
