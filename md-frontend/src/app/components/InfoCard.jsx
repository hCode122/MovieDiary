import styles from "../page.module.css"


const InfoCard = (props) => {
    return (
        <div className={styles.headCard} id="headCard">
            <div className={styles.cardImg}>
               <img src={props.img}></img> 
            </div>
            <div className={styles.cardText}> 
                {props.text}
            </div>
        </div>
    )
}

export default InfoCard;