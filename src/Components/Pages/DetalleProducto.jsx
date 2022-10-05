import { useState } from 'react'

const DetalleProducto = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    const carrito = []


    const agregarAlCarrito = (prod, cant) => {
        let indice = carrito.findIndex(producto => producto.id  == prod.id) //Si existe o no

        if(indice != -1) {
          carrito[indice].cantidad = cant
        } else {
          const prodCarrito = {id: prod.id, cantidad: cant}
          carrito.push(prodCarrito)
        }
        console.log(carrito)
    }

    const cantProducto = (operacion) => {
      if(operacion == "+") {
          if(cantidad < producto.stock) {
            setCantidad(cantidad + 1)
          }   
      } else {
        if(cantidad > 1) {
          setCantidad(cantidad - 1)
        }
    }
    }
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
      <button className="btn addToCart" onClick={() => agregarAlCarrito(producto, cantidad) }>
        {/* 		the Price */}
        <span className="price">${producto.precio}</span>
        {/* 		shopping cart icon*/}
        <span className="shopping-cart">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
        </span>
        {/* 		Buy Now / ADD to Cart*/}
        
        <span className="buy">Comprar</span>
      </button>
      <div className='botonesStock'>
      <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>
      <p className='card-text'>{cantidad}</p>
      <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button>
      </div>
      {/* End Button buying */}
    </div>
  </div>
  {/* 	End	Product details   */}
  {/* 	Start product image & Information */}
  <div className="product-image">
  <img src={`../${producto.image}`} className="img-fluid rounded-start" alt="..." />
    {/* 	product Information*/}
    <div className="info">
      <ul>
        <li className='logoSinTacc'>
          <img src={`../${producto.celiaco}`} />
        </li>
        <li>
          <strong></strong>
        </li>
      </ul>
    </div>
  </div>
  {/*  End product image  */}

        </>
    );
}

export default DetalleProducto;
