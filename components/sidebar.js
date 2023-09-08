import styles from "@/stylesheets/sidebar.module.scss";
import Logo from "./logo";
import SidebarBtn from "./sidebarBtn";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo light />
            <div>
                <SidebarBtn
                    icon="🏠"
                    text="Chat"
                    onClick={() => {
                        window.location.href = "/session/dashboard";
                    }}
                />
                <SidebarBtn
                    icon="💬"
                    text="Previous Chat"
                    onClick={() => {
                        window.location.href = "/session/previousChat";
                    }}
                />
                <SidebarBtn icon="⭐" text="Starred" />
                <SidebarBtn icon="💸" text="Stocks" />
            </div>
            <div></div>
        </div>
    );
}
