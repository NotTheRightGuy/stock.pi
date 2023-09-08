import db from "@/services/db";
import { auth } from "@/services/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

const prevMessagesRef = collection(db, "prevMessages");

export async function getUserEmail() {
    return auth.currentUser.email;
}

export async function saveToDB(messages) {
    console.log(messages);
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

export async function getFromDB(email) {
    const docRef = doc(db, "prevMessages", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const messages = docSnap.data();
        const messagesArray = JSON.parse(messages.messages);
        return messagesArray;
    } else {
        console.log("No such document!");
    }
}
