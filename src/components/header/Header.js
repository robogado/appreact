import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header id="header" className ="banner">
        <div>
          <Link to="/">
            <img src="https://res.cloudinary.com/dvsraj89p/image/upload/v1638841940/Ro_imagenes/Logo_ohvw3q.png" width="20%" height="auto" className="imgLogo"
              alt="FREE BEAUTY" />
          </Link>
        </div>
    </header>
  )
}

export default Header

