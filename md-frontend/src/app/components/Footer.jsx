import styles from "../page.module.css";

const Footer = () => {
    return (
        <div className={styles.footerArea}>
            <h2 className={styles.h2}>What are you waiting for?</h2>
            <button className={styles.button1}>Create your account today!</button>

            <footer className={styles.footer}>HCode122 2024 - All rights reserved</footer>

        </div>
    )
}

export default Footer;