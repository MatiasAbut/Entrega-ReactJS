import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Carrito from './Pages/Carrito';
import Navbar from './Navegation/Navbar';
import Contacto from './Pages/Contacto';
import About from './Pages/About';
import Producto from './Pages/Producto';



const App = () => {
    return (
        <>
           <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/producto/:id" element={<Producto/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contacto" element={<Contacto/>} />
                    <Route path="/carrito" element={<Carrito/>} />
                </Routes>

           </BrowserRouter>
        </>

    );
}

export default App;
