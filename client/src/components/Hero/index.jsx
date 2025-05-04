import styles from "./Hero.module.css";
import Button from "../Button";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.texts}>
        <h1 className={styles.title}>Clapboard</h1>
        <h2 className={styles.description}>
          Alugue, jogue, se apaixone! A melhor experiência em jogos de
          tabuleiro, sem precisar comprar. Explore, descubra e divirta-se sem
          compromisso!
        </h2>
        <Button to={"/login"} width="17vw">
          Login
        </Button>
      </div>
      <div className={styles.images}>
        <img
          src="/svg/hero.svg"
          alt="Hero image"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.arrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75px"
          height="75px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </div>
    </div>
  );
}
