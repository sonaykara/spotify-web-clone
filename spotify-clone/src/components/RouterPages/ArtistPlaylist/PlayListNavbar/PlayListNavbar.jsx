import { IoMdPlayCircle } from "react-icons/io";
import styles from "./navbar.module.css";

const PlayListNavbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div>
        <div className={styles.playButton}>
          <IoMdPlayCircle
            size={56}
            className={styles.iconPlay}
          ></IoMdPlayCircle>
        </div>
      </div>

      <h1>Sezen Aksu</h1>
    </div>
  );
};

export default PlayListNavbar;
