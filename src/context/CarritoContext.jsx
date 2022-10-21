import React, {createContext, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (prod, cant) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  === prod[0]) //Si existe o no

        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
        const prodCarrito = {...prod, cantidad: cant}
        aux.push(prodCarrito)
        }
        setCarrito(structuredClone(aux))
        console.log(carrito)
        toast.success('Agregado al carrito! 🛒🛒', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id == prod[0]) 

        aux.splice(indice,1)
        setCarrito(structuredClone(aux))
        console.log(carrito)
        toast.warn('Eliminado del carrito!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    }

    const vaciarCarrito = () => {
        setCarrito([])
        console.log(carrito)
    }


    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto, vaciarCarrito}}>
                    {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};