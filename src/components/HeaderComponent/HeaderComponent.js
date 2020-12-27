import React from 'react'
import './HeaderStyles.css'

function Header() {
  return (
    <header>
      <div className="filter">
        <div className="container">
          <nav className="menu">
            <a href="#about">Acerca de</a>
            <a href="#projects">Trabajos</a>
            <a href="#contact">Contactos</a>
          </nav>
          <div className="text-container">
            <div className="text">
              <h1 className="name">Luis De Gracia</h1>
              <h2 className="job">Frontend Developer</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
