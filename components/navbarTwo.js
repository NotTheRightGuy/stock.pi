import { auth } from "@/services/firebase";
import styles from "@/stylesheets/navbarTwo.module.scss";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
export default function NavbarTwo() {
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
            <div
                className={styles.logo}
                onClick={() => (window.location.href = "/")}
            >
                Stock<span className={styles.pi}>.pi</span>
            </div>
            <div className={styles.links}></div>
            <div className={styles.auth}>
                {user ? (
                    <>
                        <img
                            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                            alt="user profile picture"
                            style={{
                                width: "2rem",
                                height: "2rem",
                            }}
                        />
                        <p
                            style={{
                                fontFamily: "Poppins",
                                fontWeight: "500",
                                fontSize: "0.8rem",
                                marginTop: "0.4rem",
                            }}
                        >
                            {user.displayName}
                        </p>
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
