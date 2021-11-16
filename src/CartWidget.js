import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "./context/CartContext"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const { unidadesSeleccionadas } = useContext(Context)

    return (
        <div className="btn btn-lg p-3">
                    <nav as={Link} to="/cart">
                        <FaShoppingCart className="carrito" />
                        {unidadesSeleccionadas > 0 ?
                            (<div>
                                <h4>{unidadesSeleccionadas}</h4>
                            </div>)
                            :
                            <></>
                        }
                    </nav>
                </div>
    )
}

export default CartWidget

