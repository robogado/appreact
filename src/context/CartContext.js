//Importamos lo que necesitamos
import React, {useState} from "react"

//Creamos el contexto
const Context = React.createContext()

//Creamos la funcion que contiene los datos del carrito
const FuncionCarrito = ({children}) => {
    const [cart, setCart] = useState([])
    //Nos indica cuantos productos distintos tenemos en el carrito
    const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState(0)
    //Nos indica el precio total del carrito
    const [precioTotal, setPrecioTotal] = useState(0)

    //Con esta funcion agregamos los productos al carrito
    const onAdd = (producto, cantidad) => {
        const itemExiste = cart.find(item => item.id === producto.id)
        //Pregunta si existe item y si no existe lo agrega
        if (!itemExiste) {
            setCart([...cart, {id:producto.id, titulo:producto.titulo, precio:producto.precio, cantidad:cantidad, subTotal:(producto.precio*cantidad)}])
            //Seteo unidades y el total
            setUnidadesSeleccionadas(unidadesSeleccionadas+1)
            setPrecioTotal(precioTotal+(producto.precio*cantidad))
        } else {
            const cartActualizado = cart.map(item => {
                if (item.id === producto.id) {
                    item.cantidad += cantidad
                    item.subTotal += (producto.precio*cantidad)
                }
                return item
            })
        
            setCart(cartActualizado)
            setPrecioTotal(precioTotal+(producto.precio*cantidad))
        }
    }

    const removeCart=(id, cantidad, precio)=>{
        const nuevoCart = cart.filter((item) => item.id !== id)
        setCart (nuevoCart)
        setPrecioTotal(precioTotal-(cantidad*precio))
        setUnidadesSeleccionadas(unidadesSeleccionadas - 1)
    }

    const clearCart=()=>{
        setCart([])
        setUnidadesSeleccionadas(0)
        setPrecioTotal(0)
        
    }

    //Retorna los datos del carrito
    return <Context.Provider value={{cart, unidadesSeleccionadas, precioTotal, onAdd, removeCart, clearCart}}>
        {children}
        </Context.Provider>
}


//Exportamos el contexto y la funcion
export {Context, FuncionCarrito}

