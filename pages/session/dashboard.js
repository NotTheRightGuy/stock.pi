import MustBeLoggedIn from "@/components/mustLoggedIn";
import NavbarTwo from "@/components/navbarTwo";
import Sidebar from "@/components/sidebar";
import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";
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
            {user ? (
                <div>
                    <NavbarTwo />
                    <Sidebar />
                </div>
            ) : (
                <MustBeLoggedIn />
            )}
        </>
    );
}
