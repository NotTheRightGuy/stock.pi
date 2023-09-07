import db from "@/services/db";
import { auth } from "@/services/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

const prevMessagesRef = collection(db, "prevMessages");

export function getUserEmail() {
    return auth.currentUser.email;
}

export async function saveToDB(messages) {
    messages = JSON.stringify(messages);
    const res = await setDoc(doc(prevMessagesRef, getUserEmail()), {
        date: new Date(),
        messages: messages,
    });
    if (res) {
        return true;
    }
    return false;
}

export async function getFromDB() {
    const docRef = doc(db, "prevMessages", getUserEmail());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
}
