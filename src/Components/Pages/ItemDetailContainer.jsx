import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext'
import DetalleProducto from './DetalleProducto';
import { getProducto } from '../../Utils/firebase';
// import { cartWidget } from '../cartWidget/cartWidget';

const Producto = () => {
const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
const [producto, setProducto] = useState([])
const {id} = useParams()
useEffect(() => {
getProducto(id).then(prod => {
    setProducto([prod.id, prod.data()])
    console.log([prod.id, prod.data()])
    })
}, [])

if (producto.length != 0) {
    return (
        <div id='containerDetalle' className={darkMode ? 'darkmode containerDetalle' : 'containerDetalle'}>
             <DetalleProducto producto = {producto}/>  
        </div> 
    );
}}

export default Producto;
