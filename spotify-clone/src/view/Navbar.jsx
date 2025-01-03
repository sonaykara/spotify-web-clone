import styles from "./navbar.module.css";
import { FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { LuPanelTopClose } from "react-icons/lu";
import { GrSpotify } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className={styles.navbarMain}>
      <div className={styles.navbarWrapper}>
        <div>
          <GrSpotify style={{ color: " white" }} size={32}></GrSpotify>
        </div>
        <div className={styles.searchAreaWrapper}>
          <div className={styles.serachHomeIcon}>
            <GoHome size={24} style={{ color: " #656565" }}></GoHome>
          </div>
          <div className={styles.searchInputArea}>
            <div>
              <FiSearch
                size={24}
                style={{ color: " #656565", padding: "12px" }}
              ></FiSearch>
            </div>
            <div style={{ width: "100%" }}>
              <input placeholder="Ne Çalmak İstiyorsun? " className={styles.searchInput}></input>
            </div>
            <div className={styles.searchGIcon}>
              <LuPanelTopClose
                size={24}
                style={{ color: " #656565", padding: "8px" }}
              ></LuPanelTopClose>
            </div>
          </div>
        </div>

        <div className={styles.authWrapper}>
          <div className={styles.regBtn}> Kaydol</div>
          <div className={styles.customButton}>Oturum aç</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
