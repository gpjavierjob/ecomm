import Stack from "react-bootstrap/Stack";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../data/data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(`ItemDetailContainer - id: ${id}`);

  useEffect(() => {
    getProduct(id).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <Stack
      className="mt-3 justify-content-center flex-wrap"
      direction="horizontal"
    >
      {loading ? (
        <h3>Obteniendo los datos...</h3>
      ) : !data ? (
        <h3>No se encontró el producto.</h3>
      ) : (
        <ItemDetail {...data} />
      )}
    </Stack>
  );
}

export default ItemDetailContainer;
