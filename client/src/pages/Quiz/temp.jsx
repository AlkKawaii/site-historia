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
    const timeline = useRef(
      gsap.timeline({
        paused: true,
        defaults: { duration: 1, ease: "power2.out" }
      })
    );

    useLayoutEffect(() => {
      timeline.current
        .to(countdownH1Ref.current, {
          scale: 1.5,
          opacity: 0
        })
        .to(countdownH1Ref.current, {
          scale: 1,
          opacity: 1
        })
        .to(countdownRef.current, {
          top: "-100vh",
          y: -50
        });

      return timeline.current.kill();
    }, []);

  useEffect(() => {
    const countdownSound = new Audio(countdownAudio);
    countdownSound.volume = 0.5;
    countdownSound.play();

    timeline.current.play();

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
      <div ref={countdownRef} className={styles.countdown}>
        <h1 ref={countdownH1Ref}>{countdown}</h1>
      </div>
      <section className={styles.quiz}>
        {<Questions contentArr={dbQuiz[id]["content"]} />}
      </section>
    </>
  );
}
