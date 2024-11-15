import Stack from 'react-bootstrap/Stack';
import { useState, useEffect } from "react";

import { getDataByCategory } from "../data/data";
import ItemList from "./ItemList";

function ItemListContainer({ title, category }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataByCategory(category).then((data) => {
      setData(data);
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
          <h3>Obteniendo los datos...</h3>
        ) : !data ? (
          <h3>La lista está vacía.</h3>
        ) : (
          <ItemList data={data} />
        )}
      </Stack>
    </Stack>
  );
}

export default ItemListContainer;