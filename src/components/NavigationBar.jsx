import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';
import CartWidget from "./CartWidget";

function NavigationBar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container className="justify-content-start">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand className="ms-2 flex-fill" href="#home">
          <Container className="d-flex flex-row align-items-center">
            <Logo className="d-none d-md-block"/>
            <span>Pet Store</span>
          </Container>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Alimentos</Nav.Link>
            <Nav.Link href="#link">Medicamentos</Nav.Link>
            <Nav.Link href="#link">Accesorios</Nav.Link>
            <Nav.Link href="#link">Juguetes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavigationBar;