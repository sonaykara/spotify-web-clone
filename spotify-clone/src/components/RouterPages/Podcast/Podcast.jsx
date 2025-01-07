import CatagoryCard from "../../catagories/CatagoryCard";
import ContentFooter from "../../ContentFoter/ContentFooter";
import styles from "./podcast.module.css";
import { IoIosArrowForward } from "react-icons/io";

const Podcast = () => {
  return (
    <main className={styles.podcast}>
      <div className={styles.headLineWrapper}>
        <div className={styles.headlineArea}>
          <div className={styles.heeadLineItem}>
            <div className={styles.headLineTextArea}>
              <span className={styles.headLineTextItem}>
                <h1 className={styles.headLineText}>Podcast'ler</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionBefore}></div>
        <div className={styles.sectionArea}>
          <div className={styles.section}>
            <section className={styles.sectionItems}>
              <div className={styles.secitonHeadLine}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadTextArea}>
                    <div className={styles.textAreaItems}>
                      <h2 className={styles.secitonText}>
                        <span>Katagoriler</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sectionContent}>
                <CatagoryCard></CatagoryCard>
              </div>
            </section>

            <div className={styles.sectionFooter}>
              <a href="/genre/0JQ5DArNBzkmxXHCqFLx2U">
                <button className={styles.footerButton}>
                  <span className={styles.footerTextArea}>
                    <span className={styles.footerText}>
                      Kategorilerin tümünü gör
                    </span>
                    <IoIosArrowForward></IoIosArrowForward>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContentFooter></ContentFooter>
    </main>
  );
};

export default Podcast;
