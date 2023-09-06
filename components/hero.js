import styles from "@/stylesheets/hero.module.scss";
export default function Hero() {
    return (
        <main className={styles.hero}>
            <section style={{ marginTop: "15vh" }}>
                <div className={styles.mainHero}>
                    Decode the Market's Mood - Before You Invest.
                </div>
                <div className={styles.heroText}>
                    In today's fast-paced stock market, having the right data at
                    your fingertips can make all the difference. Our platform
                    goes beyond traditional metrics, tapping into the pulse of
                    market chatter, news, and social media to offer you a
                    comprehensive sentiment analysis.{" "}
                </div>
                <div className={styles.startedBtn}>Let's get you started</div>
            </section>
            <section></section>
        </main>
    );
}
