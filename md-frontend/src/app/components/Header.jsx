import Link from "next/link";
import styles from "../page.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            
            <div className={styles.logo}>
                <img src="/images/md-logo.jpg"></img>
            </div>
         
            <div className={styles.linkArea} id="linkArea">
                <Link href="/">My movies</Link>
                <Link href="/">Movie database</Link>
                <Link href="/">Account</Link>
            </div>
        </div>
    )
}

export default Header;