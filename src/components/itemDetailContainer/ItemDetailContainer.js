//Importamos lo que necesitamos
import data from "../../data/data"
import ItemDetail from "./itemDetail/ItemDetail"
import React, { useState, useEffect } from "react"
import  {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)


    //Para filtrar las Cards
    const { id } = useParams()

    
    //Para que se renderice una sola vez ingresamos un array vacio []
    const promesaProducto = () => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 1000)
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
            const productoCargando = item.find(productoCargando => productoCargando.id === id)
            setProducto(productoCargando)
            setCargando(false)
        })


    }, [])

    //Retornamos solo el producto que necesitamos
    return (
        <>
            {cargando ? <h2>Cargando producto seleccionado ...</h2> :
            <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">
                <ItemDetail titulo={producto.titulo} imagen={producto.imagen} descr={producto.descr} precio={producto.precio} stock={producto.stock} />
            </div>   
            }
        </>
    )
}

export default ItemDetailContainer
