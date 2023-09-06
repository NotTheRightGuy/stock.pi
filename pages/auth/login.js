import { auth, googleProvider } from "@/services/firebase";
import styles from "@/stylesheets/login.module.scss";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Head from "next/head";
import { useRef, useState } from "react";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setLoading(true);
        await signInWithPopup(auth, googleProvider)
            .then((result) => {
                toast("Logged in successfully, Redirecting...", {
                    type: "success",
                    position: "top-right",
                    autoClose: 3000,
                    onClose: () => {
                        // window.location.href = "/";
                    },
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "light",
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast(errorMessage, {
                    type: "error",
                    position: "top-right",
                    autoClose: 3000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "light",
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleLogin = async () => {
        setLoading(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                toast("Logged in successfully, Redirecting...", {
                    type: "success",
                    position: "top-right",
                    autoClose: 3000,
                    onClose: () => {
                        // window.location.href = "/";
                    },
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "light",
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast(errorMessage, {
                    type: "error",
                    position: "top-right",
                    autoClose: 3000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "light",
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <Head>
                <title>Stock.pi | Login</title>
                <meta
                    name="description"
                    content="Take better decisions with Stock.PI"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" />
            </Head>

            <main className={styles.login_page}>
                <section className={styles.image}></section>
                <section className={styles.login_form}>
                    <div className={styles.login_hero}>
                        Sign in to <span className={styles.logo}>Stock.pi</span>
                    </div>
                    <div
                        className={styles.google_signin}
                        onClick={() => handleGoogleLogin()}
                    >
                        <img
                            src="https://i.ibb.co/vwLK5Zx/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo-removebg-preview.png"
                            alt="google"
                            className={styles.google_logo}
                        />
                        Sign in with Google
                    </div>
                    <div className={styles.signInWithEmailCont}>
                        <div className={styles.divider}></div>
                        <span className={styles.signinwithemail}>
                            or sign in with email
                        </span>
                        <div className={styles.divider}></div>
                    </div>
                    <section className={styles.login_inputs}></section>
                    <div>
                        <span
                            style={{
                                fontFamily: "Poppins",
                                display: "block",
                                fontWeight: "600",
                                marginBottom: "0.3rem",
                            }}
                        >
                            Email
                        </span>
                        <input
                            className={styles.input}
                            type="text"
                            ref={emailRef}
                        />
                    </div>
                    <div>
                        <span
                            style={{
                                fontFamily: "Poppins",
                                display: "block",
                                fontWeight: "600",
                                marginBottom: "0.3rem",
                            }}
                        >
                            Password
                        </span>
                        <input
                            className={styles.input}
                            type="password"
                            ref={passwordRef}
                        />
                    </div>
                    {loading ? (
                        <button
                            className={styles.signBtn}
                            style={{
                                backgroundColor: "#efefef",
                                cursor: "not-allowed",
                                paddingLeft: "19%",
                            }}
                        >
                            <Oval color="#000" height={20} width={20} />
                        </button>
                    ) : (
                        <button
                            className={styles.signBtn}
                            onClick={() => handleLogin()}
                        >
                            Sign In
                        </button>
                    )}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "41%",
                            fontFamily: "Poppins",
                            fontSize: "0.8rem",
                            marginTop: "1rem",
                        }}
                    >
                        Don't have an account?{" "}
                        <span
                            style={{
                                cursor: "pointer",
                                marginLeft: "0.3rem",
                                textDecoration: "underline",
                            }}
                            onClick={() => {
                                window.location.href = "/auth/signup";
                            }}
                        >
                            Sign Up
                        </span>
                    </div>
                </section>
                <ToastContainer />
            </main>
        </>
    );
}
