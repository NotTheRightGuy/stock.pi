import styles from "@/stylesheets/stockCard.module.scss";
import { addStockToDB, removeStocksFromDB } from "@/utils/dbStarred";
import Head from "next/head";
import { useState } from "react";

export default function StockCard({
    ticker,
    price,
    changeAmount,
    changePercentage,
    volumeTraded,
}) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleStarClick = () => {
        if (isFavorite) {
            removeStocksFromDB({
                stock: {
                    ticker: ticker,
                    price: price,
                    changeAmount: changeAmount,
                    changePercentage: changePercentage,
                    volumeTraded: volumeTraded,
                },
            });
            setIsFavorite(false);
        } else {
            addStockToDB({
                stock: {
                    ticker: ticker,
                    price: price,
                    changeAmount: changeAmount,
                    changePercentage: changePercentage,
                    volumeTraded: volumeTraded,
                },
            });
            setIsFavorite(true);
        }
    };

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                ></link>
            </Head>
            <main className={styles.cardContainer}>
                <div className={styles.cardHeader}>
                    <span>{ticker}</span>
                    {isFavorite ? (
                        <span
                            className="fa fa-star"
                            style={{ color: "gold", cursor: "pointer" }}
                            onClick={() => handleStarClick()}
                        ></span>
                    ) : (
                        <span
                            className="fa fa-star-o"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleStarClick()}
                        ></span>
                    )}
                </div>
                <div className={styles.price}>
                    <div>Price</div>
                    <span>${price}</span>
                </div>
                <div className={styles.changeAmount}>
                    <div>Change Amount</div>
                    {
                        // If changeAmount is positive, show green arrow
                        // If changeAmount is negative, show red arrow
                        // If changeAmount is 0, show no arrow

                        changeAmount > 0 ? (
                            <span style={{ color: "green" }}>
                                <a className="fa fa-arrow-up"></a>
                                {changeAmount}
                            </span>
                        ) : changeAmount < 0 ? (
                            <span style={{ color: "red" }}>
                                <a
                                    className="fa fa-arrow-down"
                                    style={{
                                        color: "red",
                                    }}
                                ></a>
                                {changeAmount}
                            </span>
                        ) : (
                            <span>{changeAmount}</span>
                        )
                    }
                </div>
                <div className={styles.changePercentage}>
                    <div>Change Percentage</div>
                    {changePercentage.slice(0, -1) > 0 ? (
                        <span style={{ color: "green" }}>
                            <a className="fa fa-arrow-up"></a>
                            {changePercentage}
                        </span>
                    ) : changePercentage.slice(0, -1) < 0 ? (
                        <span style={{ color: "red" }}>
                            <a
                                className="fa fa-arrow-down"
                                style={{
                                    color: "red",
                                }}
                            ></a>
                            {changePercentage}
                        </span>
                    ) : (
                        <span>{changePercentage}</span>
                    )}
                </div>
                <div className={styles.volumneTraded}>
                    <div>Volumne Traded</div>
                    <span>{volumeTraded}</span>
                </div>
            </main>
        </>
    );
}
