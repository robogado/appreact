import ItemList from "./components/itemList/ItemList"
import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { getFirestore } from "./firebase/Firebase"


const ItemListContainer = ()  => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const {categoria} = useParams()

    useEffect(()=>{
        if(categoria){
            const dbQuery = getFirestore()
            dbQuery.collection("productos").where("categoria", '==', categoria).get()
            .then(resp => {
                setProductos(resp.docs.map(productos => ( {id: productos.id, ... productos.data() } ) ))
            })
            .catch(err => console.log(err))
            .finally(()=>setCargando(false))
        } else {
            const dbQuery = getFirestore()
            dbQuery.collection("productos").get()
            .then(resp => {
                setProductos(resp.docs.map(productos => ( {id: productos.id, ... productos.data() } ) ))
            })
            .catch(err => console.log(err))
            .finally(()=>setCargando(false))
        }
    })
    return (
        
                <div className="container-fluid">
                    <div className="row">
                        <ItemList/>
                    </div>
                </div>

        
    )
}







export default ItemListContainer