import React from 'react';
import Buscador from './Buscador';
import CartWidget from './CartWidget';
import CategoriasNB from './CategoriasNB';

const Navbar = () => {
    return (
        <>
    <header>
    <nav className="navbar navbar-expand-lg barraNavegacion">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          CandyShop
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <CategoriasNB/>
        <Buscador/>
        </div>
      </div>
    </nav>
  </header>
  <CartWidget/>
        </>
    );
}

export default Navbar;
