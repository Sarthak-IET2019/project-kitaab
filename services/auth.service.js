import { auth } from '@/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Function to handle new user registration 
const HandleUserSignUp = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
    }
    catch (error) {
        console.log(error.message);
    }
};

// Function to handle user signin
const HandleUserSignIn = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    }
    catch (error) {
        console.log(error.message);
    }
};

// Function to handle user logout
const HandleUserLogout = async () => {
    await signOut(auth);
};