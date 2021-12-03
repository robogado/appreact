import { Navbar, Container } from "react-bootstrap"

const Header = () => {
  return (
    <header id="header">
      {/* <h1 className="tituloPrincipal">Beauty Free</h1> */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Beauty Free</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
