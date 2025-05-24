import styles from "./Biographies.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BiographyData from "../../json/biographyData.json";
import BiographySect from "../../components/BiographySect";

export default function Biographies() {
  return (
    <>
      <Header />
      <main>
        <h2 className={styles.titles}>Biografias</h2>
        <div className={styles.Biographies}>
          {BiographyData["characters"].map((character, index) => (
            <BiographySect
              key={index}
              imgBiography={character.images[0]}
              name={character.name}
              biographyText={character.long_description}
              birth_date={character.birth}
              death_date={character.death}
              references_arr={character.references}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
