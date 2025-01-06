import FooterSection from "./FooterSection";
import styles from "./contentFooter.module.css";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
const ContentFooter = () => {
  const companyLinks = [
    {
      text: "Hakkında",
      href: "https://www.spotify.com/tr-tr/about-us/contact/",
    },
    { text: "Kariyer", href: "https://www.lifeatspotify.com/" },
    { text: "For the Record", href: "https://newsroom.spotify.com/" },
  ];

  const communityLinks = [
    { text: "Sanatçılar İçin", href: "https://artists.spotify.com/" },
    { text: "Geliştiriciler", href: "https://developer.spotify.com/" },
    { text: "Reklam", href: "https://ads.spotify.com/" },
    { text: "Yatırımcılar", href: "https://investors.spotify.com/" },
    { text: "Satıcılar", href: "https://spotifyforvendors.com/" },
  ];

  const usefulLinks = [
    { text: "Destek", href: "https://support.spotify.com/" },
    {
      text: "Ücretsiz Mobil Uygulama",
      href: "https://www.spotify.com/tr-tr/free/",
    },
  ];

  const plansLinks = [
    {
      text: "Premium Bireysel",
      href: "https://www.spotify.com/tr-tr/premium/#ref=spotifycom_footer_premium_individual",
    },
    {
      text: "Premium Duo",
      href: "https://www.spotify.com/tr-tr/duo/#ref=spotifycom_footer_premium_duo",
    },
    {
      text: "Premium Aile",
      href: "https://www.spotify.com/tr-tr/family/#ref=spotifycom_footer_premium_family",
    },
    {
      text: "Premium Öğrenci",
      href: "https://www.spotify.com/tr-tr/student/#ref=spotifycom_footer_premium_student",
    },
    {
      text: "Spotify Free",
      href: "https://www.spotify.com/tr-tr/free/#ref=spotifycom_footer_free",
    },
  ];

  return (
    <div className={styles.contentFooterWrapper}>
      <nav className={styles.contentNav}>
        <div className={styles.contentItems}>
          <div className={styles.footerContent}>
            <FooterSection title="Şirket" links={companyLinks} />
            <FooterSection title="Topluluklar" links={communityLinks} />
            <FooterSection title="Yararlı bağlantılar" links={usefulLinks} />
            <FooterSection title="Spotify Planları" links={plansLinks} />

            <div className={styles.footerSocials}>
              <div className={styles.socialItem}>
                <a href="https://instagram.com/spotify" target="_blank">
                  <FaInstagram
                    style={{ color: "white" }}
                    size={24}
                  ></FaInstagram>
                </a>
              </div>
              <div className={styles.socialItem}>
                <a href="https://twitter.com/spotify" target="_blank">
                  <CiTwitter style={{ color: "white" }} size={24}></CiTwitter>
                </a>
              </div>
              <div className={styles.socialItem}>
                <a href="https://www.facebook.com/Spotify" target="_blank">
                  <FaFacebook style={{ color: "white" }} size={24}></FaFacebook>
                </a>
              </div>
            </div>
          </div>
          <hr className={styles.hr}></hr>
          <div className={styles.footerCopy}>
            <div>
              <div>
                <p>© 2025 Spotify AB</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ContentFooter;
