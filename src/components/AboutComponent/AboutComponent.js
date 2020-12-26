import React from 'react'

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="photo">
          <img src={"/assets/images/profile-pic.jpg"} alt="Luis De Gracia" height={115} />
        </div>

        <div className="text">
          <h3 className="tittle"> About </h3>
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
