// import CartWidget from "./CartWidget"
import {link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar-menu">
            <link to="/">Home</link>
            <link to="/ojos">Ojos</link>
            <link to="/rostro">Rostro</link>
            <link to="/labios">Labios</link>

            {/* <CartWidget/> */}
        </div>
    )
}

export default NavBar
