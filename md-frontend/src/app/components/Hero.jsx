import styles from "../page.module.css"

const Hero = () => {
    return (
        <div className={styles.heroDiv} id="heroDiv">
            <div className={styles.heroText} id="heroText">
                <h1>
                    Document your viewing journey
                </h1>
                <p>
                    Your place, to add, rate, share and find movies and tv shows!
                </p>
            </div>

            <img src="/images/heroImg.jpg" id="heroImg" className={styles.heroImg}> 
            </img>
        </div>
    )
}

export default Hero;