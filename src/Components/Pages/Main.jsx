import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { cartWidget } from '../CartWidget/cartWidget';
import { DarkModeContext } from '../../context/darkModeContext'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { getProductos } from '../../Utils/firebase';
const Home = () => {
    const [productos, setProductos] = useState([]);

    const {darkMode, toggleDarkMode } = useContext(DarkModeContext)

    useEffect(() => {
        getProductos().then(productos => {
            const cartWidget = productos.map(producto => 
                <div>
                <div id="catalogoProductos">    
                <section id="products">
                    <div className="containerr">
                    <div className="mercaderia">
                        <div className={darkMode ? 'darkmode mercaderia-card ' : 'mercaderia-card '}>
                        <div id="imagenProducto"className={darkMode ? 'darkmode-navbar card item' : 'card item'}>
                            <img className="card-img-top itemImage" src={producto[1].image} alt="Card image cap"/> 
                            <div className="card-body">
                            <p className="card-text itemTitle">{producto[1].nombre}</p>
                            <p className="itemPrice">${producto[1].precio}</p>
                            <p>Stock: {producto[1].stock}</p>
                            <div className="divisionButton" >
                            <button className="item-button btn btn-primary button" ><Link className="verProducto" to={"/producto/"+ producto[0]}>Ver producto</Link></button>
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



    return (
        <>
    <section id="catalogoProductos" className={darkMode ? 'darkmode containerShop' : 'containerShop' }>
        {productos}   
    </section>        
        </>      
        
    );
}

export default Home;

