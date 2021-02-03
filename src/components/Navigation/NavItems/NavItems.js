import React, { Fragment } from "react";
import NavItem from './NavItem/NavItem'
import './NavItems.css'

function NavItems() {
	return (
		<Fragment>
			<nav className="header__menu">
				<NavItem href="#about" content="Acerca de" classes="header__link" />
				<NavItem href="#projects" content="Trabajos" classes="header__link" />
				<NavItem href="#contact" content="Contactos" classes="header__link" />
			</nav>
		</Fragment>
	);
}

export default NavItems;
