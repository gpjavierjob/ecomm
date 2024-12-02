import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { useFirebase } from "./firebase";

function useCategories() {
  const getCategories = async (db) => {
    const collectionRef = query(collection(db, "Categories"), orderBy("order"));
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return data;
  };

  return useFirebase([], getCategories);
}

export { useCategories };
