import styles from "./../styles/register.module.scss";

import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkvTzG6YYyApb5IDedlsknT-AghdopFDk",
    authDomain: "hackinfinity-eda64.firebaseapp.com",
    projectId: "hackinfinity-eda64",
    storageBucket: "hackinfinity-eda64.appspot.com",
    messagingSenderId: "620138670167",
    appId: "1:620138670167:web:8a0980ddc5b5b350235b12",
    measurementId: "G-ESGCV1WZTM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const register = () => {
    function registeruser(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var name = document.getElementById("name").value;

        console.log(email, password, name);
        registerWithEmailAndPassword(name, email, password);
    }
    const registerWithEmailAndPassword = async (name, email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name,
                authProvider: "local",
                email,
            });
            window.location.href = "/dashboard";
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;
            const q = query(
                collection(db, "users"),
                where("uid", "==", user.uid)
            );
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: "google",
                    email: user.email,
                });
            }
            navigateToHome();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const navigateToLogin = () => {
        window.location.href = "/login";
    };

    const navigateToHome = () => {
        window.location.href = "/dashboard";
    };

    return (
        <div className={styles.register}>
            <div className={styles.box}>
                <div className={styles.left}>
                    <form>
                        <h1>Create Account</h1>
                        <div
                            className={styles.googleBtn}
                            onClick={signInWithGoogle}
                        >
                            <div className={styles.googleIconWrapper}>
                                <img
                                    style={{
                                        height: "36px",
                                        width: "36px",
                                    }}
                                    src="/google.png"
                                />
                            </div>
                            <p className={styles.btnText}>
                                <b style={{ fontFamily: "Roboto Slab" }}>
                                    Sign in with Google
                                </b>
                            </p>
                        </div>
                        <span style={{ marginBottom: "1rem" }}>
                            or Register your Details and Create New Account
                        </span>
                        <input type="text" placeholder="Name" id="name" />
                        <input type="email" placeholder="Email" id="email" />
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                        />
                        <button onClick={registeruser}>Sign Up</button>
                        <div>
                            Already have an account,{" "}
                            <span
                                style={{
                                    color: "lightsalmon",
                                    cursor: "pointer",
                                }}
                                onClick={navigateToLogin}
                            >
                                Login here
                            </span>
                        </div>
                    </form>
                </div>
                <div className={styles.right}></div>
            </div>
        </div>
    );
};

export default register;
