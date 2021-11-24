import React, { useContext, useState } from 'react';
import { Context } from "./context/CartContext"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"


const Cart = () => {
    const { cart ,  removeCart, clearCart} = useContext(Context);
    const {push} = useHistory()
    const [toClick,setToClick] = useState(false)


    const finalizarCompra = () => {
        setToClick(true)
    }
}
    
   
  
//Exportamos el componente
export default Cart