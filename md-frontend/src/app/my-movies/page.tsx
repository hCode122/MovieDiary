import styles from "./page.module.css"
import Header from "./components/TabBar"

const MyMovies = () => {
    return (
        <div className={styles.mainArea}>
            <Header></Header>
        </div>
    )
}

export default MyMovies