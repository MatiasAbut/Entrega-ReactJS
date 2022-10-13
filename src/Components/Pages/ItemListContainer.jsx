import React, {useState, useEffect, useContext} from 'react';
import CategoriasSB from '../Category/CategoriasSB.jsx';
import Main from './Main';
import MobileFilter from '../MobileFilter';
import { DarkModeContext } from '../../context/darkModeContext'



const Home = () => {
  const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <>         
  <main className={darkMode ? 'darkmode div11' : 'div11'}>
    <div className="filter">
      <button
        className="btn btn-default"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-filter"
        aria-expanded="false"
        aria-controls="mobile-filter"
      >
        <span className="fa fa-filter pl-1" />
      </button>
    </div>
      <MobileFilter/>
    <CategoriasSB/>
    <br />
    <Main/>
  </main> 
        </>
    );
}

export default Home;
