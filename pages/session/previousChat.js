import MustBeLoggedIn from "@/components/mustLoggedIn";
import NavbarTwo from "@/components/navbarTwo";
import PrevChatContainer from "@/components/prevChatContainer";
import Sidebar from "@/components/sidebar";
import { auth } from "@/services/firebase";
import { getFromDB } from "@/utils/dbHistory";
import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function PreviousChat() {
    const [user, setUser] = useState(null);
    const [history, setHistory] = useState([]);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    useEffect(() => {
        if (user) {
            getFromDB(user.email).then((res) => {
                if (res) {
                    setHistory(res);
                }
            });
        }
    }, [user]);

    return (
        <>
            <Head>
                <title>Stock.pi | History</title>
                <meta
                    name="description"
                    content="Simplify your stock analysis with Stock.PI."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" />
            </Head>

            {user ? (
                <div>
                    <NavbarTwo />
                    <PrevChatContainer history={history} />
                    <Sidebar />
                </div>
            ) : (
                <MustBeLoggedIn />
            )}
        </>
    );
}
