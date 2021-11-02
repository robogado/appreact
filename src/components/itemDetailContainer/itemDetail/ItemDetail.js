import ItemCount from "../../itemCount/ItemCount"

const ItemDetail = ({titulo, imagen, precio, stock, descr}) => {
    return (
        <div className="item">
            <h2>{titulo}</h2>
            <img src={imagen} alt="img" width="100px" height="100px"/>
            <h3>{descr}</h3>
            <h4>{precio}</h4>
            <ItemCount stock = {stock} />
        </div>
    )
}

export default ItemDetail