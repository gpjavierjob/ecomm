import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContextProvider } from "./components/AppContext";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import NoPage from "./components/NoPage";

function App() {
  const homeTitle = "Todos los productos";

  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ItemListContainer />} />
              <Route path="/category/:tag" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<CartWidget />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
