import React from 'react';
import { Link } from 'react-router-dom';
const TiposSB = () => {

    return (
        <>
            <ul className="list-group botonesTipos">
          <li
            id="botonDulce"
            className="list-group-item list-group-item-action mb-2 rounded botonDulce1"
          >
            <Link id="botonDulce" to="/tipos/dulce" href="#">
              Dulce
            </Link>
          </li>
          <li
            id="botonSalado"
            className="list-group-item list-group-item-action mb-2 rounded botonSalado1"
          >
            <Link id="botonSalado" to="/tipos/salado" href="#">
              Salado
            </Link>
          </li>
          <li
            id="botonDietetico"
            className="list-group-item list-group-item-action mb-2 rounded botonDietetico1"
          >
            <Link id="botonDietetico" to="/tipos/dietetico" href="#">
              Dietetico
            </Link>
          </li>
        </ul>
        </>
    );
}

export default TiposSB;
