import styles from "@/styles/StockCard.module.css";
export default function StockCard({
    symbol,
    identifier,
    open,
    dayHigh,
    dayLow,
    previousClose,
    change,
}) {
    return (
        <div className={styles.StockCard}>
            <div className={styles.symbol}>{symbol}</div>
            <div className={styles.identifier}>{identifier}</div>
            <div className={styles.open}>{`Open : ${open}`}</div>
            <div className={styles.dayHigh}>{`Day High : ${dayHigh}`}</div>
            <div className={styles.dayLow}>{`Day Low : ${dayLow}`}</div>
            <div
                className={styles.previousClose}
            >{`Previous Close : ${previousClose}`}</div>
            <div className={styles.change}>{`Change : ${change}`}</div>
        </div>
    );
}
