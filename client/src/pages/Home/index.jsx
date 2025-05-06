import styles from "./Home.module.css";
import TextArea from "../../components/TextArea";
import SmallTextArea from "../../components/SmallTextArea";
import BannerSlider from "../../components/BannerSlider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <BannerSlider />
        <div className={styles.textAreaContainer}>
          <TextArea
            title="Descubra a Revolução que mudou o mundo"
            content="A Revolução Francesa não foi apenas um momento da história da França — ela redefiniu o conceito de liberdade e justiça no mundo inteiro. Entre 1789 e 1799, o povo francês desafiou séculos de opressão e deu início a uma nova era. Conheça os ideais, os conflitos e os personagens por trás do levante que abalou a monarquia e inspirou gerações."
            imgSrc="../public/img/home-image1.jpg"
          />
          <TextArea
            direction="left"
            title="Por que estudar a Revolução Francesa hoje?"
            content="Mais do que um capítulo nos livros de história, a Revolução Francesa é um espelho para entender lutas sociais, participação política e os fundamentos da democracia moderna. Compreender seus eventos ajuda a enxergar as raízes de muitos debates atuais sobre direitos, poder e cidadania. Explore os acontecimentos, entenda os impactos e inspire-se com as vozes que marcaram esse período transformador."
            imgSrc="../public/img/home-image2.jpg"
          />
        </div>
        <SmallTextArea
          button="true"
          buttonWidth="16vw"
          title="Quer saber mais? Faça login e se junte a nós!"
          content="Quer mergulhar de verdade na história? Com uma conta gratuita, você pode salvar seus conteúdos favoritos, acessar uma linha do tempo interativa e fazer quizzes sobre os eventos. É a melhor maneira de aprender e se divertir ao mesmo tempo! Não perca tempo, faça login agora!"
        />
      </main>
      <Footer />
    </>
  );
}
