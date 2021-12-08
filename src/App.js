import Header from "./components/header/Header"
import NavBar from "./components/navBar/NavBar"
import Footer from "./components/footer/Footer"
import React from "react"
import Cart from "./components/cart/Cart"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import { FuncionCarrito } from "./components/context/CartContext";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"


function App() {
  return (
    <Router>
      <FuncionCarrito>
        <div className="container">
          <Header />

          <NavBar />

          <Switch>

            <Route path="/" exact>
              <ItemListContainer/>
            </Route>

            <Route path="/cart" exact>
              <Cart/>
            </Route>

            <Route path="/:categoria" exact>
              <ItemListContainer/>
            </Route>

            <Route path="/:categoria/:id" exact>
              <ItemDetailContainer />
            </Route>

          </Switch>
          <Footer />
        </div>
      </FuncionCarrito>
    </Router>
  )
}

export default App





