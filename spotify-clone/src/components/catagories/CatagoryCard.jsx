import styles from "./catagory.module.css"

const CatagoryCard = () => {
  return (
    <div className={styles.catagoryCardWarapper}>
      <a href="">
        <div className={styles.catgoryCard}>
            <img src="https://picsum.photos/200/300" className={styles.cardImg}></img>
            <span className={styles.cardCopy}>Podcast'lerle 2024</span>
        </div>
      </a>
    </div>
  )
}

export default CatagoryCard
