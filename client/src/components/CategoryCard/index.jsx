import styles from "./CategoryCard.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ categoryTitle, categoryImage }) {
  function replaceSpaces(str) {
    return str.replace(/ /g, "+");
  }
  return (
    <Link to={`/search?category=${replaceSpaces(categoryTitle)}`}>
      <article
        className={styles.card}
        style={{ backgroundImage: `url(${categoryImage})` }}
      >
        <h2>{categoryTitle}</h2>
      </article>
    </Link>
  );
}
