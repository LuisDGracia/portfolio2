import React from 'react'
import './HeaderStyles.css'
import NavItems from '../Navigation/NavItems/NavItems'
import SideDrawer from '../Navigation/Side_Drawer/Side_Drawer';
import DrawerToggler from '../Navigation/Side_Drawer/Drawer_Toggler/Drawer_Toggler';

function Header({ drawerTogglerClicked }) {
  return (
    <header>
      <div className="header__filter" >
        <div className="container">
          <DrawerToggler clicked = { drawerTogglerClicked } />
          <div className="DesktopOnly" >
            <NavItems />
          </div>
          <div className="header__text-container">
            <div className="header__text">
              <h1 className="header__name">Luis De Gracia</h1>
              <h2 className="header__job">Frontend Developer</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
