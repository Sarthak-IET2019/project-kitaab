import Layout from "@/components/layout";
import "@/styles/globals.css";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/Firebase';

export default function App({ Component, pageProps }) {

  // const [user, setUser] = useState({});
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
