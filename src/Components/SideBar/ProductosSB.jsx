import React from 'react';



const ProductosSB = () => {
  
  // function filtrarTipo(tipo) {
  //   let lista = listaProductos.filter((producto) => producto.tipo == tipo)
  //   catalogoProductos.innerHTML = ""
  //   render(lista)
  // }
  
    return (
        <>
            <ul className="buttonsSidebar">
          <li className="itemsListaSide">
            <a id="botonCaramelos" className="botonSideBar color-1" onClick={"filtrarTipo(caramelos)"} href="#">
              Caramelos
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonChupetines" className="botonSideBar color-2" onClick={"filtrarTipo(chupetines)"} href="#">
              Chupetines
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonGalletitas" className="botonSideBar color-3" onClick={"filtrarTipo(galletitas)"} href="#">
              Galletitas
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonChocolates" className="botonSideBar color-4" onClick={"filtrarTipo(chocolates)"} href="#">
              Chocolates
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonGomitas" className="botonSideBar color-5" onClick={"filtrarTipo(gomitas)"} href="#">
              Gomitas
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonBombon" className="botonSideBar color-6" onClick={"filtrarTipo(bombon)"} href="#">
              Bombon
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonSnacks" className="botonSideBar color-7" onClick={"filtrarTipo(snacks)"} href="#">
              Snacks
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonAlfajores" className="botonSideBar color-8" onClick={"filtrarTipo(alfajores)"} href="#">
              Alfajores
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonBarritas" className="botonSideBar color-9" onClick={"filtrarTipo(barrita)"} href="#">
              Barrita 
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonChicles" className="botonSideBar color-10" onClick={"filtrarTipo(chicles)"} href="#">
              Chicles
            </a>
          </li>
        </ul>
        </>
    );
}

export default ProductosSB;
