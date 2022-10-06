import React from 'react'

const Buscador = () => {



  
    return (
        <>
        
                      <form className="d-flex" role="search">
            <input
              id="formulario"
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos"
                // value={search} 
                // onChange={searcher} 
            />
            <button
              id="botonBuscar"
              className="btn btn-outline-dark"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </>
    );
}

export default Buscador;
