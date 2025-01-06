import PlayButton from "../PlayButton/PlayButton";
import styles from "./card.module.css";
function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardImageWrapper}>
          <img
            className={styles.cardImage}
            src="https://picsum.photos/200/300"
            alt=""
          />
          <div className={styles.playBtn}>
            <PlayButton></PlayButton>
          </div>
        </div>
        <div className={styles.cardTextArea}>
          <p className={styles.cardTitle}>Şarkı ismi</p>
          <h3 className={styles.artistName}>snatçı ismi</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
