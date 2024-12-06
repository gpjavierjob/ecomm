import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";

function useGetFromFirebase(props, callback) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Para poder llamar a una función asíncrona con un effect hook.
    // useEffect no permite una función asíncrona como parámetro.
    (async () => {
      const db = getFirestore();

      try {
        const data = await callback(db);
        setData(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, props);

  return [data, loading, error];
}

export { useGetFromFirebase };
