import ItemCount from "./components/itemCount/ItemCount"
import ItemList from "./components/itemList/ItemList"

const ItemListContainer = ({saludo}) => {
    return (
        <div>
            <h2>{saludo}</h2>
            <ItemCount stock="10"/>
            <ItemList/>
        </div>

    )
}

export default ItemListContainer

