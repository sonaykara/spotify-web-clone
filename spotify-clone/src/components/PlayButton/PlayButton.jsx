import { IoMdPlayCircle } from "react-icons/io";
import styles from "./playbutton.module.css";
const PlayButton = () => {
  return (
    <div className={styles.playButton}>
      <IoMdPlayCircle className={styles.iconPlay}></IoMdPlayCircle>
    </div>
  );
};

export default PlayButton;
