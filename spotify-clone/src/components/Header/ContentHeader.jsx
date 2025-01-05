import styles from "./contentHeader.module.css";
const ContentHeader = () => {
  return (
    <div>
      <section className={styles.artistContainer}>
        <div className={styles.artisHeaderWrapper}>
          <div className={styles.headerİtem}>
            <h2>
              <a>Popüler Sanatçılar</a>
            </h2>
          </div>
          <div className={styles.headerİtem}>
            <h2 style={{ color: "#A5B3B3" }}>
              <a>Tümünü Gör</a>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentHeader;
