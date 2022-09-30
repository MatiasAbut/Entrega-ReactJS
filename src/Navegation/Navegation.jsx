import { Link } from 'react-router-dom';
import BotonesNav from './BotonesNav';



const Navegation = () => {
    return (
        <>
             <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CandyShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
         <BotonesNav/>
        </div>
        </>
    );
}

export default Navegation;
