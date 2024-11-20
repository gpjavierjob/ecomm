import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CategoriesContext from "./components/CategoriesContext";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import NoPage from "./components/NoPage";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { getCategories } from "./data/data";

function App() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const homeTitle = "Todos los productos";

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <h2>Cargando la aplicación...</h2>
      ) : !categories ? (
        <h2>Imposible cargar la aplicación. Reinténtelo más tarde.</h2>
      ) : (
        <CategoriesContext.Provider value={categories}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={<ItemListContainer title={homeTitle} category="" />}
                />
                {/* ------------------------------------------------- */}
                {/* Creando las rutas a partir de las categorías */}
                {categories.map((category) => (
                  <Route
                    key={category.id}
                    path={`/category/${category.tag}`}
                    element={
                      <ItemListContainer
                        title={category.name}
                        category={category.tag}
                      />
                    }
                  />
                ))}
                {/* ------------------------------------------------- */}
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<CartWidget />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CategoriesContext.Provider>
      )}
    </>
  );
}

export default App;
