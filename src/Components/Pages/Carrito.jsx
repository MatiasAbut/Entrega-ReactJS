import {useState, useEffect, useContext} from 'react';
import { DarkModeContext } from '../../context/darkModeContext'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Carrito = () => {

    const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
    const {carrito, agregarProducto, quitarProducto, vaciarCarrito} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);


    function comprarButtonClicked() {  
    Swal.fire({
        title: 'Confirma la compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Gracias por su compra!', '', 'success')
            vaciarCarrito()

        } else if (result.isDenied) {
          
        }
      })
    }



    
        useEffect(() => {
            const prodMostrar  = carrito.map(producto => 
                    <div className="row shoppingCartItem" key={producto.id}>
            <div className="col-3">
                <div claclassNamess="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <img src={"../" + producto.image} className="shopping-cart-image"></img>
                    <h6 className="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">{producto.nombre}</h6>
                </div>
            </div>
            <div className="col-2">
                <div className="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p className="item-price mb-0 shoppingCartItemPrice">${producto.precio}</p>
                </div>
            </div>
            <div className="col-2">
                <div className="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                    <p className="card-text">{producto.cantidad}</p>
                </div>
            </div>
            <div className="col-3">
                <div className="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p className="card-text">{producto.precio * producto.cantidad} </p>
                </div>
            </div>
            <div className="col-2">
                <div className="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                </div>
            </div>
        </div>)
            setCarritoLocal(prodMostrar)
        }, [carrito]);
        
        const app = (carrito.length != 0) ? <div className='row'>          
        <>
            {/* START SECTION SHOPPING CART */} 
        <section id="finalCompra" className={darkMode ? 'darkmode shopping-cart ' : 'shopping-cart '}>
            <div className="containerCarrito">
            <h1 className="text-center">CARRITO</h1>
            <div className="row">
                <div className="col-3">
                <div className="shopping-cart-header">
                    <h6>Producto</h6>
                </div>
                </div>
                <div className="col-2">
                <div className="shopping-cart-header">
                    <h6 className="text-truncate">Precio</h6>
                </div>
                </div>
                <div className="col-2">
                <div className="shopping-cart-header">
                    <h6>Cantidad</h6>
                </div>
                </div>
                <div className="col-3">
                <div className="shopping-cart-header">
                    <h6>Total</h6>
                </div>
                </div>
                <div className="col-2">
                <div className="shopping-cart-header">
                    <h6>Eliminar</h6>
                </div>
                </div>
            </div>
                {/* ? START SHOPPING CART ITEMS */} 
            <div
                className="shopping-cart-items shoppingCartItemsContainer">{carritoLocal}</div>
                {/* ? END SHOPPING CART ITEMS */}
            </div>
        </section>
        <div className='d-flex justify-content-around'>
        <button className='btn btn-danger col-3 ' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        <button className='btn btn-dark col-5 ' onClick={() => comprarButtonClicked()}>Finalizar Compra</button>
        </div>
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
        {/* END SECTION SHOPPING CART */} 
            </>
    </div> 

    
    : 
    
    <>
            {/* START SECTION SHOPPING CART */} 
            <section id="finalCompra" className={darkMode ? 'darkmode shopping-cart ' : 'shopping-cart '}>
            <div className="containerCarrito">
            <h1 className="text-center">CARRITO</h1>
            <div className="row">
                <div className="col-3">
                <div className="shopping-cart-header">
                    <h6>Producto</h6>
                </div>
                </div>
                <div className="col-2">
                <div className="shopping-cart-header">
                    <h6 className="text-truncate">Precio</h6>
                </div>
                </div>
                <div className="col-2">
                <div className="shopping-cart-header">
                    <h6>Cantidad</h6>
                </div>
                </div>
                <div className="col-3">
                <div className="shopping-cart-header">
                    <h6>Total</h6>
                </div>
                </div>
                <div className="col-2">
                <div className="shopping-cart-header">
                    <h6>Eliminar</h6>
                </div>
                </div>
            </div>
                {/* ? START SHOPPING CART ITEMS */} 
            <div
                id="shoppingCartItemsContainer"
                className="shopping-cart-items shoppingCartItemsContainer"><h1>No existen elementos en el carrito <Link className='btn btn-dark' aria-current="page" to="/" >Ir al Home</Link></h1>
            </div>
                {/* ? END SHOPPING CART ITEMS */}
            </div>
        </section>
        {/* END SECTION SHOPPING CART */} 

            </>
    
        return app
    }
    


    export default Carrito;


