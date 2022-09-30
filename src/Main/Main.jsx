import React, {useState, useEffect} from 'react';
import { cartWidget } from '../Components/CartWidget/cartWidget.js';
const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        cartWidget().then(producto => setProductos(producto))
    }, []);


    return (
        <>
    <section id="catalogoProductos" className="containerShop">
        {productos}   
    </section>
              

        </>      
        
    );
}

export default Home;

