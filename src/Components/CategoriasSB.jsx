import React from 'react';
import Footer from './Footer';
import PrecioSB from './SideBar/PrecioSB';
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
      <div className="ui-search-filter-dl ">
        <div
          role="heading"
          aria-level={3}
          className="ui-search-filter-dt-title p-1 border-bottom"
        >Precio
        </div>
        <PrecioSB/>
      </div>
      <h6 className="p-1 border-bottom" />
        <Footer/>
    </section>
        </>
    );
}

export default CategoriasSB;
