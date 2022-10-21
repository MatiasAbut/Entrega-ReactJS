import React, {useState, useEffect, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { DarkModeContext } from '../../context/darkModeContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DetalleProducto = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    
    const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
    const{carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)

    const cantProducto = (operacion) => {
      if(operacion == "+") {
          if(cantidad < producto[1].stock) {
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
  <div className={darkMode ? 'darkmode product-details' : 'product-details'}>
    {/* 	Product Name */}
    <h1>{producto[1].nombre}</h1>
    {/* The most important information about the product */}
    <p className="information">
    Stock: {producto[1].stock}
    </p>
    {/* 		Control */}
    <div className="control">
      {/* Start Button buying */}
      <button className="btn addToCart" onClick={() => agregarProducto(producto, cantidad) }>
        {/* 		the Price */}
        <span className="price">${producto[1].precio}</span>
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
  <img src={`${producto[1].image}`} className="img-fluid rounded-start" alt="..." />
    {/* 	product Information*/}
    <div className="info ">
          <p>{producto[1].celiaco} </p> 
    </div>
  </div>
  {/*  End product image  */}
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        </>
    );
}

export default DetalleProducto;
