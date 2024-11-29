import { useEffect, useState } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
  doc,
  getDoc,
} from "firebase/firestore";

function useProducts(categoryTag) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Para poder llamar a una función asíncrona con un effect hook
    (async () => {
      const db = getFirestore();

      let collectionRef = collection(db, "Products");

      if (categoryTag)
        collectionRef = query(
          collectionRef,
          where("category.tag", "==", categoryTag)
        );

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
  }, [categoryTag]);

  return [data, loading, error];
}

function useProduct(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Para poder llamar a una función asíncrona con un effect hook
    (async () => {
      const db = getFirestore();

      const docRef = doc(db, "Products", id);

      try {
        const snapshot = await getDoc(docRef);
        setData({ id: snapshot.id, ...snapshot.data() });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return [data, loading, error];
}

export { useProducts, useProduct };
