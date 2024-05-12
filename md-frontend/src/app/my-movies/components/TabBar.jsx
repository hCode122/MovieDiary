import styles from "../page.module.css"

const TabBar = () => {
    return (
        <div className={styles.tabArea}>
            <img src="/images/arrow-left.svg"></img>
            <ul className={styles.tabBar}>
                <li className={styles.tabItem}>Favourites</li>
                <li className={styles.tabItem}>Watch later</li>
                <li className={styles.tabItem}>Watched</li>
                <li className={styles.tabItem}>User Profile</li>
            </ul>
        </div>
        
    )
}

export default TabBar;

