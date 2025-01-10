import styles from "./searchplaylist.module.css";
const SearchPlayList = () => {
  return (
    <div className={styles.playlistWrapper}>
      <div className={styles.playlistArea}>
        <div className={styles.playlistHeadline}>
          <h2>Şarkılar</h2>
        </div>
        <div className={styles.playlistInfoWrapper}>
          <div className={styles.playlistInfoItems}>
            <div className={styles.playlistInfoItem}>
              <div className={styles.playlistTileInfoImg}>
                <img src="https://picsum.photos/200/300"></img>
              </div>
              <div className={styles.playlistInfoContent}>
                <div>
                  <h2>Nedenini sorma</h2>
                </div>
                <div className={styles.playlistInfoArtist}>
                  <span>E</span>
                  <span>UZI</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.playlistSideWrapper}>
            <div>İcon</div>
            <div>time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPlayList;
