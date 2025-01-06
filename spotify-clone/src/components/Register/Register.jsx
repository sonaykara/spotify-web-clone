import styles from "./register.module.css";
import { FaFacebook } from "react-icons/fa6";
import { GrSpotify } from "react-icons/gr";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaApple } from "react-icons/fa";

const Register = () => {
  return (
    <div className={styles.registerWrapper}>
      <div className={styles.registerArea}>
        <div className={styles.registerHeadLineArea}>
          <div className={styles.registerHeadLineİconArea}>
            <GrSpotify size={36} style={{ color: "white" }}></GrSpotify>
          </div>
        </div>
        <h1 className={styles.registerHeadLineText}>Spotify'da oturum aç</h1>
        <ul className={styles.registerLoginWrapper}>
          <li>
            <button className={styles.registerButton}>
              <div className={styles.registerIcon}>
                <AiOutlineGoogle size={32}></AiOutlineGoogle>
              </div>
              <span>Google ile devam et</span>
            </button>
          </li>
          <li>
            <button className={styles.registerButton}>
              <div className={styles.registerIcon}>
                <FaFacebook size={32}></FaFacebook>
              </div>
              <span>Facebook ile devam et</span>
            </button>
          </li>
          <li>
            <button className={styles.registerButton}>
              <div className={styles.registerIcon}>
                <FaApple size={32}></FaApple>
              </div>
              <span>Apple ile devam et</span>
            </button>
          </li>
        </ul>
        <hr className={styles.registerHr} />
        <div className={styles.userLoginAreaWrapper}>
          <div className={styles.userLoginİnputArea}>
            <div className={styles.userLoginInputitem}>
              <div className={styles.inputHeadLine}>
                <label className={styles.inputHeadLineItem} htmlFor="username">
                  E-posta adresi veya kullanıcı adı
                </label>
              </div>
              <input
                className={styles.registerInput}
                id="username"
                aria-invalid="false"
                placeholder="E-posta adresi veya kullanıcı adı"
                autoCapitalize="off"
                autoComplete="username"
                spellCheck="false"
                autoCorrect="off"
                aria-describedby="username-error"
                value=""
              />
            </div>

            <div className={styles.userLoginInputitem}>
              <div className={styles.inputHeadLine}>
                <label className={styles.inputHeadLineItem} htmlFor="password">
                  Parola
                </label>
                <input
                  className={styles.registerInput}
                  id="password"
                  aria-invalid="false"
                  type="password"
                  placeholder="Parola"
                  autoComplete="current-password"
                  spellCheck="false"
                  autoCorrect="off"
                  autoCapitalize="off"
                />

                <div className={styles.inputIconArea}>
                  <button className={styles.registerButton}></button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.singUpButonWrapper}>
            <button className={styles.singUpButton}>
              <span>Oturum Aç</span>
            </button>
          </div>

          <div className={styles.passwordAuthArea}>
            <a href="#">
              <p>Parolanı mı unuttun?</p>
            </a>
          </div>
        </div>

        <div className={styles.registerAuthArea}>
          <h2>
            <span>Hesabın yok mu?</span>
            <a href="#">
              <span>Spotify için kaydol</span>
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
