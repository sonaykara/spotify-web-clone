import FollowButton from "../FollowButton/FollowButton";
import styles from "./ArtistSubscription.module.css";
import { IoMdPlayCircle } from "react-icons/io";
import { AiOutlineEllipsis } from "react-icons/ai";

const ArtistSubscription = () => {
  return (
    <div className={styles.artistSubscriptionWrapper}>
      <div className={styles.artistSubscriptionPlayButton}>
        <div className={styles.playButton}>
          <IoMdPlayCircle
            size={56}
            className={styles.iconPlay}
          ></IoMdPlayCircle>
        </div>
      </div>
      <div className={styles.artistSubscriptionFollowButton}>
        <FollowButton></FollowButton>
      </div>

      <div className={styles.artistSubscriptionIcon}>
        <AiOutlineEllipsis></AiOutlineEllipsis>
      </div>
    </div>
  );
};

export default ArtistSubscription;
