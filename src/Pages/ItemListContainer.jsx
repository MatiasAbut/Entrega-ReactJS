import React from 'react';
import CategoriasSB from '../Category/CategoriasSB.jsx';
import Main from './Main';
import MobileFilter from '../Components/MobileFilter';


const Home = () => {
    return (
        <>         
  <main className="div11">
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
