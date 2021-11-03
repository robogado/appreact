//Importamos lo que necesitamos
import data from "../../data/data"
import Item from "./item/Item"
import React, { useState, useEffect } from "react"


const ItemList = () => {
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

    //Seteamos el producto con el resultado de la promesa        
    useEffect(() => {
        promesaProductos().then((item) => {
            setProductos(item)
            setCargando(false)
        })


    }, [])

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
