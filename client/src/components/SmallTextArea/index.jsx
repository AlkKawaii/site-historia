import styles from "./SmallTextArea.module.css";
import Button from "../../components/Button";

export default function SmallTextArea({ button, buttonWidth, title, content }) {
  const buttonComponent = button && (
    <Button to="/login" width={buttonWidth}>
      Login
    </Button>
  );

  return (
    <section className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        {buttonComponent}
      </div>
    </section>
  );
}
