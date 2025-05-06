import { useLocation } from "react-router-dom";
import Bullet from "../../components/Bullet";
import Line from "../../components/Line";
import styles from "./Timeline.module.css";
import data from "../../json/timelineData.json";
import TimelineSection from "../../components/TimelineSection";
import { useEffect, useState } from "react";
import ArrowButton from "../../components/ArrowButton";

export default function Timeline() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.hash);
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  function update(id) {
    window.history.pushState(null, "", `#${id}`);
    setActiveSection(id);
  }

  return (
    <main className={styles.main}>
      <div className={`${styles.arrow} ${styles.up}`}>
        <ArrowButton direction="up" currentHash={activeSection} data={data} />
      </div>
      <section className={styles.tlContainer}>
        {data.map((item) => (
          <TimelineSection
            id={item.id}
            paragraph={item.description}
            title={item.title}
            image={item.image}
            update={update}
            key={item.title + item.id}
          />
        ))}
      </section>
      <div className={`${styles.arrow} ${styles.down}`}>
        <ArrowButton direction="down" currentHash={activeSection} data={data} />
      </div>
      <Line>
        {data.map((item) => (
          <Bullet
            hash={item.id}
            currentHash={activeSection}
            name={item.title}
            key={item.id + item.title}
          />
        ))}
      </Line>
    </main>
  );
}
