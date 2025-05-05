import { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./Quiz.module.css";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import countdownAudio from "../../audio/countdown.mp3";
import dbQuiz from "../../json/french_revolution_quiz.json";
import Questions from "../../components/Question";

function Quiz() {
  const { id } = useParams();

  const [countdown, setCountdown] = useState(5);
  const countdownH1Ref = useRef(null);
  const countdownRef = useRef(null);
  const audio = new Audio(countdownAudio);
  audio.volume = 0.2;

  useLayoutEffect(() => {
    const countdownH1 = countdownH1Ref.current;
    const countdownElement = countdownRef.current;

    gsap.fromTo(
      countdownH1,
      { scale: 3, opacity: 0 },
      { duration: 5, scale: 1, opacity: 1 }
    );
    gsap.fromTo(
      countdownElement,
      { bottom: 0 },
      { delay: 5, duration: 1.2, bottom: "100vh" }
    );

    return () => {
      gsap.killTweensOf(countdownH1);
      gsap.killTweensOf(countdownElement);
    }
  }, []);

  useEffect(() => {
    audio.play();

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => (clearInterval(interval));
  }, []);

  return (
    <>
      <div ref={countdownRef} className={styles.countdown}>
        <h1 ref={countdownH1Ref}>{countdown}</h1>
      </div>
      <section className={styles.quiz}>
        {<Questions contentArr={dbQuiz[id]["content"]} />}
      </section>
    </>
  );
}

export default Quiz;
