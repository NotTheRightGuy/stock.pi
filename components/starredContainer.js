import styles from "@/stylesheets/stockContainer.module.scss";
import { getStocksFromDB } from "@/utils/dbStarred";
import StockCard from "./stockCard";

import { useEffect, useState } from "react";

export default function StarredContainer() {
    const [starred, setStarred] = useState([]);

    useEffect(() => {
        async function getStocks() {
            const stocks = await getStocksFromDB();
            setStarred(stocks);
            console.log(stocks);
        }
        getStocks();
    }, []);
    return (
        <section className={styles.stockContainer}>
            <div className={styles.headerRow}>
                <h1>Starred Stocks ⭐</h1>
            </div>
            <div className={styles.cardShelf}>
                {starred.map((stock) => {
                    return (
                        <StockCard
                            key={Math.random()}
                            ticker={stock.ticker}
                            price={stock.price}
                            changeAmount={stock.changeAmount}
                            changePercentage={stock.changePercentage}
                            volumeTraded={stock.volumeTraded}
                            starred={true}
                        />
                    );
                })}
            </div>
        </section>
    );
}
