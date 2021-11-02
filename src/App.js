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

function App() {
    const user = "Rocio"
    return (
        <Router>
            <div className="container">
                <Header />
                <NavBar />
                <Switch>
                    <Route path="/">
                        <ItemListContainer saludo={`Bienvenidas a Free Beauty by ${user}`} />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App





