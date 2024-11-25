import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

import Logo from "./Logo";
import NavLinkList from "./NavLinkList";
import CartWidget from "./CartWidget";

function NavigationBar() {
  return (
    <Navbar expand="md" className="bg-success-subtle text-success-emphasis">
      <Container className="justify-content-start">
        <Navbar.Brand className="flex-fill" href="/">
          <Container className="d-flex flex-row align-items-center">
            <Logo />
            <span className="ps-2">Verdulería.uy</span>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <NavLinkList />
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