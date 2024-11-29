import Stack from 'react-bootstrap/Stack';
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { useProducts } from "../firebase/products";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { AppContext } from "../contexts/AppContext";

function ItemListContainer() {
  const { tag } = useParams();
  const { flash } = useContext(AppContext);
  const [data, loading, error] = useProducts(tag);

  // useEffect(() => {
  //   if (error)
  //     flash.setMessage("No se pudo obtener la lista de productos.", "error");
  //   else if (data && data.length == 0)
  //     flash.setMessage("La lista está vacía.", "info");
  // }, [loading])

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