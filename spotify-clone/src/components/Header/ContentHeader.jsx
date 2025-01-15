import styles from "./contentHeader.module.css";
const ContentHeader = (props) => {
  const { headerTitle, headerContent } = props;
  return (
    <div>
      <section className={styles.artistContainer}>
        <div className={styles.artistHeaderWrapper}>
          <div className={styles.headerİtem}>
            {headerTitle && (
              <h2>
                <a>{headerTitle}</a>
              </h2>
            )}
          </div>
          <div className={styles.headerİtem}>
            {headerContent && (
              <h2 style={{ color: "#A5B3B3" }}>
                <a
                  style={{
                    fontSize: "12px",
                    color: "#b3b3b3",
                    fontWeight: "700",
                  }}
                >
                  {headerContent}
                </a>
              </h2>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentHeader;
