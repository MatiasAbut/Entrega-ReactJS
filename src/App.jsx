import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Styles/App.css'
import ItemListContainer from './Pages/ItemListContainer';
import Carrito from './Pages/Carrito';
import Navbar from './Navegation/Navbar';
import Contacto from './Pages/Contacto';
import About from './Pages/About';
import ItemDetailContainer from './Pages/ItemDetailContainer';
import Categoria from './Pages/Categoria';
import Tipos from './Pages/Tipos';




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
