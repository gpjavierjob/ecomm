import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { useGetFromFirebase } from "./firebase";

function useGetCategories() {
  const getCategories = async (db) => {
    const collectionRef = query(collection(db, "Categories"), orderBy("order"));
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return data;
  };

  return useGetFromFirebase([], getCategories);
}

export { useGetCategories };
