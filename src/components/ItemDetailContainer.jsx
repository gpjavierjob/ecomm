import Stack from "react-bootstrap/Stack";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { useProduct } from "../firebase/products";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { AppContext } from "../contexts/AppContext";

function ItemDetailContainer(props) {
  const { id } = useParams();
  const { flash } = useContext(AppContext);
  const [data, loading, error] = useProduct(id);

  // useEffect(() => {
  //   getProduct(id).then((data) => {
  //     setData(data);
  //     setLoading(false);
  //     if (!data) flash.setMessage("No se encontró el producto.", "error");
  //   });
  // }, []);

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
