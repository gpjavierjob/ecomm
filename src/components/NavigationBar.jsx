import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

import Logo from "./Logo";
import CartWidget from "./CartWidget";

function NavigationBar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container className="justify-content-start">
        <Navbar.Brand className="flex-fill" href="/">
          <Container className="d-flex flex-row align-items-center">
            <Logo />
            <span>Pet Store</span>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/alimentos">Alimentos</Nav.Link>
            <Nav.Link href="/medicamentos">Medicamentos</Nav.Link>
            <Nav.Link href="/accesorios">Accesorios</Nav.Link>
            <Nav.Link href="/juguetes">Juguetes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;