import { db } from "@/Firebase";
import { CODES } from "@/globals/globals";
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

// Fetch topics from store
export const FetchTopicsFromStore = async () => {
  try {
    const data = getDocs(collection(db, "Topics")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return newData.sort((a, b) => a?.day - b?.day);
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
    return data.data();
  } catch (error) {
    console.log(error.message);
  }
};

// Add document to store
export const AddDocumentToStore = async (payload) => {
  try {
    const docRef = await addDoc(collection(db, "Topics"), payload);
    console.log(docRef);
    return CODES.SUCCESS;
  } catch (error) {
    console.log(error);
    return CODES.ERROR;
  }
};

// Delete document from store
export const DeleteDocumentFromStore = async (documentId) => {
  try {
    await deleteDoc(doc(db, "Topics", documentId))
    return CODES.SUCCESS;
  } catch (error) {
    console.log(error);
    return CODES.ERROR;
  }
};  