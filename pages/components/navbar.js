import styles from "@/styles/Landing.module.css";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <Image
                    src="/logo.png"
                    alt="Stocker.PI Logo"
                    width={90}
                    height={90}
                />
            </div>
            <div className={styles.navbar__links}>
                <div
                    onClick={() => {
                        window.location.href = "/";
                    }}
                >
                    Home
                </div>
                <div
                    onClick={() => {
                        window.location.href = "/about";
                    }}
                >
                    About
                </div>
                <div
                    onClick={() => {
                        window.location.href = "/contact";
                    }}
                >
                    Contact
                </div>
                <div
                    onClick={() => {
                        window.location.href = "/login";
                    }}
                >
                    Login
                </div>
            </div>
        </nav>
    );
}
