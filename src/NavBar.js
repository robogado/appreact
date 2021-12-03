import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"



const NavBar = () => {
    return (
        <div className="navbar-menu">
            
            <Link to="/">Home</Link>
            <Link to="/ojos">Ojos</Link>
            <Link to="/rostro">Rostro</Link>
            <Link to="/labios">Labios</Link>
            <Link to="/cart">Carrito</Link>
            <CartWidget/>
        </div>
        
    )
}


export default NavBar