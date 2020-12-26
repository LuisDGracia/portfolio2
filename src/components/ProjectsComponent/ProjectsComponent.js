import React from 'react'

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h3 className="tittle">Projects</h3>
        <div className="projects-container">
          <div className="project">
            <div className="thumb">
              <img
                src="/assets/images/placeholder.jpg"
                width={115}
                height={115}
                alt="project 1"
              />
            </div>
            <div className="description">
              <p className="name">Lorem Ipsum</p>
              <p className="techs">HTML - CSS - JS</p>
            </div>
          </div>

          <div className="project">
            <div className="thumb">
              <img
                src="/assets/images/placeholder.jpg"
                width={115}
                height={115}
                alt="project 1"
              />
            </div>
            <div className="description">
              <p className="name">Lorem Ipsum</p>
              <p className="techs">HTML - CSS - JS</p>
            </div>
          </div>

          <div className="project">
            <div className="thumb">
              <img
                src="/assets/images/placeholder.jpg"
                width={115}
                height={115}
                alt="project 1"
              />
            </div>
            <div className="description">
              <p className="name">Lorem Ipsum</p>
              <p className="techs">HTML - CSS - JS</p>
            </div>
          </div>

          <div className="project">
            <div className="thumb">
              <img
                src="/assets/images/placeholder.jpg"
                width={115}
                height={115}
                alt="project 1"
              />
            </div>
            <div className="description">
              <p className="name">Lorem Ipsum</p>
              <p className="techs">HTML - CSS - JS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
