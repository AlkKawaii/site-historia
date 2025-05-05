import { useEffect, useState } from "react";
import styles from "./Quiz.module.css";
import { useParams } from "react-router-dom";

function Quiz() {
  const { id } = useParams();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <>
      <div className={styles.countdown}>{countdown}</div>
      <section className={styles.quiz}>
        <h2>Quiz {id}</h2>
      </section>
    </>
  );

}

export default Quiz;
