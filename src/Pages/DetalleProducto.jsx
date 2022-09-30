import React from 'react';

const DetalleProducto = ({producto}) => {
    return (
        <>
            
  {/* Start	Product details */}
  <div className="product-details">
    {/* 	Product Name */}
    <h1>{producto.nombre}</h1>
    {/* The most important information about the product */}
    <p className="information">
    Stock: {producto.stock}
    </p>
    {/* 		Control */}
    <div className="control">
      {/* Start Button buying */}
      <button className="btn addToCart">
        {/* 		the Price */}
        <span className="price">${producto.precio}</span>
        {/* 		shopping cart icon*/}
        <span className="shopping-cart">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
        </span>
        {/* 		Buy Now / ADD to Cart*/}
        <span className="buy">Comprar</span>
      </button>
      {/* End Button buying */}
    </div>
  </div>
  {/* 	End	Product details   */}
  {/* 	Start product image & Information */}
  <div className="product-image">
  <img src={`../${producto.image}`} className="img-fluid rounded-start" alt="..." />
    {/* 	product Information*/}
    <div className="info">
      <h2>Descripcion</h2>
      <ul>
        <li>
          <strong>{producto.tipo} </strong>
        </li>
        <li>
          <strong>{producto.categoria}</strong>
        </li>
      </ul>
    </div>
  </div>
  {/*  End product image  */}

        </>
    );
}

export default DetalleProducto;
