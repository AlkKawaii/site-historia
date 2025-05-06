import { useNavigate } from "react-router-dom";
import styles from "./Quizzes.module.css";
import Header from "../../components/Header";
import quizzesBd from "../../json/french_revolution_quiz.json";
import Card from "../../components/Card";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Footer from "../../components/Footer";

function Quizzes() {
  const navigate = useNavigate();
  const sectioncardRef = useRef(null);

  useLayoutEffect(() => {
    const sectionscard = sectioncardRef.current;

    gsap.fromTo(
      sectionscard,
      { opacity: 0, bottom: 500 },
      { opacity: 1, bottom: 0, duration: 1, ease: "power2.out" }
    );

    return () => {
      gsap.killTweensOf(sectionscard);
    };
  }, []);
  return (
    <>
      <Header />
      <section ref={sectioncardRef} className={styles.quizzes}>
        {quizzesBd.map((element) => {
          return (
            <Card
              description={element.short_description}
              title={element.quiz_name}
              imgUrl={element.quiz_image_url}
              textButton={"Jogar"}
              onClick={() => navigate(`/quiz/${element.id}`)}
              key={element.id}
            />
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default Quizzes;
