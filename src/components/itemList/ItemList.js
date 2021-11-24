// Importamos lo que necesitamos
import Item from "./item/Item"

const ItemList = ({ items }) => {
  return (
    <>
      {
        items.map((item) =>
          < div className="container-fluid row d-flex justify-content-center my-3 text-center">
            <Item
              key={item.id}
              titulo={item.titulo}
              imagen={item.imagen}
              precio={item.precio}
              stock={item.stock}
              categoria={item.categoria}
              id={item.id}
            />
          </div>
        )
      }
    </>
  )
}

export default ItemList
