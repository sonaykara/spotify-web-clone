import styles from "./musiclist.module.css";
import { BiPlusCircle } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { AiOutlineEllipsis } from "react-icons/ai";

const MusicList = ({ songs }) => {
  return (
    <ol className={styles.musicList}>
      {songs.map((song, index) => (
        <li key={index} className={styles.musicItem}>
          <div className={styles.songInfo}>
            <div className={styles.listNumber}>
              <div className={styles.listNumberItem}></div>
              {index}
              <div className={styles.listPlayİcon}>
                <FaPlay></FaPlay>
              </div>
            </div>

            <img src={song.avatarUrl} />
            <span className={styles.title}>{song.title}</span>
          </div>
          <div className={styles.songViews}>{song.views}</div>
          <div className={styles.songDurationArea}>
            <div className={styles.iconArea}>
              <BiPlusCircle></BiPlusCircle>
            </div>
            <div className={styles.songDuration}>{song.duration}</div>
            <div className={styles.iconArea}>
              {" "}
              <AiOutlineEllipsis color="white"></AiOutlineEllipsis>{" "}
            </div>
          </div>
        </li>
      ))}
      <div className={styles.musicListFooter}>see more</div>
    </ol>
  );
};

export default MusicList;
