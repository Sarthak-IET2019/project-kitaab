import Layout from "@/components/layout";
import "@/styles/globals.css";
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChange, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from 'Firebase';

export default function App({ Component, pageProps }) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChange(auth, (currentUser) => {
    setUser(currentUser);
  })
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    }
    catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    }
    catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
