import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import NoPage from "./components/NoPage";

function App() {
  const homeTitle = "Todos los productos";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:tag" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
