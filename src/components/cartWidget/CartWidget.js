import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context/CartContext"
import { FaShoppingCart } from "react-icons/fa";
import { Container } from "react-bootstrap";

const CartWidget = () => {
  const { unidadesSeleccionadas } = useContext(Context)

  return (
    <div className="btn btn-lg p-3">
      <Container as={Link} to="/cart">
        <FaShoppingCart className="carrito" />
        {unidadesSeleccionadas > 0 ?
          (<div>
            <h4>{unidadesSeleccionadas}</h4>
          </div>)
          :
          <></>
        }
      </Container>
    </div>
  )
}

export default CartWidget

