import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

import Logo from "./Logo";
import CartWidget from "./CartWidget";

function NavigationBar() {
  return (
    <Navbar expand="md" className="bg-success-subtle text-success-emphasis">
      <Container className="justify-content-start">
        <Navbar.Brand className="flex-fill" href="/">
          <Container className="d-flex flex-row align-items-center">
            <Logo />
            <span className="ps-2">Verdulería</span>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/category/frutas">Frutas</Nav.Link>
            <Nav.Link href="/category/verduras">Verduras</Nav.Link>
            <Nav.Link href="/category/legumbres">Legumbres</Nav.Link>
            <Nav.Link href="/category/condimentos">Condimentos</Nav.Link>
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