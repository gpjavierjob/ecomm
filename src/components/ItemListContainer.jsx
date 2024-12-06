import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import ItemList from "./ItemList";
import Loading from "./Loading";
import { useGetProducts } from "../firebase/products";
import { useToast } from "../contexts/ToastContext";

function ItemListContainer() {
  const { tag } = useParams();
  const [products, loading, error] = useGetProducts(tag);
  const { addError, addInfo } = useToast();

  useEffect(() => {
    if (loading) return;

    if (products.length === 0) {
      addInfo("No se encontraron productos para esta categoría.");
      return;
    }

    if (error) addError("Error inesperado. No se obtuvieron los productos.");
  }, [loading]);

  return (
    <Stack
      className="mt-3 justify-content-center flex-wrap"
      direction="horizontal"
      gap={3}
    >
      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Loading />
          <h6 className="pt-3">Obteniendo los datos...</h6>
        </div>
      ) : (
        <ItemList data={products} />
      )}
    </Stack>
  );
}

export default ItemListContainer;
