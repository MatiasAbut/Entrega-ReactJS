
    import {useState, useEffect} from 'react'
    import { Link } from 'react-router-dom';
    
    const Catalogo = () => {

    const [ productos, setProductos ] = useState([])
    const [ search, setSearch ] = useState("")

    const URL = '../json/data.json'

    const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setProductos(data)
    console.log(data)
    }   
    // función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)   
    }
    const results = !search ? productos : productos.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
    useEffect( ()=> {
    showData()
    }, [])

        return (
            <>
                { results.map( (producto) => (
                        <tr key={producto.id}>
                    <div id="catalogoProductos">    
                    <section id="products">
                        <div className="container">
                        <div className="mercaderia">
                            <div className="mercaderia-card ">
                            <div className="card item" id="imagenProducto">
                                <img className="card-img-top itemImage" src={producto.image} alt="Card image cap"/> 
                                <div className="card-body">
                                <p className="card-text itemTitle">{producto.nombre}</p>
                                <p className="itemPrice">${producto.precio}</p>
                                <p>Stock: {producto.stock}</p>
                                <div className="divisionButton" >
                                <button className="item-button btn btn-primary addToCart button" onClick="##"><i className="fa-solid fa-cart-plus"></i></button>
                                <button className="item-button btn btn-primary button" ><Link className="verProducto" to={"/producto/"+ producto.id}>Ver producto</Link></button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
                        </tr>                    
                    ))}
            </>
        );
    }

    export default Catalogo;
