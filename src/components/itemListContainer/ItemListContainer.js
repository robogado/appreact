import ItemList from "../itemList/ItemList"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore } from "../firebase/Firebase"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoria } = useParams()

  useEffect(() => {
    if (categoria) {
      const dbQuery = getFirestore()
      dbQuery.collection('productos').where('categoria', '==', categoria).get()
        .then(resp => {
          setProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() })))
          setCargando(false)
        })
        .catch(err => console.log(err))
    } else {
      const dbQuery = getFirestore()
      dbQuery.collection('productos').get()
        .then(resp => {
          setProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() })))
          setCargando(false)
        })
        .catch(err => console.log(err))
    }
  }, [categoria])

  return (
    <>
      {
        cargando ?
          <h2>Cargando...</h2>
          :
          <div className="container-fluid">
            <div className="row">
              <ItemList items={productos} />
            </div>
          </div>
      }
    </>
  )
}

export default ItemListContainer