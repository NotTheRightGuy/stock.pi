import styles from "@/stylesheets/Monitor.module.css";
import Image from "next/image";
import Sidebar from "./components/sidebar";
import StockCard from "./components/stockCard";
import { useEffect, useState } from "react";

const axios = require("axios");

const options = {
    method: "GET",
    url: "https://latest-stock-price.p.rapidapi.com/price",
    params: { Indices: "NIFTY 50" },
    headers: {
        "X-RapidAPI-Key": "0537b8df84msh9ddd242f693c849p19779ajsn2a3dfeb14aba",
        "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
};

export default function Monitor() {
    const [stockData, setStockData] = useState([]);
    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                setStockData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div className={styles.mainContainer}>
                <Sidebar />
                <div className={styles.rightContainer}>
                    <div className={styles.topContainer}>
                        <img
                            className={styles.messageIcon}
                            src="/icons8-studio-display-100.png"
                        />
                        <span className={styles.messageTextLogo}>Monitor</span>
                    </div>
                    <div className={styles.middleContainer}>
                        {stockData.map((stock) => (
                            <StockCard
                                symbol={stock.symbol}
                                identifier={stock.identifier}
                                open={stock.open}
                                dayHigh={stock.dayHigh}
                                dayLow={stock.dayLow}
                                previousClose={stock.previousClose}
                                change={stock.change}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
