import styles from "@/stylesheets/stockContainer.module.scss";
import { useEffect, useState } from "react";
import StockCard from "./stockCard";

import getAllData from "@/utils/topStocks";

export default function StockContainer() {
    const [lastUpdated, setLastUpdated] = useState([]);
    const [topGainer, setTopGainer] = useState([]);
    const [topLoser, setTopLoser] = useState([]);
    const [topTraded, setTopTraded] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getAllData();
            setLastUpdated(data["lastUpdated"]);
            setTopGainer(data["topGainer"]);
            setTopLoser(data["topLoser"]);
            setTopTraded(data["topTraded"]);
        }
        fetchData();
    }, []);

    return (
        <section className={styles.stockContainer}>
            <div className={styles.headerRow}>
                <h1>Top Stocks</h1>
                <p>
                    Last Updated: <span>{lastUpdated}</span>
                </p>
            </div>
            <div className={styles.topTraded}>
                <h2>Top Traded Stocks</h2>
                <div className={styles.cardShelf}>
                    {topTraded &&
                        topTraded.map((stock) => (
                            <StockCard
                                key={Math.random()}
                                ticker={stock["ticker"]}
                                price={stock["price"]}
                                changeAmount={stock["change_amount"]}
                                changePercentage={stock["change_percentage"]}
                                volumeTraded={stock["volume"]}
                            />
                        ))}
                </div>
            </div>
            <div className={styles.topGainer}>
                <h2>Top Gainer</h2>
                <div className={styles.cardShelf}>
                    {topGainer &&
                        topGainer.map((stock) => (
                            <StockCard
                                key={Math.random()}
                                ticker={stock["ticker"]}
                                price={stock["price"]}
                                changeAmount={stock["change_amount"]}
                                changePercentage={stock["change_percentage"]}
                                volumeTraded={stock["volume"]}
                            />
                        ))}
                </div>
            </div>
            <div className={styles.topLoser}>
                <h2>Top Loser</h2>
                <div className={styles.cardShelf}>
                    {topLoser &&
                        topLoser.map((stock) => (
                            <StockCard
                                key={Math.random()}
                                ticker={stock["ticker"]}
                                price={stock["price"]}
                                changeAmount={stock["change_amount"]}
                                changePercentage={stock["change_percentage"]}
                                volumeTraded={stock["volume"]}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}
