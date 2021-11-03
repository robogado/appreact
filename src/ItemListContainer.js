import ItemList from "./components/itemList/ItemList"

const ItemListContainer = ({saludo}) => {
    
    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList/>
        </div>

    )
}

export default ItemListContainer