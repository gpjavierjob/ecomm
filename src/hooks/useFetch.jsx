import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Respuesta no válida");
      setData(await response.json());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
