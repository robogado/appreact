import ItemList from "./components/itemList/ItemList"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"

const ItemListContainer = ({saludo}) => {
    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList/>
            
            <ItemDetailContainer/>
        </div>

    )
}

export default ItemListContainer

