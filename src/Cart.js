//Importamos lo que necesitamos
import React, { useContext } from 'react';
import { Context } from "./context/CartContext"


const Cart = () => {
    const { cart , total, removeCart, clearCart} = useContext(Context);

    if (cart.length === 0) {
        return(
            <p>No hay productos seleccionados en el carrito</p>
    )}

    return(
        <>
        {cart.map((item) =>
        <div>
            <h3>Producto: {item.titulo}</h3>
            <h4>Precio:$ {item.precio}</h4>
            <h5>Cantidad:{item.cantidad}</h5>
            <h6>SubTotal:$ {item.subTotal}</h6>
            <button onClick={()=>removeCart(item.id)}>Eliminar producto</button>
        </div>
              
    )}
    
    <h2>Total :$ {total}</h2>
    <button onClick={()=>clearCart()}>Vaciar carrito</button>
    </>
    )
}

//Exportamos el componente
export default Cart