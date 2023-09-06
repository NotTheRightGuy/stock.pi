import styles from "@/stylesheets/logo.module.scss";

export default function Logo({ light }) {
    return (
        <div>
            {light ? (
                <div
                    className={styles.lightLogo}
                    onClick={() => (window.location.href = "/")}
                >
                    Stock<span className={styles.pi}>.pi</span>
                </div>
            ) : (
                <div
                    className={styles.logo}
                    onClick={() => (window.location.href = "/")}
                >
                    Stock<span className={styles.pi}>.pi</span>
                </div>
            )}
        </div>
    );
}
