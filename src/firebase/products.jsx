import {
  getDocs,
  collection,
  where,
  query,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";
import { useGetFromFirebase } from "./firebase";

function useGetProducts(categoryTag) {
  const getProducts = async (db) => {
    let collectionRef = collection(db, "Products");

    if (categoryTag) {
      collectionRef = query(
        collectionRef,
        where("category.tag", "==", categoryTag)
      );
    }

    collectionRef = query(collectionRef, orderBy("name"));

    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return data;
  };

  return useGetFromFirebase([categoryTag], getProducts);
}

function useGetProduct(id) {
  const getProduct = async (db) => {
    const docRef = doc(db, "Products", id);
    const snapshot = await getDoc(docRef);
    return { id: snapshot.id, ...snapshot.data() };
  };

  return useGetFromFirebase([id], getProduct);
}

export { useGetProduct, useGetProducts };
