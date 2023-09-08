import styles from "@/stylesheets/landingStock.module.scss";
import LandingStockCard from "./landingStock";

export default function LandingStock() {
    return (
        <section className={styles.landingStock}>
            <div className={styles.shape}></div>
            <h1>Get insights about all stocks</h1>
            <div className={styles.subText}>
                Explore the vast universe of stocks: from industry giants to
                emerging players. Unravel the narratives, trends, and data
                behind each ticker, offering a comprehensive look into the
                ever-evolving world of equities and market dynamics.
            </div>

            <div className={styles.stockContainer}>
                <LandingStockCard
                    ticker="AAPL"
                    price="123.85"
                    changeAmount="1.03"
                    changePercentage="0.20%"
                    volumeTraded="569841"
                />
                <LandingStockCard
                    ticker="MSFT"
                    price="212.56"
                    changeAmount="5.04"
                    changePercentage="3.56"
                    volumeTraded="458716"
                />
                <LandingStockCard
                    ticker="GOOG"
                    price="80.56"
                    changeAmount="8.26"
                    changePercentage="1.56"
                    volumeTraded="123,456,789"
                />
            </div>
        </section>
    );
}
