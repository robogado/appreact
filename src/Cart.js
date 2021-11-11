//Importamos lo que necesitamos
import React, { useContext } from 'react';
import { Context } from "./context/CartContext"


const Cart = () => {
    const { cart , total} = useContext(Context);

    if(cart.lenght===0){
        return(
            <p>No hay productos seleccionados en el carrito</p>
    )}

    return(
        <>
        {cart.map((item) =>
        <div>
            <h3>Producto: {item.titulo}</h3>
            <h4></h4>
            <h5></h5>
            <h6></h6>
        </div>
              
    )}
    
    <h2>Total : {total}</h2>
    </>
    )
}

//Exportamos el componente
export default Cart