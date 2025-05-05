import styles from "./Card.module.css";
import Button from "../Button";

function Card({ imgUrl, title, description, textButton, onClick }) {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button onClick={onClick}>{textButton}</Button>
    </div>
  );
}

export default Card;
