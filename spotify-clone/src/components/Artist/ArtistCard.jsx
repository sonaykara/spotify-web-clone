import PlayButton from "../PlayButton/PlayButton";
import styles from "./artistCard.module.css";

function ArtistCard() {
  return (
    <div className={styles.artistContainer}>
      <div className={styles.artistCard}>
        <div className={styles.cardImageWrapper}>
          <img
            className={styles.artistImage}
            src="https://picsum.photos/200/300"
            alt=""
          />
          <div className={styles.playBtn}>
            <PlayButton></PlayButton>
          </div>
        </div>
        <div className={styles.cardTextArea}>
          <h3 className={styles.artistName}>snatçı ismi</h3>
          <p className={styles.artistTitle}>ünvan</p>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
