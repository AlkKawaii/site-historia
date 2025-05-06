import { FaChevronUp } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  const goBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.back} onClick={goBack}>
        <FaChevronUp size={40} />
      </div>
      <div className={styles.footerContent}>
        <h2>Veregeur</h2>
        <p>
          Desenvolvido por Felipe de Matos, Guilherme Meneses e João Vitor -
          2TIB
        </p>
      </div>
    </footer>
  );
}
