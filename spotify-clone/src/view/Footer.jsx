import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <p>Spotify Önizlemesi</p>
        <p>
          Şarkı ve podcast'lere sınırsız erişim ve aralarda çıkan reklamlar için
          kaydol. Kredi kartına gerek yok.
        </p>
      </div>
      <div className={styles.customButton}>Ücretsiz kaydol</div>
    </footer>
  );
};

export default Footer;
