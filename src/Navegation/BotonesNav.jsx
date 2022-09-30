import { Link } from 'react-router-dom';
import Buscador from './Buscador';

const BotonesNav = () => {
    return (
        <>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link itemsNavBar" aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link itemsNavBar" to="/contacto">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link itemsNavBar" to="/carrito">Carrito</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link itemsNavBar" to="/about">About</Link>
              </li>
            </ul>
          
          <Buscador/>
          </div>
        </>
    );
}

export default BotonesNav;
