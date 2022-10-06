import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { cartWidget } from '../CartWidget/cartWidget';
import { DarkModeContext } from '../../context/darkModeContext'
const Home = () => {
    const [productos, setProductos] = useState([]);

    const {darkMode, toggleDarkMode } = useContext(DarkModeContext)

    useEffect(() => {
        cartWidget().then(productos => {
            const cartWidget = productos.map(producto => 
                <div>
                <div id="catalogoProductos">    
                <section id="products">
                    <div className="container">
                    <div className="mercaderia">
                        <div className="mercaderia-card ">
                        <div className="card item" id="imagenProducto">
                            <img className="card-img-top itemImage" src={producto.image} alt="Card image cap"/> 
                            <div className="card-body">
                            <p className="card-text itemTitle">{producto.nombre}</p>
                            <p className="itemPrice">${producto.precio}</p>
                            <p>Stock: {producto.stock}</p>
                            <div className="divisionButton" >
                            <button className="item-button btn btn-primary addToCart button" onClick="##"><i className="fa-solid fa-cart-plus"></i></button>
                            <button className="item-button btn btn-primary button" ><Link className="verProducto" to={"/producto/"+ producto.id}>Ver producto</Link></button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
            </div> 
            ) 
            
            
            setProductos(cartWidget)
            })
    }, []);

    const cambiarEstado = () => {
        toggleDarkMode()
        console.log(darkMode)
    }


    return (
        <>
    <button onClick={() => cambiarEstado()}>Dark Mode</button>
    <section id="catalogoProductos" className="containerShop">
        {productos}   
    </section>        
        </>      
        
    );
}

export default Home;

