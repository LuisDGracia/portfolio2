import React from 'react'
import './AboutStyles.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__photo">
          <img src={"/assets/images/profile-pic.jpg"} alt="Luis De Gracia" height={115} />
        </div>

        <div className="about__text">
          <h3 className="about__tittle"> About </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            reprehenderit porro velit totam unde laudantium sequi earum quisquam
            beatae explicabo optio ipsam provident aut aperiam repellendus sed,
            impedit quo! Culpa?{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About
