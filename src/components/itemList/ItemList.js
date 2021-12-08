import Item from "./item/Item"


const ItemList = ({ items }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {items.map((item) =>
          <Item
            key={item.id}
            titulo={item.titulo}
            imagen={item.imagen}
            precio={item.precio}
            categoria={item.categoria}
            id={item.id}

          />)}
      </div>
    </div>
  )
}

export default ItemList