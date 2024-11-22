import Stack from 'react-bootstrap/Stack';
import Alert from "react-bootstrap/Alert";
import { BsInfoCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductByCategory } from "../data/data";
import ItemList from "./ItemList";
import Loading from "./Loading";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tag } = useParams();

  useEffect(() => {
    getProductByCategory(tag).then((data) => {
      setData(data);
      setLoading(false);
    });
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
      ) : data.length == 0 ? (
        <Alert className="d-flex flex-row" key="info" variant="info">
          <BsInfoCircle className="w-25 h-100" />
          <h6 className="ps-2">La lista está vacía.</h6>
        </Alert>
      ) : (
        <ItemList data={data} />
      )}
    </Stack>
  );
}

export default ItemListContainer;