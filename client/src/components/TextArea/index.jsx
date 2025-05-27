import styles from "./TextArea.module.css";

export default function TextArea({ direction, title, content, imgSrc }) {
  direction = direction || "right";

  if (direction === "right") {
    return (
      <section className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p>{content}</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={imgSrc} alt="Image" />
          </div>
        </div>
      </section>
    );
  } else if (direction === "left") {
    return (
      <section className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img src={imgSrc} alt="Image" />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </section>
    );
  }
}
