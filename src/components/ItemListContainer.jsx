import Stack from 'react-bootstrap/Stack';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { getProductByCategory } from "../data/data";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { AppContext } from "./AppContext";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tag } = useParams();
  const { flash } = useContext(AppContext);

  useEffect(() => {
    getProductByCategory(tag).then((data) => {
      setData(data);
      setLoading(false);
      if (data.length == 0) flash.setMessage("La lista está vacía.", "info");
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
      ) : (
        <ItemList data={data} />
      )}
    </Stack>
  );
}

export default ItemListContainer;