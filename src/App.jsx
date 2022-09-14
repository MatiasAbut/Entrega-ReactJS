import React from 'react';
import './App.css'

const App = () => {
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active itemsNavBar"
                aria-current="page"
                href="index.html"
              >
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
          <form className="d-flex" role="search">
            <input
              id="formulario"
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos"
              aria-label="Search"
            />
            <button
              id="botonBuscar"
              className="btn btn-outline-dark"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
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
    {/* Sidebar */}
    <section id="sidebar">
      <div>
        <h6 className="p-1 border-bottom">Productos</h6>
        <ul className="buttonsSidebar">
          <li className="itemsListaSide">
            <a id="botonCaramelos" className="botonSideBar color-1" href="#">
              Caramelos
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonChupetines" className="botonSideBar color-2" href="#">
              Chupetines
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonGalletitas" className="botonSideBar color-3" href="#">
              Galletitas
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonChocolates" className="botonSideBar color-4" href="#">
              Chocolates
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonGomitas" className="botonSideBar color-5" href="#">
              Gomitas
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonBombon" className="botonSideBar color-6" href="#">
              Bombon
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonSnacks" className="botonSideBar color-7" href="#">
              Snacks
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonAlfajores" className="botonSideBar color-8" href="#">
              Alfajores
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonBarritas" className="botonSideBar color-9" href="#">
              Barrita
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonChicles" className="botonSideBar color-10" href="#">
              Chicles
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="p-1 border-bottom">Filtro</h6>
        <p className="mb-2">Tipos</p>
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
      </div>
      <div className="ui-search-filter-dl ">
        <div
          role="heading"
          aria-level={3}
          className="ui-search-filter-dt-title p-1 border-bottom"
        >
          Precio
        </div>
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
      </div>
      <h6 className="p-1 border-bottom" />
      <aside className="footer-section">
        <p className="">
          Copyright © 2022-2022 CandyShop. All rights reserved. Designed &amp;
          developed by Matias Abut.
        </p>
        <br />
        <ul className="">
          <li>
            <a href="https://wa.me/######" className="">
              <img
                src="Multimedia/whatsapp-logo-11.png"
                alt="whatsapp logo"
                width={30}
                height={30}
              />
              Whatsapp
            </a>
          </li>
          <br />
          <li>
            <a href="#" className="">
              <img
                src="Multimedia/instagramlogo.png"
                alt="instagram logo"
                width={30}
                height={30}
              />
              Instagram
            </a>
          </li>
          <br />
          <li>
            <a href="#" className="">
              <img
                src="Multimedia/yotubelogo.png"
                alt="youtube logo"
                width={35}
                height={25}
              />
              Youtube
            </a>
          </li>
        </ul>
      </aside>
    </section>
    <br />
    <section id="catalogoProductos" className="containerShop"></section>
  </main>
</>

    );
}

export default App;
