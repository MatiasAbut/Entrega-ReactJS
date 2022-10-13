import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext'
const Categoria = () => {
    const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams()
    useEffect(() => {
        fetch('../json/data.json')
        .then(response => response.json())
        .then(productos => {
            const productosCategoria = productos.filter(producto => producto.categoria == categoria )
            console.log(productosCategoria)
            const cartWidget = productosCategoria.map(producto => 
                <div>
                <div id="catalogoProductos" className={darkMode ? 'darkmode catProd ' : 'catProd '}>    
                <section id="products">
                    <div className="containerr">
                    <div className="mercaderia">
                        <div className={darkMode ? 'darkmode mercaderia-card ' : 'mercaderia-card '}>
                        <div id="imagenProducto"className={darkMode ? 'darkmode-navbar card item' : 'card item'}>
                            <img className="card-img-top itemImage" src={"../" + producto.image} alt="Card image cap"/> 
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
            </div>  ) 
            
            
            
            
            setProductos(cartWidget)
        })
    }, [categoria]);
    return (
    <section id="catalogoProductos" className={darkMode ? 'darkmode containerShop ' : 'containerShop '}>
        {productos}   
    </section> 
            
        
    );
}

export default Categoria;