import styles from "./contentFooter.module.css";

const FooterSection = ({ title, links }) => {
  return (
    <div className={styles.footerSectionWrapper}>
      <ul className={styles.contentItem}>
        <p>{title}</p>
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank">
            <span>{link.text}</span>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
