import CartWidget from "./CartWidget"
import {link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul className="menuPrincipal">
                <li><a href ="#">OJOS</a></li>
                <li><a href ="#">LABIOS</a></li>
                <li><a href ="#">ROSTRO</a></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar
