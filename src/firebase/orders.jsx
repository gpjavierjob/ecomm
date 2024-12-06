import { collection, addDoc } from "firebase/firestore";
import { useGetFromFirebase } from "./firebase";

function useAddOrder(order) {
  const addOrder = async (db) => {
    const collectionRef = collection(db, "orders");
    const docRef = await addDoc(collectionRef, order);
    if (docRef.id) return { id: docRef.id, ...order };
    else return null;
  };

  return useGetFromFirebase([], addOrder);
}

export { useAddOrder };
