import React, { useState } from "react";
import styles from "./searchpage..module.css";
import SearchTile from "../../SearchPage/SearchTile/SearchTile";
import SearchPlayList from "../../SearchPage/SearchPlaylist/SearchPlayList";
import Card from "../../Card/Card";
import ArtistCard from "../../Artist/ArtistCard";
import ContentFooter from "../../ContentFoter/ContentFooter";
const SearchPage = () => {
  const headList = [
    "Tümü",
    "Şarkılar",
    "Sanatçılar",
    "Çalma Listeleri",
    "Albümler",
    "Podcast'ler",
    "Profiller",
  ];
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (item) => {
    setActiveLink(item);
  };
  return (
    <div className={styles.searchAreaWrapper}>
      <div className={styles.mainViewContainer}>
        <div className={styles.underMainView}>
          <div className={styles.mainViewContainerScroll}>
            <main className={styles.containerWrapper}>
              <div className={styles.headLine}>
                <div className={styles.head}>
                  <div className={styles.headItemsWrapper}>
                    <div className={styles.headItems}>
                      {headList.map((item, index) => (
                        <div
                          key={index}
                          className={`${styles.headItemWrapper} ${
                            activeLink === item ? styles.active : ""
                          }`}
                        >
                          <a
                            href="#"
                            key={index}
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick(item);
                            }}
                            className={styles.headItem}
                          >
                            {item}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.searchAreaSectionFirst}>
                  <SearchTile></SearchTile>
                  <SearchPlayList></SearchPlayList>
                </div>
                <div className={styles.searchAreaSectionSecond}>
                  <h2 className={styles.searchAreaSectionSecondHeadLine}>
                    Karşınızda
                  </h2>
                  <div className={styles.searchAreaSectionSecondContent}>
                    <Card></Card>
                  </div>
                </div>

                <div className={styles.searchAreaSectionThird}>
                  <h2 className={styles.searchAreaSectionThirdHeadLine}>
                    Sanatçılar
                  </h2>
                  <div className={styles.searchAreaSectionSecondContent}>
                    <ArtistCard></ArtistCard>
                  </div>
                </div>
              </div>
              <ContentFooter></ContentFooter>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
