//Importamos lo que necesitamos
import data from "../../data/data"
import Item from "./item/Item"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router"


const ItemList = () => {
    const { categoria } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    //Para que se renderice una sola vez ingresamos un array vacio []
    const promesaProductos = () => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(data)
            }, 2000)
        });
        return promesa.then(res => {
            return res
        }, err => {

            console.log(err)
        });
    }

    //Filtramos las cards por categorias    
    useEffect(() => {
        promesaProductos().then((item) => {
            if (categoria != null) {
                let categoriasFiltradas= item.filter((producto => producto.categoria === categoria))
                setProductos(categoriasFiltradas)
                setCargando(false)
            } else{
                setProductos(item)
                setCargando(false)

            }
        })


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
