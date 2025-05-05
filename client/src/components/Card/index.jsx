import styles from "./Card.module.css";

function Card({ imgUrl, title, description, textButton, onClick }) {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClick}>{textButton}</button>
    </div>
  );
}

export default Card;
