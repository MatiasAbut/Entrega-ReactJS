import React, {useState, useEffect, useContext} from 'react';
import Navegation from './Navegation';

import { DarkModeContext } from '../../context/darkModeContext'


const Navbar = () => {
  const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <>
      <header>
      <nav className={darkMode ? 'darkmode-navbar navbar navbar-expand-lg barraNavegacion' : 'navbar navbar-expand-lg barraNavegacion'}>
        <Navegation/>
      </nav>
        </header>
        </>
    );
}

export default Navbar;
