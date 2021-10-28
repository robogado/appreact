const Item = ({nombre, imagen, precio}) => {
    return (
        <div className="item">
            <h2>{nombre}</h2>
            <img src={imagen} alt="img" width="100px" height="100px"/>
            <h4>{precio}</h4>
        </div>
    )
}

export default Item
