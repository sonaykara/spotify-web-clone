import { useState, useEffect } from "react";
import styles from "./albumplaylist.module.css";
import ArtistSubscription from "../../ArtistSubscription/ArtistSubscription";
import MusicList from "../../MusicList/MusicList";
import Card from "../../Card/Card";
import ContentFooter from "../../ContentFoter/ContentFooter";
import FilterButton from "../../FilterButton/FilterButton";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import PlayListNavbar from "../ArtistPlaylist/PlayListNavbar/PlayListNavbar";

const Playlist = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);

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

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      setScrollPosition(position);

      setShowNavbar(position > 303);

      const newOpacity = Math.max(1 - position / 200, 0);
      setImageOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`${styles.fixedNavbar} ${showNavbar ? styles.visible : ""}`}
      >
        <PlayListNavbar />
      </div>

      <div className={styles.AlbumPlaylistWraper}>
        <div className={styles.AlbumPlaylistHead}>
          <div className={styles.AlbumPlaylistImageArea}>
            <img
              className={styles.AlbumPlaylistImage}
              style={{ opacity: imageOpacity }}
              src="https://picsum.photos/200/300"
              alt="Playlist"
            />
          </div>
          <div className={styles.AlbumPlaylistHeadLine}>
            <div>
              <div className={styles.AlbumArtistStatus}>
                <div className={styles.AlbumArtistStatusIcon}>
                  <span>
                    <TbRosetteDiscountCheckFilled />
                  </span>{" "}
                  Albüm
                </div>
              </div>
            </div>
            <div className={styles.AlbumArtistInfo}>
              <h1>OBSESIF</h1>
            </div>
            <div className={styles.AlbumPlaylistListener}>
              <div>BLOK3 2424 12 12 şarkı</div>
            </div>
          </div>
        </div>

        <div className={styles.AlbumSectionWrapper}>
          <div className={styles.AlbumPlaylistSubArea}>
            <ArtistSubscription />
          </div>
          <div className={styles.AlbumMusicListArea}>
            <div className={styles.AlbumMusicListHeadLine}>Popüler</div>
            <div className={styles.AlbumMusicList}>
              <MusicList songs={songs} />
            </div>
          </div>

          <div className={styles.AlbumTile}>
            <div className={styles.AlbumTileHeadline}>
              <h2>Diskografi</h2>
              <div>Tümünü Gör</div>
            </div>
            <div className={styles.AlbumFilterArea}>
              <FilterButton />
            </div>
            <div className={styles.AlbumCardArea}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

            <ContentFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
