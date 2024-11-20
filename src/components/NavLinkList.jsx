import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import CategoriesContext from "./CategoriesContext";

function NavLinkList() {
  const categories = useContext(CategoriesContext);
  return (
    <>
      <Nav.Link key={0} href="/" text="Inicio" />
      {/* --------------------------------------------------- */}
      {/* Renderizando los enlaces a partir de las categorías */}
      {categories.map((category) => (
        <Nav.Link key={category.id} href={`/category/${category.tag}`}>
          {category.name}
        </Nav.Link>
      ))}
      {/* --------------------------------------------------- */}
    </>
  );
}

export default NavLinkList;
