import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import NoPage from "./components/NoPage";

function App() {
  const homeTitle = "¡Bienvenidos a nuestra tienda para mascotas!";
  const foodTitle = "Alimentos";
  const drugsTitle = "Medicamentos";
  const accessoriesTitle = "Accesorios";
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
              path="/alimentos"
              element={<ItemListContainer title={foodTitle} category="alimentos" />}
            />
            <Route
              path="/medicamentos"
              element={<ItemListContainer title={drugsTitle} category="medicamentos" />}
            />
            <Route
              path="/accesorios"
              element={
                <ItemListContainer
                  title={accessoriesTitle}
                  category="accesorios"
                />
              }
            />
            <Route
              path="/juguetes"
              element={<ItemListContainer title={toysTitle} category="juguetes" />}
            />
            <Route path="/carrito" element={<CartWidget />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
