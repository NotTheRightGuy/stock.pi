import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBl1lNlCzxuBHR_C0SYqt70Ha7HSDvv66A",
    authDomain: "stock-pi-1.firebaseapp.com",
    projectId: "stock-pi-1",
    storageBucket: "stock-pi-1.appspot.com",
    messagingSenderId: "379404696216",
    appId: "1:379404696216:web:ac0ba68b219604b51aaeed",
};

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
const app = initializeApp(firebaseConfig);

export default app;
export const googleProvider = provider;
export const auth = getAuth(app);
