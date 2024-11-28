import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "./Loading";

import { getCategories } from "../data/data";

function NavLinkList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Loading width="32px" />
          <h6 className="ps-2">Cargando...</h6>
        </div>
      ) : !categories ? (
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
