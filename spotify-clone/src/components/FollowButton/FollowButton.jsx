import { useState } from 'react';
import styles from "./followbutton.module.css"
const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      className={styles.followButton}
      onClick={() => setIsFollowing(!isFollowing)}
    >
      {isFollowing ? 'Takip Ediliyor' : 'Takip Et'}
    </button>
  );
};

export default FollowButton;
