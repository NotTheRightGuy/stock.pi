import styles from "@/stylesheets/Dashboard.module.css";
import Image from "next/image";
import Sidebar from "./components/sidebar";
import { useRef, useState, useEffect } from "react";

export default function Dashboard() {
    const [message, setMessage] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        console.log(message);
    }, [message]);

    const handleClick = () => {
        const statement = inputRef.current.value;

        if (statement) {
            setMessage((prev) => [...prev, statement]);
        }

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ inputText: statement }),
        };

        fetch("http://localhost:3000/api/main", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setMessage((prev) => [...prev, data.msg]);
            });

        inputRef.current.value = "";
    };

    return (
        <>
            <div className={styles.mainContainer}>
                <Sidebar />
                <div className={styles.rightContainer}>
                    <div className={styles.topContainer}>
                        <img
                            className={styles.messageIcon}
                            src="/icons8-chat-message-96.png"
                        />
                        <span className={styles.messageTextLogo}>Messages</span>
                    </div>
                    <div className={styles.middleContainer}>
                        {message.map((item, index) => {
                            return (
                                <div
                                    className={styles.messageContainer}
                                    key={index}
                                >
                                    <div className={styles.message}>
                                        <div className={styles.messageText}>
                                            {item}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.bottomContainer}>
                        <div style={{ flex: "1" }}></div>
                        <div className={styles.inputContainer}>
                            <input
                                ref={inputRef}
                                className={styles.input}
                                type="text"
                                placeholder="How Can I Help You?"
                            />
                            <button onClick={handleClick}>
                                <img height={28} src="/icons8-sent-24.png" />
                            </button>
                        </div>
                        <div className={styles.sendBtnContainer}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
