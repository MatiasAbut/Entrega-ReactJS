import React from 'react';

const TiposSB = () => {

  // function filtrarCeliaco(celiaco) {
  //   let lista = listaProductos.filter((producto) => producto.celiaco == celiaco)
  //   catalogoProductos.innerHTML = ""
  //   render(lista)
  // }
  
  // function filtrarCategoria(categoria) {
  //   let lista = listaProductos.filter((producto) => producto.categoria == categoria)
  //   catalogoProductos.innerHTML = ""
  //   render(lista)
  // }

    return (
        <>
            <ul className="list-group botonesTipos">
          <li
            id="botonDulce"
            className="list-group-item list-group-item-action mb-2 rounded botonDulce1"
            onClick={"filtrarCategoria(dulce)"}
          >
            <a id="botonDulce" onClick={"filtrarCategoria(dulce)"} href="#">
              Dulce
            </a>
          </li>
          <li
            id="botonSalado"
            className="list-group-item list-group-item-action mb-2 rounded botonSalado1"
            onClick={"filtrarCategoria(salado)"}
          >
            <a id="botonSalado" onClick={"filtrarCategoria(salado)"} href="#">
              Salado
            </a>
          </li>
          <li
            id="botonDietetico"
            className="list-group-item list-group-item-action mb-2 rounded botonDietetico1"
            onClick={"filtrarCategoria(dietetico)"}
          >
            <a id="botonDietetico" onClick={"filtrarCategoria(dietetico)"} href="#">
              Dietetico
            </a>
          </li>
          <li
            id="botonCeliaco"
            className="list-group-item list-group-item-action mb-2 rounded botonCeliaco1"
            onClick={"filtrarCeliaco(celiaco)"}
          >
            <a id="botonCeliaco" onClick={"filtrarCeliaco(celiaco)"} href="#">
              Celiacos
            </a>
          </li>
        </ul>
        </>
    );
}

export default TiposSB;
