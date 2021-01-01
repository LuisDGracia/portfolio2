import React, { useState } from 'react'

import './App.css';
import 'normalize.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from './components/HeaderComponent/HeaderComponent';
import About from './components/AboutComponent/AboutComponent';
import Projects from './components/ProjectsComponent/ProjectsComponent';
import Contact from './components/ContactComponent/ContactComponent';
import Social from './components/SocialComponent/SocialComponent';
import SideDrawer from './components/Navigation/Side_Drawer/Side_Drawer';

function App() {
  library.add( fab );
  const [showDrawer, setshowDrawer] = useState(false)

  
  const sideDrawerClosedHandler = () => {
    setshowDrawer(false)
  }
  
  const sideDrawerTogglerHandler = () => {
		setshowDrawer( !showDrawer )
	}


  return (
    <section className="App" id="body">
      <Header drawerTogglerClicked = { sideDrawerTogglerHandler } />
      <SideDrawer
       open = { showDrawer } 
       closed = { sideDrawerClosedHandler } />

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
