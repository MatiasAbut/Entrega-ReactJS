import React from 'react';

const PrecioSB = () => {

  // function filtrarPrecio() {
  //   let lista = listaProductos.filter((producto) => producto.precio <= 200)
  //   catalogoProductos.innerHTML = ""
  //   render(lista)
  // }
  
  // function filtrarPrecio2() {
  //   let lista = listaProductos.filter((producto) => producto.precio > 200 && producto.precio < 500)
  //   catalogoProductos.innerHTML = ""
  //   render(lista)
  // }
  
  // function filtrarPrecio3() {
  //   let lista = listaProductos.filter((producto) => producto.precio >= 500)
  //   catalogoProductos.innerHTML = ""
  //   render(lista)
  // }


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
              onClick={"filtrarPrecio(botonHasta200)"}
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
              onClick={"filtrarPrecio2(boton200a500)"}
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
              onClick={"filtrarPrecio3(botonMas500)"}
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
