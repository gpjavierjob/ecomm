import Nav from 'react-bootstrap/Nav';

function NavLink({ href, text }) {
  return (
    <Nav.Link href={href}>{text}</Nav.Link>
  );
}

export default NavLink;
