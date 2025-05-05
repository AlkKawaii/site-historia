import { useNavigate } from "react-router-dom";
import styles from "./Quizzes.module.css";
import Header from "../../components/Header";
import quizzesBd from "../../json/french_revolution_quiz.json";
import Card from "../../components/Card";

function Quizzes() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className={styles.quizzes}>
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
    </>
  );
}

export default Quizzes;
