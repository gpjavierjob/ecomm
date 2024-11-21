import Stack from 'react-bootstrap/Stack';
import Alert from "react-bootstrap/Alert";
import { BsInfoCircle } from "react-icons/bs";
import { useState, useEffect } from "react";

import { getProductByCategory } from "../data/data";
import ItemList from "./ItemList";
import Loading from "./Loading";

function ItemListContainer({ title, category }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductByCategory(category).then((data) => {
      setData(data);
      console.log(!data);
      setLoading(false);
    });
  }, []);

  return (
    <Stack className="m-3 align-items-center" direction="vertical" gap={3}>
      <h2 className="text-center">{title}</h2>
      <Stack
        className="mt-3 justify-content-center flex-wrap"
        direction="horizontal"
        gap={3}
      >
        {loading ? (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Loading />
            <h6>Obteniendo los datos...</h6>
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
    </Stack>
  );
}

export default ItemListContainer;