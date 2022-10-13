import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CarritoProvider } from './context/CarritoContext';
import App from './App';
import Carrito from './Components/Pages/Carrito';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);


