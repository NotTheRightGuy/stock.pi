import styles from "@/stylesheets/aboutUs.module.scss";
import Image from "../assets/aboutUs.png"

export default function AboutUs(){
  return (
    <div>
      <h1 className={styles.heading}>We're changing the game</h1>
      <div>

          <div className={styles.container}>
            <img src="https://doodleipsum.com/700/outline?i=7ec5228c511a7375eaf39d1aea79a9f0" className={styles.image} alt="about us" />
            <p className={styles.paragraph}>
            <h2 className={styles.second}> Our Mission:</h2>
                 At Stock.PI, our mission is to democratize stock market information and empower investors of all levels with powerful tools and insights. We aim to provide a user-friendly platform where you can access real-time data, analyze stocks, and make informed investment decisions effortlessly. With a commitment to transparency and accessibility, we strive to bring the world of finance closer to you, one click at a time.
            </p>
          </div>
          <div className={styles.container}>
             <p className={styles.paragraph}>
                <h2> Our Vision:</h2>
               Our vision at Stock.PI is to create a financial ecosystem where everyone can take control of their investments and financial well-being. We envision a platform that not only offers a feature-rich dashboard for tracking portfolios but also includes an intelligent chatbot that provides personalized advice and answers your investment queries in real-time. Our history feature allows you to review past performance, learn from your investment journey, and make data-driven decisions. Additionally, our 'starred' feature helps you keep a close watch on your favorite stocks. We see a future where all your financial needs are met on a single platform, making investing smarter and more accessible than ever before.
             </p>
            <img src="https://doodleipsum.com/700/outline?bg=ffffff&i=f93384e7375de3fe0c8ab3a29cd337ea" className={styles.image} alt="about us" />
          </div>
          

      </div>
    </div>
    
  );

}