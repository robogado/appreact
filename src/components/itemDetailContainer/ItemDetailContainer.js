import ItemDetail from "./itemDetail/ItemDetail"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore } from "../firebase/Firebase"


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const [cargando, setCargando] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection("productos")
    const item = itemCollection.doc(id)

    item.get().then((doc) => {
      if (!doc.exists) {
        console.log("El producto no existe")
        return
      }
      setProducto({ id: doc.id, ...doc.data() })
      setCargando(false)
    }).catch((error) => {
      console.log("Error en la busqueda de productos", error)
    })
    return {}

  }, [id])

  return (
    <>
      {cargando ? <h2>Cargando producto seleccionado ...</h2> :
        <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">
          < ItemDetail
            key={`detalle-${producto.id}`}
            titulo={producto.titulo}
            imagen={producto.imagen}
            descr={producto.descr}
            precio={producto.precio}
            stock={producto.stock}
            id={producto.id}
          />
        </div>
      }
    </>
  )
}

export default ItemDetailContainer
