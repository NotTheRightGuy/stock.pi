import styles from "@/stylesheets/about.module.scss";
export default function About() {
    return (
        <>
            <section className={styles.about}>
                <div className={styles.topRow}>
                    <div className={styles.shape}></div>
                </div>
                <div className={styles.secondRow}>
                    <div className={styles.heroAbout}>
                        Unlocking Emotions in Every Word: Dive Deep with Our
                        Sentiment Analysis.
                    </div>
                </div>
                <div className={styles.thirdRow}>
                    Discover the Pulse of the Market with Stock Sentiment
                    Analysis. In the intricate dance of numbers and trends that
                    define the stock market, every announcement, earnings
                    report, and news article tells a story. But how do investors
                    truly feel? Our cutting-edge sentiment analysis tool
                    deciphers the emotions embedded in the vast sea of market
                    commentary, extracting insights that numbers alone can't
                    provide. By diving deep into investor sentiments, we unveil
                    the undercurrents shaping stock movements, offering you an
                    unprecedented edge. Navigate the markets not just by what's
                    being said, but by how it's being felt. Step ahead with
                    informed confidence in the world of stocks.
                </div>
            </section>
        </>
    );
}
