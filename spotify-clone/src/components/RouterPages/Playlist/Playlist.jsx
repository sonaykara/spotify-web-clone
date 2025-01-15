import styles from "./playlist.module.css";
import ArtistSubscription from "../../ArtistSubscription/ArtistSubscription";
import MusicList from "../../MusicList/MusicList";
import Card from "../../Card/Card";
import ContentFooter from "../../ContentFoter/ContentFooter";
import FilterButton from "../../FilterButton/FilterButton";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import PlayListNavbar from "./PlayListNavbar/PlayListNavbar";

const Playlist = () => {
  const songs = [
    {
      title: "Biliyorsun",
      views: "98.779.926",
      duration: "5:16",
      avatarUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Bir Şarkı Daha",
      views: "50.321.012",
      duration: "4:45",
      avatarUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Başka Bir Şarkı",
      views: "123.456.789",
      duration: "3:30",
      avatarUrl: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div>
      <div className={styles.playlistWraper}>
        <PlayListNavbar></PlayListNavbar>
        <div className={styles.playlistHead}>
          <div className={styles.playlistImageArea}>
            <img
              className={styles.playlistImage}
              src="https://picsum.photos/200/300"
            ></img>
          </div>
          <div className={styles.playlistHeadLine}>
            <div>
              <div className={styles.artistStatus}>
                <div className={styles.artistStatusIcon}>
                  <span>
                    <TbRosetteDiscountCheckFilled></TbRosetteDiscountCheckFilled>
                  </span>{" "}
                  Doğrulanmış sanatçı
                </div>
              </div>
            </div>
            <div className={styles.artistInfo}>
              <h1>Sezen Aksu</h1>
            </div>
            <div className={styles.playlistListener}>
              <div>Aylık 200.000 dinleyici</div>
            </div>
          </div>
        </div>

        <div className={styles.sectionWrapper}>
          <div className={styles.playlistSubArea}>
            <ArtistSubscription></ArtistSubscription>
          </div>
          <div className={styles.musicListArea}>
            <div className={styles.musicListHeadLine}>Popüler</div>
            <div className={styles.musicList}>
              <MusicList songs={songs}></MusicList>
            </div>
          </div>

          <div className={styles.tile}>
            <div className={styles.tileHeadline}>
              <h2>Diskografi</h2>
              <div>Tümünü Gör</div>
            </div>
            <div className={styles.filterArea}>
              <FilterButton></FilterButton>
            </div>

            <div className={styles.cardArea}>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>

            <ContentFooter></ContentFooter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
