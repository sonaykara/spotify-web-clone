import ContentHeader from "../../Header/ContentHeader";
import ContentFooter from "../../ContentFoter/ContentFooter";
import styles from "./detail.module.css";
const DetailPage = ({ children }) => {
  const headerTitle = "Popüler Sanatçılar";
  return (
    <div className={styles.detailWrapper}>
      <div className={styles.detailHeadline}>
        <ContentHeader headerTitle={headerTitle}></ContentHeader>
      </div>
      <div className={styles.detailContent}>{children}</div>
      <ContentFooter></ContentFooter>
    </div>
  );
};

export default DetailPage;
