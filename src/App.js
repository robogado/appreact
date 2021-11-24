import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"
import React from "react"
import Cart from "./Cart"
import {
    BrowserRouter as Router,
    Switch,
    Route
    
} from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import { FuncionCarrito } from "./context/CartContext"

function App() {
    return (
        <Router>
            <FuncionCarrito>
            <div className="container">
                <Header />
                <NavBar />
                <Switch>
                    <Route path="/"exact> 
                        <ItemListContainer saludo={`Bienvenidas a Free Beauty`} />
                    </Route>
                    <Route path="/cart" exact>
                        <Cart titulo=""/>   
                    </Route>
                    <Route path="/:categoria/"exact> 
                        <ItemListContainer saludo={`Bienvenidas a Free Beauty`} />
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





