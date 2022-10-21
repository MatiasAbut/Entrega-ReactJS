import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { getProductos } from '../../Utils/firebase';
const Tipos = () => {
    const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
    const [productos, setProductos] = useState([]);
    const {tipo} = useParams()
    useEffect(() => {
        getProductos().then(productos => {
            const productosTipos = productos.filter(producto => producto[1].tipo == tipo )
            console.log(productosTipos)
            const cartWidget = productosTipos.map(producto => 
                <div id="catalogoProductos" className={darkMode ? 'darkmode catProd ' : 'catProd '}>    
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
            ) 
            
            
            
            
            setProductos(cartWidget)
        })
    }, [tipo])



    return (
        <>
        <section id="catalogoProductos" className={darkMode ? 'darkmode containerShop ' : 'containerShop '}>
            {productos}   
        </section>
        </>
    );
}

export default Tipos;
