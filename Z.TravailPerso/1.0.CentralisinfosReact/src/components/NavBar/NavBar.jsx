import React, { useContext } from 'react';
import NavBarContext from './NavBarContext';

const NavBar = () => {
  const { navBarStyle } = useContext(NavBarContext);

  return (
    <nav style={navBarStyle}>
    <h2><a href="#">LOGO</a></h2>
    <p><a href="#">Centralisinfos</a></p>
      
    </nav>
  );
};

export default NavBar;
