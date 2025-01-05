import styles from "./artistCard.module.css";
function ArtistCard() {
  return (
    <div className={styles.artistContainer}>
      <div className={styles.artistCard}>
        <div>
          <img
            className={styles.artistImage}
            src="https://picsum.photos/200/300"
            alt=""
          />
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
