import {
  getDocs,
  collection,
  where,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { useFirebase } from "./firebase";

function useProducts(categoryTag) {
  const getProducts = async (db) => {
    let collectionRef = collection(db, "Products");

    if (categoryTag) {
      collectionRef = query(
        collectionRef,
        where("category.tag", "==", categoryTag)
      );
    }

    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return data;
  };

  return useFirebase([categoryTag], getProducts);
}

function useProduct(id) {
  const getProduct = async (db) => {
    const docRef = doc(db, "Products", id);
    const snapshot = await getDoc(docRef);
    return { id: snapshot.id, ...snapshot.data() };
  };

  return useFirebase([id], getProduct);
}

export { useProduct, useProducts };
