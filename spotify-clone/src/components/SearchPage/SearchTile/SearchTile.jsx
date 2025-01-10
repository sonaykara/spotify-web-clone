import styles from "./searchtile.module.css";
const SearchTile = () => {
  return (
    <div className={styles.searchTileWrapper}>
      <div className={styles.searchTileHeadLine}>
        <h2>En çok dinlenen sonuç</h2>
      </div>
      <div className={styles.searchTileInfo}>
        <div className={styles.searchTileInfoImg}>
          <img src="https://picsum.photos/200/300"></img>
        </div>
        <div className={styles.searchTileInfoHeadLine}>
          <a href="">
            <h2>Nedenini Sorma</h2>
          </a>
        </div>
        <div className={styles.searchTileInfoArtist}>
          <span>E</span>
          <span>Şarkı</span>
          <span style={{ color: "#fff" }}>Uzi</span>
        </div>
      </div>
    </div>
  );
};

export default SearchTile;
