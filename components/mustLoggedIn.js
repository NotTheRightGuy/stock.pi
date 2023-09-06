import styles from "@/stylesheets/mustbeloggedin.module.scss";
export default function MustBeLoggedIn() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                You must be logged in to access this page
            </p>
            <button
                className={styles.login}
                onClick={() => (window.location.href = "/auth/login")}
            >
                Login
            </button>
        </div>
    );
}
