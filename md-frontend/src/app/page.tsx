import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoCard from "./components/InfoCard"
import styles from "./page.module.css"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <main className={styles.home}>
      <Header></Header>

      <div className={styles.mainArea}>
        <Hero></Hero>

        <div className={styles.cardArea}> 
          <InfoCard 
            text="Add the movies and tv shows you watched so you never forget them."
            img="/images/add.svg"
          ></InfoCard>
          <InfoCard 
            text="Rate episodes and see how others rated them!"
            img="/images/star.svg"
          ></InfoCard>
          <InfoCard 
            text="Use different lists to store the shows you've watched, or the ones you plan to watch!"
            img="/images/watch-later.svg"
          ></InfoCard>
        </div>
       
      </div>

      <Footer></Footer>

    </main>
  );
}
