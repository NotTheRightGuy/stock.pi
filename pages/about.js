import styles from "@/stylesheets/About.module.scss";
import Image from "next/image";
import Navbar from "./components/navbar";

const about = () => {
    return (
        <div className={styles.about}>
            <div className={styles.background}></div>
            <Navbar />
            <div className={styles.parentDiv}>
                <div className={styles.aboutUsTitle}>ABOUT US</div>
                <div className={styles.paragraph}>
                    <p>
                        this is the dummy text which has no meaning and is just
                        written just for fun and means nothing to anyone and
                        anyting so have fun and do enjoy the process of learning
                        this is the dummy text which has no meaning and is just
                        written just for fun and means nothing to anyone and
                        anyting so have fun and do enjoy the process of learning
                        this is the dummy text which has no meaning and is just
                        written just for fun and means nothing to anyone and
                        anyting so have fun and do enjoy the process of learning
                        this is the dummy text which has no meaning and is just
                        written just for fun and means nothing to anyone and
                        anyting so have fun and do enjoy the process of learning
                    </p>
                </div>
                <button className={styles.button}>Learn More </button>
            </div>
        </div>
    );
};

export default about;
