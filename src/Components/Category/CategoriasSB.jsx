import React from 'react';
import Footer from './SideBar/Footer';
import ProductosSB from './SideBar/ProductosSB';
import TiposSB from './SideBar/TiposSB';

const CategoriasSB = () => {
    return (
        <>
    <section id="sidebar">
      <div>
        <h6 className="p-1 border-bottom">Productos</h6>
        <ProductosSB/>
      </div>
      <div>
        <h6 className="p-1 border-bottom">Filtro</h6>
        <p className="mb-2">Tipos</p>
        <TiposSB/>
      </div>
      <h6 className="p-1 border-bottom" />
        <Footer/>
    </section>
        </>
    );
}

export default CategoriasSB;
