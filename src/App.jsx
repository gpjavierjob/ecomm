import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import NoPage from "./components/NoPage";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const homeTitle = "¡Bienvenidos a nuestro mercado online!";
  const fruitsTitle = "Frutas";
  const vegetablesTitle = "Vegetales";
  const legumesTitle = "Legumbres";
  const toysTitle = "Juguetes";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<ItemListContainer title={homeTitle} category="" />}
            />
            <Route
              path="/category/frutas"
              element={
                <ItemListContainer title={fruitsTitle} category="frutas" />
              }
            />
            <Route
              path="/category/verduras"
              element={
                <ItemListContainer
                  title={vegetablesTitle}
                  category="verduras"
                />
              }
            />
            <Route
              path="/category/legumbres"
              element={
                <ItemListContainer title={legumesTitle} category="legumbres" />
              }
            />
            <Route
              path="/category/juguetes"
              element={
                <ItemListContainer title={toysTitle} category="juguetes" />
              }
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartWidget />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
