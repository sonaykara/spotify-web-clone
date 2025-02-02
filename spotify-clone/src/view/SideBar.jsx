import styles from "./sidebar.module.css";
import { SiWikibooks } from "react-icons/si";
import { FiPlus } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";

const SideBar = () => {
  return (
    <nav className={styles.sideBar}>
      <div className={styles.sideBarWrapper}>
        <div className={styles.headerArea}>
          <header className={styles.sideBarHeader}>
            <div className={styles.sideBarContent}>
              <div className={styles.headerButton}>
                <SiWikibooks></SiWikibooks>
                <div>Kitaplığın</div>
              </div>
              <div className={styles.headerPlusButton}>
                <FiPlus></FiPlus>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className={styles.sideBarSeciton}></div>
      <div className={styles.sideBarMain}>
        <div className={styles.sideBarMainWrapper}>
          <section className={styles.sideBarFirstContent}>
            <div className={styles.sideBarFirstContentItems}>
              <div>İlk çalma listeni oluştur</div>
              <p>Çok kolay. Sana yardımcı olacağız</p>
            </div>
            <div>
              <div className={styles.customButton}>Çalma Listesi Oluşturun</div>
            </div>
          </section>
          <section className={styles.sideBarSecondContent}>
            <div className={styles.sideBarSecondContentItems}>
              <div>Takip etmek isteyeceğin podcast'ler bulalım</div>
              <p>Yeni bölümler yayınlandığında sana haber vereceğiz</p>
            </div>
            <div className={styles.customButton}>Podcast'lere göz at</div>
          </section>
        </div>
      </div>
      <div className={styles.sideBarLinks}>
        <div className={styles.sideBarLinksİtems}>
          <div>
            <a href="https://www.spotify.com/tr-tr/legal/" target="_blank">
              <span>Yasal</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.spotify.com/tr-tr/safetyandprivacy/"
              target="_blank"
            >
              <span>Güvenlik ve Gizlilik Merkezi</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.spotify.com/tr-tr/legal/privacy-policy/"
              target="_blank"
              style={{ marginRight: "0px" }}
            >
              <span>Gizlilik Politikası</span>
            </a>
          </div>
          <div>
            <div style={{ marginRight: "0px" }}>
              <a>Tanımlama Bilgisi Ayarları</a>
            </div>
          </div>
          <div>
            <a
              href="https://www.spotify.com/tr-tr/legal/privacy-policy/#s3"
              target="_blank"
            >
              <span>Reklamlar Hakkında</span>
            </a>
          </div>
          <div style={{ marginRight: "0px" }}>
            <a
              href="https://www.spotify.com/tr-tr/accessibility/"
              target="_blank"
            >
              <span>Erişilebilirlik</span>
            </a>
          </div>
          <div
            style={{
              marginRight: "0px",
              marginleft: "16px",
              color: "white",
            }}
          >
            <a
              href="https://www.spotify.com/legal/cookies-policy/"
              target="_blank"
            >
              <span>Çerezler</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.sideBarLanguages}>
        <div className={styles.sideBarLanguagesBtn}>
          <div>
            <MdLanguage></MdLanguage>
          </div>
          <div>Türkçe</div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
