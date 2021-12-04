import { useContext, useState } from 'react';
import { Context } from "../context/CartContext"
import { Container, Button } from "react-bootstrap"
import CartItem from "../cartItem/CartItem"
import { getFirestore } from "../firebase/Firebase"
import firebase from 'firebase/app'
import "firebase/firestore"

const Cart = () => {
  const { cart, precioTotal, clearCart } = useContext(Context);
  const [orderId, setOrderId] = useState(null)

  const finishOrder = async () => {

    console.log("Se finalizó la compra")

    const user = {
      nombre: "Rocio",
      email: "email@test.com",
      telefono: "123456789",
    }

    const itemsCart = cart.map((item) => ({
      id: item.id,
      title: item.titulo,
      quantity: item.cantidad
    }))
    await newOrder(itemsCart, user)
  }

  const newOrder = async (itemsCart, user) => {
    const db = getFirestore()
    const orders = db.collection("orders")
    const order = {
      buyer: user,
      items: itemsCart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      precioTotal: precioTotal,
    }
    try {
      const { id } = await orders.add(order)
      console.log('El Id de tu compra es:', id)
      console.log('La fecha de tu compra es: ', order.date)
      setOrderId(id)

      clearCart()
    } catch (err) {
      console.log("Ocurrió un error")
      console.log(err);
    }
  }

  if (cart.length === 0 && orderId === null) {
    return (
      <p>No hay productos seleccionados en el carrito</p>
    )
  } else if (orderId !== null) {
    // Compra finalizada
    return (
      <p>Compra finalizada</p>
    )
  } else if (cart.length > 0) {
    return (
      <div>
        <Container className="container align-top justify-content-center p-2 text-center ">
          <Container>
            {cart.map((item) =>
              <CartItem
                key={`cart-${item.id}`}
                id={item.id}
                titulo={item.titulo}
                precio={item.precio}
                imagen={item.imagen}
                cantidad={item.cantidad}
                subtotal={item.subTotal}
              />
            )}
          </Container>


          <Container>
            <h2>Total :$ {precioTotal}</h2>
            <Button variant="danger" onClick={() => clearCart()}>Vaciar carrito</Button>
            <Button variant="danger" onClick={() => finishOrder()}>Finalizar compra</Button>


          </Container>
        </Container>
      </div >
    )

  }

}

//Exportamos el componente
export default Cart