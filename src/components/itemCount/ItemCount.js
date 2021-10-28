import React , { useState } from "react"

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
        <div className="botonContador">
            <button onClick= {sumaDeContador.sumaStock} disabled={stock==="0"}>+</button>
            <p>{unidades}</p>
            <button onClick= {restaDeContador.restaStock} disabled={stock==="0"}>-</button>
            <p>Stock disponible: {stock} </p>
        </div>
    )
}

export default ItemCount
