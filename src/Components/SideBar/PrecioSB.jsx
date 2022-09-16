import React from 'react';

const PrecioSB = () => {
    return (
        <>
            <ul>
          <li className="ui-search-filter-container">
            <a
              id="botonHasta200"
              href="#"
              className="ui-search-link"
              rel="nofollow"
              aria-label="Hasta $ 200"
            >
              <span className="ui-search-filter-name">Hasta $ 200</span>
            </a>
          </li>
          <li className="ui-search-filter-container">
            <a
              id="boton200a500"
              href="#"
              className="ui-search-link"
              rel="nofollow"
              aria-label="$200 a $500"
            >
              <span className="ui-search-filter-name">$200 a $500</span>
            </a>
          </li>
          <li className="ui-search-filter-container">
            <a
              id="botonMas500"
              href="#"
              className="ui-search-link"
              rel="nofollow"
              aria-label="Más de $500"
            >
              <span className="ui-search-filter-name">Más de $500</span>
            </a>
          </li>
          <br />
        </ul>
        </>
    );
}

export default PrecioSB;
