import styles from "@/stylesheets/Dashboard.module.css";

export default function Sidebar() {
    return (
        <>
            <div className={styles.leftContainer}>
                <button
                    onClick={() => {
                        window.location.href = "/dashboard";
                    }}
                >
                    <img src="/icons8-chat-message-50.png" />
                </button>
                <button
                    onClick={() => {
                        window.location.href = "/monitor";
                    }}
                >
                    <img src="/icons8-pro-display-xdr-96.png" />
                </button>
            </div>
        </>
    );
}
