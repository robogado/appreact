//Importamos lo que necesitamos
import data from "../../data/data"
import ItemDetail from "./itemDetail/ItemDetail"
import React, { useState, useEffect } from "react"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    //Para que se renderice una sola vez ingresamos un array vacio []
    const promesaProducto = () => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 4000)
        });
        return promesa.then(res => {
            return res
        }, err => {
            console.log(err)
        });
    }

    //Seteamos el producto con el resultado de la promesa        
    useEffect(() => {
        promesaProducto().then((item) => {
            const productoCargando = item.find(productoCargando => productoCargando.id === "1")
            setProducto(productoCargando)
            setCargando(false)
        })


    }, [])

    //Retornamos solo el producto con ID 1
    return (
        <>
            {cargando ? <h2>Cargando producto id 1...</h2> :
                <ItemDetail titulo={producto.titulo} imagen={producto.imagen} precio={producto.precio} stock={producto.stock} descr={producto.descr} />
            }

        </>
    )
}

export default ItemDetailContainer
