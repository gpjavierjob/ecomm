import Stack from 'react-bootstrap/Stack';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductByCategory } from "../data/data";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { Info } from "./Alerts";

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
        <Info msg="La lista está vacía." />
      ) : (
        <ItemList data={data} />
      )}
    </Stack>
  );
}

export default ItemListContainer;