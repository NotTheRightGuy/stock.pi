import { auth } from "@/services/firebase";
import styles from "@/stylesheets/navbar.module.scss";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import Logo from "./logo";
export default function Navbar() {
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });
    return (
        <nav className={styles.nav}>
            <Logo />
            <div className={styles.links}>
                <button>Home</button>
                <button>About</button>
                <button>Stocks</button>
            </div>
            <div className={styles.auth}>
                {user ? (
                    <>
                        <span
                            onClick={() =>
                                (window.location.href = "/session/dashboard")
                            }
                        >
                            Dashboard
                        </span>
                        <button
                            className={styles.signout}
                            onClick={() => signOut(auth)}
                        >
                            Sign out
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            style={{ backgroundColor: "transparent" }}
                            onClick={() =>
                                (window.location.href = "/auth/login")
                            }
                        >
                            Log in
                        </button>
                        <button
                            className={styles.signup}
                            onClick={() =>
                                (window.location.href = "/auth/signup")
                            }
                        >
                            Sign Up
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
