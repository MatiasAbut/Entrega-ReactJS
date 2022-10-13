import { Link } from 'react-router-dom';
import BotonesNav from './BotonesNav';
import React, {useState, useEffect, useContext} from 'react';
import { DarkModeContext } from '../../context/darkModeContext'

const Navegation = () => {
  const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <>
        <div className={darkMode ? 'darkmode-navbar container-fluid' : 'container-fluid'}>
          <Link className={darkMode ? 'darkmode-logo navbar-brand' : 'navbar-brand'} to="/">
            CandyShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <BotonesNav/>
        </div>
        </>
    );
}

export default Navegation;
