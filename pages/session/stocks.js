import MustBeLoggedIn from "@/components/mustLoggedIn";
import NavbarTwo from "@/components/navbarTwo";
import Sidebar from "@/components/sidebar";
import StockContainer from "@/components/stockContainer";
import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import { useState } from "react";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    return (
        <>
            <Head>
                <title>Stock.pi | Stocks</title>
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
                    <StockContainer />
                    <Sidebar />
                </div>
            ) : (
                <MustBeLoggedIn />
            )}
        </>
    );
}
