import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Loading from "./Loading";
import { useProducts } from "../firebase/products";

function ItemListContainer() {
  const { tag } = useParams();
  const [data, loading, error] = useProducts(tag);

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
      gap={3}
    >
      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Loading />
          <h6 className="pt-3">Obteniendo los datos...</h6>
        </div>
      ) : (
        <ItemList data={data} />
      )}
    </Stack>
  );
}

export default ItemListContainer;
