// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34755-2022.firebaseapp.com",
  projectId: "react-34755-2022",
  storageBucket: "react-34755-2022.appspot.com",
  messagingSenderId: "712000535367",
  appId: "1:712000535367:web:013eb45e211c638d202a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/data.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
      await addDoc(collection(db,"productos"), {
            nombre: producto.nombre,
            precio: producto.precio,
            stock: producto.stock,
            image: producto.image,
            tipo: producto.tipo,
            celiaco: producto.celiaco,
            categoria: producto.categoria,

      })
    })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db,"productos", id))
  return producto
}

const getProductos = async () => {
  const productos = await getDocs(collection(db,"productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

const updateProducto = async (id, info) => {
const estado = await updateDoc(doc(db,"productos", id), info)
return estado
}

const deleteProducto = async (id) => {
  const estado = await deleteDoc(doc(db,"productos", id))
  return estado
}

const createProducto = async (objProd) => {
  const estado = await addDoc(collection(db,"productos"), {
    nombre: objProd.nombre,
    precio: objProd.precio,
    stock: objProd.stock,
    image: objProd.image,
    tipo: objProd.tipo,
    celiaco: objProd.celiaco,
    categoria: objProd.categoria,
  })
  
  return estado
} 

const createOrdenCompra = async (nombre, apellido, dni, telefono, email, direccion, dia, hora, productos, total) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
      nombre: nombre, 
      apellido: apellido,
      dni: dni,
      telefono: telefono,
      email: email,
      direccion: direccion,
      dia: dia,
      hora: hora,
      productos: productos,
      precioTotal: total
  })
  return ordenCompra
  }

  const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
}

export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOrdenCompra}