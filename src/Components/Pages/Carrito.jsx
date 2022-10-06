import React from 'react';

const Carrito = () => {










    return (
        <>
        <main>
     {/* START SECTION SHOPPING CART */} 
    <section id="finalCompra" className="shopping-cart">
        <div className="container">
        <h1 className="text-center">CARRITO</h1>
        <div className="row">
            <div className="col-6">
            <div className="shopping-cart-header">
                <h6>Producto</h6>
            </div>
            </div>
            <div className="col-2">
            <div className="shopping-cart-header">
                <h6 className="text-truncate">Precio</h6>
            </div>
            </div>
            <div className="col-4">
            <div className="shopping-cart-header">
                <h6>Cantidad</h6>
            </div>
            </div>
        </div>
         {/* ? START SHOPPING CART ITEMS */} 
        <div
            id="shoppingCartItemsContainer"
            className="shopping-cart-items shoppingCartItemsContainer"
        ></div>
         {/* ? END SHOPPING CART ITEMS */}
         {/* START TOTAL */} 
        <div className="row">
            <div className="col-12">
            <div className="shopping-cart-total d-flex align-items-center">
                <p className="mb-0">Total=</p>
                <p className="ml-4 mb-0 shoppingCartTotal">$ 0</p>
                <div
                className="toast ml-auto bg-info"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-delay={2000}
                >
                <div className="toast-header">
                    <span>✅</span>
                    <strong className="mr-auto ml-1 text-secondary">
                    Elemento en el carrito
                    </strong>
                    <button
                    type="button"
                    className="ml-2 mb-1 close"
                    data-dismiss="toast"
                    aria-label="Close"
                    >
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="toast-body text-white">
                    Se aumentó correctamente la cantidad
                </div>
                </div>
                <button
                className="btn btn-success ml-auto comprarButton"
                onclick="comprarButtonClicked(carrito, id)"
                type="button"
                data-toggle="modal"
                data-target="#comprarModal"
                >
                Comprar
                </button>
            </div>
            </div>
        </div>
         {/* END TOTAL */} 
        {/* START MODAL COMPRA */} 
        <div
            className="modal fade"
            id="comprarModal"
            tabIndex={-1}
            aria-labelledby="comprarModalLabel"
            aria-hidden="true"
        ></div>
        {/* END MODAL COMPRA */} 
        </div>
    </section>
    {/* END SECTION SHOPPING CART */} 
    </main>

        </>
    );
}

export default Carrito;
