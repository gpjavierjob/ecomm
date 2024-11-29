import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import useCategories from "../firebase/categories";

import Loading from "./Loading";

function NavLinkList() {
  const [ categories, loading, error ] = useCategories();

  return (
    <>
      {loading ? (
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Loading width="32px" />
          <h6 className="ps-2">Cargando...</h6>
        </div>
      ) : error ? (
        <h2>Imposible cargar la aplicación. Reinténtelo más tarde.</h2>
      ) : (
        <>
          <Nav.Link as={NavLink} key={0} to="/">
            Inicio
          </Nav.Link>
          {categories.map((category) => (
            <Nav.Link
              as={NavLink}
              key={category.id}
              to={`/category/${category.tag}`}
            >
              {category.name}
            </Nav.Link>
          ))}
        </>
      )}
    </>
  );
}

export default NavLinkList;
