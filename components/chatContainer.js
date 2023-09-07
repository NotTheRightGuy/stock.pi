"use client";
import styles from "@/stylesheets/chatContainer.module.scss";
import { getFromDB, saveToDB } from "@/utils/dbFuntions";
import extractCompanyName from "@/utils/extractOrg";
import getTicker from "@/utils/symbolFromOrg";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import getSentiment from "@/utils/getSentiment";
import ResponseCard from "./responseCard";

import "react-toastify/dist/ReactToastify.css";

export default function ChatContainer() {
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);
    const chatEnd = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
        const handleKeyUp = (event) => {
            if (event.keyCode === 13) {
                handleInput();
            }
        };
        inputRef.current.addEventListener("keyup", handleKeyUp);
        return () => {
            if (inputRef.current)
                inputRef.current.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    useEffect(() => {
        chatEnd.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleInput = async () => {
        const input = inputRef.current.value;
        if (input) {
            setMessages((messages) => [
                ...messages,
                { user: "user", text: input },
            ]);
            inputRef.current.value = "";
        }
        const org = extractCompanyName(input);
        if (org) {
            const orgticker = await getTicker(org);
            setMessages((messages) => [
                ...messages,
                {
                    user: "bot",
                    text: `Fetching ${org} | ${orgticker} data...`,
                },
            ]);
            await getResponseCard(orgticker, org);
        } else {
            setMessages((messages) => [
                ...messages,
                {
                    user: "bot",
                    text: `Sorry, I was not able to find any mention of an organization in your message.`,
                },
            ]);
        }
    };

    const saveMessages = async () => {
        await saveToDB(messages);
        toast.success("Messages saved!");
    };

    const getResponseCard = async (orgTicker, orgName) => {
        const res = await getSentiment(orgTicker);
        const responseCard = (
            <ResponseCard
                orgName={orgName}
                orgTicker={orgTicker}
                sentimentScore={res.average_sentiment}
                sentimentLabel={res.sentiment_label}
                articles_link={res.articles_link}
            />
        );
        setMessages((messages) => [
            ...messages,
            { user: "resCard", text: responseCard },
        ]);
    };

    return (
        <div className={styles.mainContainer}>
            <ToastContainer />
            <section className={styles.container}>
                {messages.map((message, index) => {
                    if (message.user === "bot") {
                        return (
                            <div key={index} className={styles.otherMessage}>
                                {message.text}
                            </div>
                        );
                    } else if (message.user === "resCard") {
                        return message.text;
                    } else {
                        return (
                            <div
                                key={Math.random()}
                                className={styles.userMessage}
                            >
                                {message.text}
                            </div>
                        );
                    }
                })}
                <div ref={chatEnd}></div>
            </section>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Start by sending a message"
                    ref={inputRef}
                />
                <button
                    onClick={() => {
                        handleInput();
                    }}
                >
                    Send
                </button>
                <button onClick={() => saveMessages()}>Save</button>
            </div>
        </div>
    );
}
