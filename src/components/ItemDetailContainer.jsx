import Stack from "react-bootstrap/Stack";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../data/data";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { AppContext } from "./AppContext";

function ItemDetailContainer(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { flash } = useContext(AppContext);

  useEffect(() => {
    getProduct(id).then((data) => {
      setData(data);
      setLoading(false);
      if (!data) flash.setMessage("No se encontró el producto.", "error");
    });
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
