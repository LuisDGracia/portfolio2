import React from 'react'
import './ProjectStyle.css'

function Project() {
  return (
    <div className="project">
      <div className="project__thumb">
        <label className="project__tittle" >
          <p>something</p>
        </label>
        <label className="project__techs" >
          <p>Techs</p>
        </label>
        <img src="/assets/images/placeholder.jpg" alt="project 1" className="project__img" />
      </div>
    </div>
  );
}

export default Project
