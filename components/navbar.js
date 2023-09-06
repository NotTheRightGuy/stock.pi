import styles from "@/stylesheets/navbar.module.scss";
export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                Stock<span className={styles.pi}>.pi</span>
            </div>
            <div className={styles.links}>
                <button>Home</button>
                <button>About</button>
                <button>Stocks</button>
            </div>
            <div className={styles.auth}>
                <button
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => (window.location.href = "/auth/login")}
                >
                    Log in
                </button>
                <button
                    className={styles.signup}
                    onClick={() => (window.location.href = "/auth/signup")}
                >
                    Sign Up
                </button>
            </div>
        </nav>
    );
}
