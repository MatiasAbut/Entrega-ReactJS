import React from 'react';

const CategoriasNB = () => {
    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active itemsNavBar" aria-current="page" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link itemsNavBar" href="contacto.html">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link itemsNavBar" href="carrito.html">
                Carrito
              </a>
            </li>
          </ul>
        </>
    );
}

export default CategoriasNB;
