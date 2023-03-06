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

export const UpdateTopicDetailsInStore = async (documentId) => {
  try {
    const data = {
      author: "jw lawrence",
      day: 2,
      description: "this is the new update",
      id: "string",
      status: true,
      title: "Lorem",
      video_url: "www.youtube.com",
    };

    const docRef = doc(db, "Topics", documentId);
    updateDoc(docRef, data)
      .then((docRef) => {
        console.log(
          "A New Document Field has been added to an existing document"
        );
      })

      .catch((error) => {
        console.log(error);
      });
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