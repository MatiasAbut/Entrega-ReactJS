import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext'
import DetalleProducto from './DetalleProducto';
// import { cartWidget } from '../cartWidget/cartWidget';

const Producto = () => {
const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
const [producto, setProducto] = useState([])
const {id} = useParams()
useEffect(() => {
    fetch('../json/data.json')
    .then(response => response.json())
    .then(productos => {
        const producto1 = productos.find(productoArray => productoArray.id == id)
        setProducto(producto1)
    })
})

    return (
        <>
        
        <div id='containerDetalle' className={darkMode ? 'darkmode containerDetalle' : 'containerDetalle'}>
        <DetalleProducto producto = {producto}/>
        </div>

        </>
    );
}

export default Producto;
