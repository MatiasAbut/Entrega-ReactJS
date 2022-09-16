import React from 'react';

const TiposSB = () => {
    return (
        <>
            <ul className="list-group botonesTipos">
          <li
            id="botonDulce"
            className="list-group-item list-group-item-action mb-2 rounded botonDulce1"
          >
            <a id="botonDulce" href="#">
              <span className="fa fa-circle pr-1" id="red" />
              Dulce
            </a>
          </li>
          <li
            id="botonSalado"
            className="list-group-item list-group-item-action mb-2 rounded botonSalado1"
          >
            <a id="botonSalado" href="#">
              <span className="fa fa-circle pr-1" id="teal" />
              Salado
            </a>
          </li>
          <li
            id="botonDietetico"
            className="list-group-item list-group-item-action mb-2 rounded botonDietetico1"
          >
            <a id="botonDietetico" href="#">
              <span className="fa fa-circle pr-1" id="blue" />
              Dietetico
            </a>
          </li>
          <li
            id="botonCeliaco"
            className="list-group-item list-group-item-action mb-2 rounded botonCeliaco1"
          >
            <a id="botonCeliaco" href="#">
              <span className="fa fa-circle pr-1" id="red" />
              Celiacos
            </a>
          </li>
        </ul>
        </>
    );
}

export default TiposSB;
