import Nav from "react-bootstrap/Nav";
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
          <Nav.Link key={0} href="/" text="Inicio" />
          {categories.map((category) => (
            <Nav.Link key={category.id} href={`/category/${category.tag}`}>
              {category.name}
            </Nav.Link>
          ))}
        </>
      )}
    </>
  );
}

export default NavLinkList;
