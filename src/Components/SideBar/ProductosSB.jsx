import { Link } from 'react-router-dom';



const ProductosSB = () => {
  
  
    return (
        <>
            <ul className="buttonsSidebar">
          <li className="itemsListaSide">
            <a id="botonCaramelos" className="botonSideBar color-1"  href="#">
              <Link className='verProducto' to="/categoria/caramelos">Caramelos</Link>
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonChupetines" className="botonSideBar color-2" onClick={"filtrarTipo(chupetines)"} href="#">
              <Link className='verProducto' to={"/categoria/chupetines"}>Chupetines</Link>
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonGalletitas" className="botonSideBar color-3" onClick={"filtrarTipo(galletitas)"} href="#">
              <Link className='verProducto' to="/categoria/galletitas">Galletitas</Link>
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonChocolates" className="botonSideBar color-4" onClick={"filtrarTipo(chocolates)"} href="#">
              <Link className='verProducto' to="/categoria/chocolates">Chocolates</Link>
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonGomitas" className="botonSideBar color-5" onClick={"filtrarTipo(gomitas)"} href="#">
              <Link className='verProducto' to="/categoria/gomitas">Gomitas</Link>
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonBombon" className="botonSideBar color-6" onClick={"filtrarTipo(bombon)"} href="#">
              <Link className='verProducto' to="/categoria/bombon">Bombon</Link>
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonSnacks" className="botonSideBar color-7" onClick={"filtrarTipo(snacks)"} href="#">
              <Link className='verProducto' to="/categoria/snacks">Snacks</Link>
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonAlfajores" className="botonSideBar color-8" onClick={"filtrarTipo(alfajores)"} href="#">
              <Link className='verProducto' to="/categoria/alfajores">Alfajores</Link>
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonBarritas" className="botonSideBar color-9" onClick={"filtrarTipo(barrita)"} href="#">
              <Link className='verProducto' to="/categoria/barritas">Barrita</Link>
            </a>
          </li>
          <li className="itemsListaSide">
            <a id="botonChicles" className="botonSideBar color-10" onClick={"filtrarTipo(chicles)"} href="#">
              <Link className='verProducto' to="/categoria/chicles">Chicles</Link>
            </a>
          </li>
        </ul>
        </>
    );
}

export default ProductosSB;
