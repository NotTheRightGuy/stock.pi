import styles from "@/stylesheets/responseCard.module.scss";
export default function ResponseCard({
    orgName,
    orgTicker,
    sentimentScore,
    sentimentLabel,
    articles_link,
}) {
    let color;
    if (sentimentScore <= -0.35) {
        color = "#FF0000";
    } else if (sentimentScore <= -0.15) {
        color = "#FFA500";
    } else if (sentimentScore <= 0.15) {
        color = "#FFaa00";
    } else if (sentimentScore <= 0.35) {
        color = "#00FF00";
    } else {
        color = "#008000";
    }

    let helperText;

    if (sentimentScore <= -0.35) {
        helperText =
            "Given the prevailing market conditions and the recent analytical data, I strongly recommend considering the sale of your shares in this particular stock. There's a significant bearish sentiment surrounding it right now. If you're open to riskier strategies and have the expertise, shorting the stock might also be a viable option, as many experts predict a further decline in its value.";
    } else if (sentimentScore <= -0.15) {
        helperText =
            "Given the prevailing market conditions and the recent analytical data, I recommend considering the sale of your shares in this particular stock. There's a bearish sentiment surrounding it right now. If you're open to riskier strategies and have the expertise, shorting the stock might also be a viable option, as many experts predict a further decline in its value.";
    } else if (sentimentScore <= 0.15) {
        helperText =
            "Given the current market trends and available data, it might be wise to hold onto your shares in this stock for the time being. The prevailing sentiment seems to be neutral, suggesting that there may not be significant downward pressure in the immediate future. Rather than making hasty decisions, it could be beneficial to monitor the situation closely and wait for a clearer indication of the stock's potential trajectory.";
    } else if (sentimentScore <= 0.35) {
        helperText =
            "Considering the present market dynamics and positive momentum, it would be a prudent move to consider purchasing shares or going long on this stock. The overwhelming sentiment right now is bullish, indicating potential for upward movement. Many analysts and market watchers are optimistic about its prospects. It might be an opportune time to capitalize on this momentum and potentially benefit from the stock's appreciation. Always ensure you do your own research and consult with financial advisors before making any investment decisions.";
    } else {
        helperText =
            "Given the current market indicators and overwhelming positive sentiment, it seems to be an opportune moment to consider buying shares or taking a long position in this stock. The market is showing strong bullish tendencies specifically for this asset, suggesting there could be significant upward potential. Many industry experts and market analysts concur with this optimistic view. Engaging now might provide a favorable entry point, capitalizing on anticipated growth. However, always ensure thorough research and possibly consult with a financial expert before making definitive investment choices.";
    }
    return (
        <section className={styles.container}>
            <div className={styles.rowFirst}>
                <div className={styles.companyName}>{orgName}</div>
                <div className={styles.companyTicker}>{orgTicker}</div>
            </div>
            <div className={styles.rowSecond}>
                <div className={styles.sentimentLabel}>{sentimentLabel}</div>
                <div
                    className={styles.sentimentScore}
                    style={{
                        color: color,
                    }}
                >
                    {sentimentScore}
                </div>
            </div>
            <div>
                <div className={styles.helperText}>{helperText}</div>
            </div>
            <div className={styles.newsHeader}>Latest News</div>
            <div className={styles.newsContainer}>
                <div className={styles.newsCard}>
                    <div className={styles.newsCardBanner}>
                        <img src={`${articles_link[0].banner}`} />
                    </div>
                    <div className={styles.newsCardTitle}>
                        {articles_link[0].title}
                    </div>
                    <button
                        onClick={() => {
                            window.open(`${articles_link[0].link}`, "_blank");
                        }}
                    >
                        Visit
                    </button>
                </div>
                <div className={styles.newsCard}>
                    <div className={styles.newsCardBanner}>
                        <img src={`${articles_link[1].banner}`} />
                    </div>
                    <div className={styles.newsCardTitle}>
                        {articles_link[1].title}
                    </div>
                    <button
                        onClick={() => {
                            window.open(`${articles_link[1].link}`, "_blank");
                        }}
                    >
                        Visit
                    </button>
                </div>
                <div className={styles.newsCard}>
                    <div className={styles.newsCardBanner}>
                        <img src={`${articles_link[2].banner}`} />
                    </div>
                    <div className={styles.newsCardTitle}>
                        {articles_link[2].title}
                    </div>
                    <button
                        onClick={() => {
                            window.open(`${articles_link[2].link}`, "_blank");
                        }}
                    >
                        Visit
                    </button>
                </div>
            </div>
        </section>
    );
}
