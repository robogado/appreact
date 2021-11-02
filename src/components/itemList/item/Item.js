import ItemCount from "../../itemCount/ItemCount"

const Item = ({titulo, imagen, precio, stock}) => {
    return (
        <div className="item">
            <h2>{titulo}</h2>
            <img src={imagen} alt="img" width="100px" height="100px"/>
            <h4>{precio}</h4>
            <ItemCount stock = {stock} />
        </div>
    )
}

export default Item
