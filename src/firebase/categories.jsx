import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";

function useCategories() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Para poder llamar a una función asíncrona con un effect hook
    (async () => {
      const db = getFirestore();

      const collectionRef = collection(db, "Categories");

      try {
        const snapshot = await getDocs(collectionRef);
        const data = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return [data, loading, error];
}

export default useCategories;
