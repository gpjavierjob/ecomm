import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { useProduct } from "../firebase/products";
import { useToast } from "../contexts/ToastContext";

function ItemDetailContainer(props) {
  const { id } = useParams();
  const [data, loading, error] = useProduct(id);
  const { addError } = useToast();

  useEffect(() => {
    console.log(error);
    if (error)
      addError(
        "Ha ocurrido un error en la comunicación. Reinténtelo nuevamente."
      );
  }, []);

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
        <ItemDetail {...data} />
      )}
    </Stack>
  );
}

export default ItemDetailContainer;
