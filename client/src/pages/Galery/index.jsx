import MediaCarousel from '../../components/MediaCarousel';
import styles from './Galery.module.css';
import db from '../../json/revolucao_francesa_midia.json';
import Footer from '../../components/Footer';
export default function Galery() {
  const categories = db.reduce((acc, item) => {
    item.categ.forEach((cat) => {
      if (!acc.includes(cat)) {
        acc.push(cat);
      }
    });
    return acc;
  }, []);

  return (
    <main className={styles.container}>
      <h1>Galeria</h1>
      {categories.map((category) => (
        <MediaCarousel key={category} category={category} data={db} />
      ))}
      <Footer />
    </main>
  );
}
