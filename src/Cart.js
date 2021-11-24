import React, { useContext, useState } from 'react';
import { Context } from "./context/CartContext"
import { Container } from 'react-bootstrap'
import CartItem from "./cartItem/CartItem"



const Cart = () => {
    const { cart , precioTotal, clearCart} = useContext(Context);

    if (cart.length === 0) {
        return(
            <p>No hay productos seleccionados en el carrito</p>
    )}

  

    return(
        <div>
        <Container className="container align-top justify-content-center p-2 text-center ">
        <Container>
        {cart.map((item) =>
             <CartItem
                        key={`cart-${item.id}`}
                        id={item.id}
                        titulo={item.titulo}
                        precio={item.precio}
                        imagen={item.imagen}
                        cantidad={item.cantidad}
                        subtotal={item.subtotal}
                      />
    )}
    </Container>
              
    
    <Container>
    <h2>Total :$ {precioTotal}</h2>
    <button onClick={()=>clearCart()}>Vaciar carrito</button>
    <button>Finalizar compra</button>

    </Container>
    </Container>
        </div >
    )
}

//Exportamos el componente
export default Cart
