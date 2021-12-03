import CartWidget from '../cartWidget/CartWidget';
import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    // <div className="navbar-menu">

    //   <Link to="/">Home</Link>
    //   <Link to="/ojos">Ojos</Link>
    //   <Link to="/rostro">Rostro</Link>
    //   <Link to="/labios">Labios</Link>
    //   <Link to="/cart">Carrito</Link>
    //   <CartWidget />
    // </div>

    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Beauty Free</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="col-11 col-md-11 col-lg-11">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/ojos">Ojos</Nav.Link>
              <Nav.Link as={Link} to="/rostro">Rostro</Nav.Link>
              <Nav.Link as={Link} to="/labios">Labios</Nav.Link>
            </Nav>
          </Container>
          <Container>
            <CartWidget />
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default NavBar