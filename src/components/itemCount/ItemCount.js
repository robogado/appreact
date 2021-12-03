import React , { useState } from "react"
import { Button, Card } from 'react-bootstrap'

const ItemCount = (props) => {

    //Creamos stock y unidades
    const [stock, setStock] = useState(props.stock)
    const [unidades , setUnidades] = useState(0)

    //Creamos una funcion para aumentar las unidades y en caso de no haber stock que nos avise
    const sumaDeContador = {
        sumaStock:()=>{
            if (stock===0){
                alert ("No hay suficiente stock")
            } else {
                setStock(stock-1)
                setUnidades(unidades+1)
            }
        }
    }
    //Creamos una funcion para disminuir las unidades y en caso de no haber stock que nos avise
    const restaDeContador = {
        restaStock:()=>{
            if (unidades===0){
                alert ("Sume unidades, el valor ingresado debe ser mayor a 0")
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    }


    //Creamos los botones + y - para aumentar y disminuir las unidades, en caso de que el stock en itemListContainer
    //sea 0 no podemos aumentar ni disminuir las unidades
    return (
        <div className="container">
        <div className="container justify-content-center display-flex col-12 p-2">
  
          <div className="container-fluid d-flex justify-content-center">
            <Card.Text>Stock disponible: {stock}</Card.Text>
          </div>
  
          <div className="container d-flex justify-content-between col-10 col-md-8 col-lg-6 p-2">
            <button className="btn btn-danger bg-gradient" onClick={restaDeContador.restaStock} disabled={stock==="0"}>-</button>
            <h5>{unidades}</h5>
            <button className="btn btn-danger bg-gradient" onClick={sumaDeContador.sumaStock} disabled={stock==="0"}>+</button>
          </div>
  
          <div className="container d-flex justify-content-center">
            <Button className="col-12 col-md-9 col-lg-6 p-2" variant="dark bg-gradient" onClick={()=>props.onAdd({unidades})}>
              Agregar al carrito
            </Button>
          </div>
  
        </div>
      </div>
    )
  
}

export default ItemCount
