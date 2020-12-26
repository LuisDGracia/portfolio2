import './App.css';
import 'normalize.css'

function App() {
  return (
    <section className="App" id="body">
      <header>
        <div className="container">
          <nav className="menu">
            <a href=".about">Acerca de</a>
            <a href=".projects">Trabajos</a>
            <a href=".contact">Contactos</a>
          </nav>
          <div className="text-container">
            <div className="text">
              <h1 className="name">Luis De Gracia</h1>
              <h2 className="job">Frontend Developer</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="main">
        <section className="about">
          <div className="container">
            <div className="photo">
              <img
                src={"/assets/images/profile-pic.jpg"}
                alt="Luis De Gracia"
                height={115}
              />
            </div>

            <div className="text">
              <h3 className="tittle"> About </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                reprehenderit porro velit totam unde laudantium sequi earum
                quisquam beatae explicabo optio ipsam provident aut aperiam
                repellendus sed, impedit quo! Culpa?{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="container">
            <h3 className="tittle">Projects</h3>
            <div className="projects-container">
              
              <div className="project">
                <div className="thumb">
                  <img src="/assets/images/placeholder.jpg" width={115} height={115} alt="project 1" />
                </div>
                <div className="description">
                  <p className="name">Lorem Ipsum</p>
                  <p className="techs">HTML - CSS - JS</p>
                </div>
              </div>

              <div className="project">
                <div className="thumb">
                  <img src="/assets/images/placeholder.jpg" width={115} height={115} alt="project 1" />
                </div>
                <div className="description">
                  <p className="name">Lorem Ipsum</p>
                  <p className="techs">HTML - CSS - JS</p>
                </div>
              </div>

              <div className="project">
                <div className="thumb">
                  <img src="/assets/images/placeholder.jpg" width={115} height={115} alt="project 1" />
                </div>
                <div className="description">
                  <p className="name">Lorem Ipsum</p>
                  <p className="techs">HTML - CSS - JS</p>
                </div>
              </div>

              <div className="project">
                <div className="thumb">
                  <img src="/assets/images/placeholder.jpg" width={115} height={115} alt="project 1" />
                </div>
                <div className="description">
                  <p className="name">Lorem Ipsum</p>
                  <p className="techs">HTML - CSS - JS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default App;
