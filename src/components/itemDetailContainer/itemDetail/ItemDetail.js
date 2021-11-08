import ItemCount from "../../itemCount/ItemCount"
import { Link } from "react-router-dom"
import React, {useState} from "react"

const ItemDetail = ({titulo, imagen, precio, stock, descr}) => {

    const [cantidad, setCantidad] = useState(0)
    const [comprar, setComprar] = useState(false)

    const onAdd = (props) => {
        setCantidad(props.unidades)
        setComprar(true)
        console.log(`Agregaste ${props.unidades} al carrito`)
    }


    return (
        <div className="item">
            <h2>{titulo}</h2>
            <img src={imagen} alt="img" width="100px" height="100px"/>
            <h3>{descr}</h3>
            <h4>{precio}</h4>
            { !comprar ? <ItemCount stock = {stock} onAdd ={onAdd}/>: <Link to="/cart"><button>Terminar compra</button> </Link>} 
        </div>
    )
}

export default ItemDetail