import React, { createContext, useState } from 'react';

const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  
  const [navBarStyle, setNavBarStyle] = useState({
    color: '#FFFFFF',
    backgroundColor: '#070025',
    height: "60px",
    lineHeight: "60px",

    display: "flex",
    flexDirection: "row",
    listStyleType: "none"
  });

  const updateNavBarStyle = (newStyle) => {
    setNavBarStyle({ ...navBarStyle, ...newStyle });
  };

  return (
    <NavBarContext.Provider value={{ navBarStyle, updateNavBarStyle }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarContext;
