import { useEffect } from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  useEffect(() => {
    const audio = new Audio('/audios/videoplayback.weba');
    audio.loop = true;

    const playAudio = () => {
      if (audio.paused) {
        audio.play();
      }
    };

    window.addEventListener('click', playAudio);

    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h2>ClapBoard</h2>
        <p>Siga-nos!</p>
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
        <p>
          <FaPhone /> +55 99 9999-9999
        </p>
        <p>
          <FaWhatsapp /> +55 99 9999-9999
        </p>
        <p>
          <a href="https://www.clapboard.com">www.clapboard.com</a>
        </p>
      </div>

      <div className={styles.center}></div>

      <div className={styles.right}></div>
    </footer>
  );
}
