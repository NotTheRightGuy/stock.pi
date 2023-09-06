import styles from "@/stylesheets/sidebarBtn.module.scss";
export default function SidebarBtn({ icon, text, active, onClick }) {
    return (
        <div
            className={active ? styles.activeBtn : styles.btn}
            onClick={onClick}
        >
            <div className={styles.icon}>{icon}</div>
            <div className={styles.text}>{text}</div>
        </div>
    );
}
