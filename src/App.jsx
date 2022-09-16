import React from 'react';
import './App.css'
import CategoriasSB from './Components/CategoriasSB';
import Navbar from './Components/Navbar';

const App = () => {
    return (
        <>
  <Navbar/>
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
    {/* Mobile Filter */}
    <div id="mobile-filter"></div>
    <CategoriasSB/>
    <br />
    <section id="catalogoProductos" className="containerShop"></section>
  </main>
</>

    );
}

export default App;
