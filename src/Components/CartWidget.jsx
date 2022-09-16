import React from 'react';

const CartWidget = () => {
    return (
        <div>
            <div id="catalogoProductos">    
            <section id="products">
              <div class="container">
                <div class="mercaderia">
                  <div class="mercaderia-card ">
                    <div class="card item" id="imagenProducto">
                      {/* {<img class="card-img-top itemImage" src="" alt="Card image cap">} */}
                      <div class="card-body">
                        <p class="card-text itemTitle">Nombre del articulo</p>
                        <p class="itemPrice">$Precio</p>
                        <p>Cantidad de stock</p>
                        <button class="item-button btn btn-primary addToCart button" onClick="">Agregar al Carrito</button>
                        <span class="fa fa-circle" id="red"></span>
                        <span class="fa fa-circle" id="teal"></span>
                        <span class="fa fa-circle" id="blue"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    );
}

export default CartWidget;
