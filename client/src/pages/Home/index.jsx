import styles from "./Home.module.css";
import Hero from "../../components/Hero";
import ProductSlider from "../../components/ProductSlider";
import CategorySlider from "../../components/CategorySlider";
import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.container}>
        <CategorySlider title={"Categorias"} />
        <ProductSlider title={"Populares"} />
        <Button to={"/search"} width="17vw">
          Ver todos os jogos
        </Button>
      </main>
    </>
  );
}
