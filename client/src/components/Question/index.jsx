import { useCallback, useEffect, useState } from "react";
import styles from "./Questions.module.css";
import Popup from "../Popup";

function Questions({ contentArr }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleTimeout = useCallback(() => {
    setPoints((prevPoints) => prevPoints - 1);
    if (currentQuestion < contentArr.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimeLeft(30);
    } else {
      setQuizFinished(true); 
    }
  }, [currentQuestion, contentArr.length]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, handleTimeout]);

  const handleQuestions = (e) => {
    if (e.target.innerText === contentArr[currentQuestion].answer) {
      setPoints((prevPoints) => prevPoints + 1);
    } else {
      setPoints((prevPoints) => prevPoints - 1);
    }
    if (currentQuestion < contentArr.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimeLeft(30);
    } else {
      setQuizFinished(true); 
    }
  };

  if (quizFinished) {
    return (
      <Popup>
        <h2>Sua pontuação final: {points}</h2>
      </Popup>
    );
  }

  return (
    <div className={styles.quizBox}>
      <h2>{contentArr[currentQuestion].question}</h2>
      <img src="https://fibranetbrasil.com.br/images/duvidas.png" alt="" />
      <h3>
        Tempo restante: <strong>{timeLeft}</strong>
      </h3>
      <div className={styles.question}>
        {contentArr[currentQuestion].options.map((question, index) => {
          return (
            <button key={index} onClick={handleQuestions}>
              {question}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
