import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";

function useAddOrder() {
  const [data, setData] = useState(null);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState(null);

  const addOrderToCollection = async (db, order) => {
    const collectionRef = collection(db, "Orders");
    const docRef = await addDoc(collectionRef, order);
    if (docRef.id) return { id: docRef.id, ...order };
    else return null;
  };

  const addOrder = async (newOrder) => {
    setWorking(true);
    const db = getFirestore();

    try {
      const data = await addOrderToCollection(db, newOrder);
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setWorking(false);
    }
  };

  return [data, working, error, addOrder];
}

export { useAddOrder };
