import { Link } from 'react-router-dom';
import React, {useState, useEffect, useContext} from 'react';

import { DarkModeContext } from '../../context/darkModeContext'
const BotonesNav = () => {
  const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const cambiarEstado = () => {
    toggleDarkMode()
    console.log(darkMode)
}
    return (
      
        <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link itemsNavBar" aria-current="page" to="/" >Home</Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link itemsNavBar" to="/contacto">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link itemsNavBar" to="/carrito">Carrito</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link itemsNavBar" to="/about">About</Link>
              </li>
              <li className="nav-item">
              
              </li>
            </ul>
            <button className="btn btn-outline-dark itemsNavBar" onClick={cambiarEstado}><i className="fa-sharp fa-solid fa-moon"></i></button>
        </div>
        </>
    );
}

export default BotonesNav;
