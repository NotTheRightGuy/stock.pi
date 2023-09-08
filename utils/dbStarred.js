import db from "@/services/db";
import { auth } from "@/services/firebase";
import {
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";

export async function getUserEmail() {
    return auth.currentUser.email;
}

export async function addStockToDB({ stock }) {
    const email = await getUserEmail();
    const docRef = doc(db, "starredStocks", email);
    await updateDoc(docRef, {
        stocks: arrayUnion(stock),
    });
}

export async function getStocksFromDB() {
    const email = await getUserEmail();
    const docRef = doc(db, "starredStocks", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const stocks = docSnap.data();
        return stocks.stocks;
    } else {
        console.log("No such document!");
    }
}

export async function removeStocksFromDB({ stock }) {
    const email = await getUserEmail();
    const docRef = doc(db, "starredStocks", email);
    await updateDoc(docRef, {
        stocks: arrayRemove(stock),
    });
}
