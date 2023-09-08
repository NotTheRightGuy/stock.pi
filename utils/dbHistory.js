import db from "@/services/db";
import { auth } from "@/services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function getUserEmail() {
    return auth.currentUser.email;
}

export async function saveToDB(messages) {
    const userEmail = await getUserEmail();
    const messagesString = JSON.stringify(messages);
    const docRef = doc(db, "prevMessages", userEmail);
    await setDoc(docRef, {
        date: new Date().toLocaleString(),
        messages: messagesString,
    });
}

export async function getFromDB() {
    const userEmail = await getUserEmail();
    const docRef = doc(db, "prevMessages", userEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const messages = docSnap.data();
        const messagesArray = JSON.parse(messages.messages);
        return messagesArray;
    } else {
        console.log("No such document!");
    }
}
