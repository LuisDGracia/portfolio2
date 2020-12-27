import './App.css';
import 'normalize.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from './components/HeaderComponent/HeaderComponent';
import About from './components/AboutComponent/AboutComponent';
import Projects from './components/ProjectsComponent/ProjectsComponent';
import Contact from './components/ContactComponent/ContactComponent';
import Social from './components/SocialComponent/SocialComponent';

function App() {

  library.add( fab );

  return (
    <section className="App" id="body">
      <Header />
      <section className="main">
        <About />
        <Projects />
      </section>

      <footer>
        <Contact />
        <Social />
      </footer>
    </section>
  );
}

export default App;
