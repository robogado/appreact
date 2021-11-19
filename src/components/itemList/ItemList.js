//Importamos lo que necesitamos
import data from "../../data/data"
import Item from "./item/Item"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getFirestore } from "../../firebase/Firebase";


const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const {categoria} = useParams()
    //Para que se renderice una sola vez ingresamos un array vacio []
    

    //Filtramos las cards por categorias    
    useEffect(() => {
        //     if (categoria != null) {
        //         let categoriasFiltradas= item.filter((producto => producto.categoria === categoria))
        //         setProductos(categoriasFiltradas)
        //         setCargando(false)
        //     } else{
        //         setProductos(item)
        //         setCargando(false)
        //     }
        // })
        if (categoria){
            const dbQuery = getFirestore()
            dbQuery.collection("productos").where("categoria", "=", categoria).get()
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

        


    }, [categoria])

    return (
        <>
            {cargando ? <h2>Cargando lista de productos...</h2> :
                productos.map((producto) =>                                                                                                                          < div className="container-fluid row d-flex justify-content-center my-3 text-center">
                    <Item key={producto.id} titulo={producto.titulo} imagen={producto.imagen} precio={producto.precio} stock={producto.stock} categoria={producto.categoria} id={producto.id} />                                                                                                                                               </div>
                )                
            }

        </>
    )

   
    
}

export default ItemList
