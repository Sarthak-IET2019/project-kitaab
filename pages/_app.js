import Layout from "@/components/layout";
import "@/styles/globals.css";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // const [user, setUser] = useState({});
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // })

  return (
    <Layout>
      <Head>
        <title>किताब</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
