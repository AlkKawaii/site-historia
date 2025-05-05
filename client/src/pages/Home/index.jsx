import styles from "./Home.module.css";
import Hero from "../../components/Hero";
import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.container}>
        <Button to={"/search"} width="17vw">
          Ver todos os jogos
        </Button>
      </main>
    </>
  );
}
