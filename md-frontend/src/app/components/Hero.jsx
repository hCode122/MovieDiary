import styles from "../page.module.css"

const Hero = () => {
    return (
        <div className={styles.heroDiv} id="heroDiv">
            <div className={styles.heroText} id="heroText">
                <p>
                    
                    Never forget what you've seen. Save what you want to watch next.
                </p>
                
                <h1>
                    Start tracking your movies today.
                </h1>
               
            </div>

            <img src="/images/heroImg.jpg" id="heroImg" className={styles.heroImg}> 
            </img>
        </div>
    )
}

export default Hero;