import {useState, useEffect, useContext} from 'react';
import { DarkModeContext } from '../../context/darkModeContext'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProductos, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOrdenCompra} from '../../Utils/firebase';
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
          Swal.fire({
            title: 'Esta es tu Orden de compra.',
            icon: 'info',
            html:
              '',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Ok!',
            confirmButtonAriaLabel: 'Thumbs up, great!'
          })  
            vaciarCarrito()

        } else if (result.isDenied) {
          
        }
      })
    }



    
        useEffect(() => {
            getProductos().then(productos => {
            const prodMostrar  = carrito.map(producto => 
                    <div className="row shoppingCartItem" key={producto[0]}>
            <div className="col-3">
                <div claclassNamess="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <img src={producto[1].image} className="shopping-cart-image"></img>
                    <h6 className="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">{producto[1].nombre}</h6>
                </div>
            </div>
            <div className="col-2">
                <div className="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p className="item-price mb-0 shoppingCartItemPrice">${producto[1].precio}</p>
                </div>
            </div>
            <div className="col-2">
                <div className="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                    <p className="card-text">{producto.cantidad}</p>
                </div>
            </div>
            <div className="col-3">
                <div className="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p className="card-text">{producto[1].precio * producto.cantidad} </p>
                </div>
            </div>
            <div className="col-2">
                <div className="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                </div>
            </div>
        </div>)
            setCarritoLocal(prodMostrar)
        })
    }, [carrito]);

        
        const app = (carrito.length != 0) ? <div className='row'>          
        <>
            {/* START SECTION SHOPPING CART */} 
        <section id="finalCompra" className={darkMode ? 'darkmode shopping-cart ' : 'shopping-cart '}>
        <div className="shopping-cart-header">
                    <h2 className='d-flex justify-content-center tituloCarrito'>Completa el formulario:</h2>
                <div className="signupFrm">
                    <div className="wrapper">
                        <form action="" className="form">
                        <div className="inputContainer">
                            <input type="text" className="input" placeholder="a" />
                            <label htmlFor="" className="label">
                            Nombre
                            </label>
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="input" placeholder="a" />
                            <label htmlFor="" className="label">
                            Apellido
                            </label>
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="input" placeholder="a" />
                            <label htmlFor="" className="label">
                            Direccion
                            </label>
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="input" placeholder="a" />
                            <label htmlFor="" className="label">
                            Email
                            </label>
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="input" placeholder="a" />
                            <label htmlFor="" className="label">
                            DNI
                            </label>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
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


