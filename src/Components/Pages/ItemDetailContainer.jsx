import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';
// import { cartWidget } from '../cartWidget/cartWidget';

const Producto = () => {
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
        
        <div id="container">
        <DetalleProducto producto = {producto}/>
        </div>

        </>
    );
}

export default Producto;
