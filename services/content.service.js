// const topicList = document.querySelector('#topic-list');
// const { doc } = require("firebase/firestore/

import { db } from "@/Firebase";
import { collection, getDocs } from "firebase/firestore";
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
  }
};
