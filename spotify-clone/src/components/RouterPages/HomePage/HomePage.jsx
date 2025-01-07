import styles from "./homepage.module.css";
import ContentHeader from "../../Header/ContentHeader";
import ArtistCard from "../../Artist/ArtistCard";
import Card from "../../Card/Card";
import ContentFooter from "../../ContentFoter/ContentFooter";

const HomePage = () => {
  const artistHeaderTitle = "Popüler Sanatçılar";
  const artistHeaderContent = "Tümünü Gör";
  const albumsHeaderTitle = "Popüler Albümler";
  const albumsHeaderContent = "Tümünü Gör";
  const radioHeaderTitle = "Popüler Radyolar";
  const radioHeaderContent = "Tümünü Gör";
  const highlightsHeaderTitle = "Öne Çıkanlar Listesi";

  return (
    <section className={styles.homePageWrapper}>
      <div>
        <section>
          <ContentHeader
            headerTitle={artistHeaderTitle}
            headerContent={artistHeaderContent}
          ></ContentHeader>

          <div className={styles.artistGridArea}>
            <ArtistCard></ArtistCard>
          </div>
        </section>

        <section>
          <ContentHeader
            headerTitle={albumsHeaderTitle}
            headerContent={albumsHeaderContent}
          ></ContentHeader>

          <div className={styles.artistGridArea}>
            <Card></Card>
          </div>
        </section>

        <section>
          <ContentHeader
            headerTitle={radioHeaderTitle}
            headerContent={radioHeaderContent}
          ></ContentHeader>

          <div className={styles.artistGridArea}>
            <Card></Card>
          </div>
        </section>

        <section>
          <ContentHeader headerTitle={highlightsHeaderTitle}></ContentHeader>

          <div className={styles.artistGridArea}>
            <Card></Card>
          </div>
        </section>
        <ContentFooter></ContentFooter>
      </div>
    </section>
  );
};

export default HomePage;
