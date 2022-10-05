import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Styles/App.css'
import ItemListContainer from './Components/Pages/ItemListContainer';
import Carrito from './Components/Pages/Carrito';
import Navbar from './Components/Navegation/Navbar';
import Contacto from './Components/Pages/Contacto';
import About from './Components/Pages/About';
import ItemDetailContainer from './Components/Pages/ItemDetailContainer';
import Categoria from './Components/Pages/Categoria';
import Tipos from './Components/Pages/Tipos';




const App = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/producto/:id" element={<ItemDetailContainer/>} />
                <Route path="/categoria/:categoria" element={<Categoria/>} />
                <Route path="/tipos/:tipo" element={<Tipos/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/carrito" element={<Carrito/>} />
            </Routes>

        </BrowserRouter>
        </>

    );
}

export default App;
