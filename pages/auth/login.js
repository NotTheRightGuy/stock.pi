import { auth } from "@/services/firebase";
import styles from "@/stylesheets/login.module.scss";
import Head from "next/head";

export default function Login() {
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
                    <div className={styles.google_signin}>
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
                            Username or Email
                        </span>
                        <input className={styles.input} type="text" />
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
                        <input className={styles.input} type="password" />
                    </div>
                    <button className={styles.signBtn}>Sign In</button>
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
            </main>
        </>
    );
}
