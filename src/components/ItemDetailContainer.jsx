import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import { BsExclamationCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../data/data";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

function ItemDetailContainer(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Loading />
          <h6>Obteniendo los datos...</h6>
        </div>
      ) : !data ? (
        <Alert
          className="d-flex flex-row"
          key="danger"
          variant="danger"
        >
          <BsExclamationCircle className="w-25 h-100" />
          <h6 className="ps-2">No se encontró el producto.</h6>
        </Alert>
      ) : (
        <ItemDetail {...data} />
      )}
    </Stack>
  );
}

export default ItemDetailContainer;
