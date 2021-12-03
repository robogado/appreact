import ItemCount from "../../itemCount/ItemCount"
import { Link } from "react-router-dom"
import React, { useState, useContext } from "react"
import { Context } from "../../context/CartContext"




const ItemDetail = ({id, titulo, imagen, precio, stock, descr}) => {

    const [comprar, setComprar] = useState(false)
    const {onAdd} = useContext(Context)

    const agregarAlCarrito = (props) => {
        setComprar(true)
        onAdd({id, titulo, precio, imagen}, props.unidades)
        console.log(`Agregaste ${props.unidades} al carrito`)
    }


    return (
        <div className="item">
            <h2>{titulo}</h2>
            <img src={imagen} alt="maquillaje" width="100px" height="100px"/>
            <h3>{descr}</h3>
            <h4>$ {precio}</h4>
            { !comprar ? <ItemCount stock = {stock} onAdd ={agregarAlCarrito} />: <Link to="/cart"><button>Terminar compra</button> </Link>} 
        </div>
    )
}

export default ItemDetail