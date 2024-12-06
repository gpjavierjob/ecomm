import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import { useGetCategories } from "../firebase/categories";
import { useToast } from "../contexts/ToastContext";

function NavLinkList() {
  const [categories, loading, error] = useGetCategories();
  const { addError } = useToast();

  useEffect(() => {
    if (loading) return;

    if (categories.length === 0) {
      addError(
        "No se obtuvieron las categorías. Revise su conexión a internet."
      );
      return;
    }

    if (error) addError("Error inesperado. No se obtuvieron las categorías.");
  }, [loading]);

  return (
    <>
      {categories?.length > 0 && (
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
