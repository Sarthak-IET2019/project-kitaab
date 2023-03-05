import { db } from "@/Firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

// Fetch topics from store
export const FetchTopicsFromStore = async () => {
  try {
    const data = getDocs(collection(db, "Topics")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return newData;
    });
    return data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

// Fetch topic details from store using document id
export const FetchTopicDetailsFromStore = async (documentId) => {
  try {
    const docRef = doc(db, "Topics", documentId);
    const data = await getDoc(docRef);
    console.log(data.data());
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
