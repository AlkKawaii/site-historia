import { useCallback, useEffect, useState } from "react";
import styles from "./Questions.module.css";
import Popup from "../Popup";

function Questions({ contentArr }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);

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
      setRightAnswers((prevRightAnswers) => [
        ...prevRightAnswers,
        {
          question: contentArr[currentQuestion].question,
          position: currentQuestion,
        },
      ]);
    } else {
      setPoints((prevPoints) => prevPoints - 1);
      setWrongAnswers((prevWrongAnswers) => [
        ...prevWrongAnswers,
        {
          question: contentArr[currentQuestion].question,
          position: currentQuestion,
        },
      ]);
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
        <h2>Pontuação final: {points}</h2>
        <h2>Respostas erradas: </h2>
        {wrongAnswers.map((wrongAnswer) => (
          <div key={wrongAnswer.position} className={styles.wrongAnswer}>
            <p>❌ - {wrongAnswer.question}</p>
          </div>
        ))}
        <h2>Respostas certas: </h2>
        {rightAnswers.map((rightAnswer) => (
          <div key={rightAnswer.position} className={styles.rightAnswer}>
            <p>✅ - {rightAnswer.question}</p>
          </div>
        ))}
      </Popup>
    );
  }

  return (
    <div className={styles.quizBox}>
      <h2>
        {currentQuestion + 1} - {contentArr[currentQuestion].question}
      </h2>
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
