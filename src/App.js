import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"
import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <NavBar />
                <Switch>
                    <Route path="/"exact> 
                        <ItemListContainer saludo={`Bienvenidas a Free Beauty`} />
                    </Route>
                    <Route path="/:categoria/:id" exact>
                        <ItemDetailContainer saludo={`Bienvenidas a la Seccion Ojos`} />
                    </Route>
                     <Route path="/:categoria/:id" exact>
                        <ItemDetailContainer saludo={`Bienvenidas a la Seccion Rostro`} />
                    </Route>
                     <Route path="/:categoria/:id" exact>
                        <ItemDetailContainer saludo={`Bienvenidas a la Seccion Labios`} />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App





