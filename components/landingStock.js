import styles from "@/stylesheets/stockCard.module.scss";
import Head from "next/head";

export default function LandingStockCard({
    ticker,
    price,
    changeAmount,
    changePercentage,
    volumeTraded,
}) {
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
                </div>
                <div className={styles.price}>
                    <div>Price</div>
                    <span>${price}</span>
                </div>
                <div className={styles.changeAmount}>
                    <div>Change Amount</div>
                    <div>{changeAmount}</div>
                </div>
                <div className={styles.changePercentage}>
                    <div>Change Percentage</div>
                    <div>{changePercentage}</div>
                </div>
                <div className={styles.volumneTraded}>
                    <div>Volumne Traded</div>
                    <span>{volumeTraded}</span>
                </div>
            </main>
        </>
    );
}
