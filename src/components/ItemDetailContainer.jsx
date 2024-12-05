import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { useProduct } from "../firebase/products";
import { useToast } from "../contexts/ToastContext";

function ItemDetailContainer(props) {
  const { id } = useParams();
  const [product, loading, error] = useProduct(id);
  const { addError, addInfo } = useToast();

  useEffect(() => {
    if (loading) return;

    if (!product) {
      addInfo("No se encontró el producto.");
      return;
    }

    if (error) addError("Error inesperado. No se obtuvo el producto.");
  }, [loading]);

  return (
    <Stack
      className="mt-3 justify-content-center flex-wrap"
      direction="horizontal"
    >
      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Loading />
          <h6>Obteniendo los datos...</h6>
        </div>
      ) : (
        <ItemDetail {...product} />
      )}
    </Stack>
  );
}

export default ItemDetailContainer;
