import { useEffect, useRef, useState } from 'react';
import styles from './TimelineSection.module.css';
import Button from '../Button';

export default function TimelineSection({
  id,
  update,
  title,
  paragraph,
  image,
}) {
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);
  const utteranceRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => update(id), 100);
            sectionRef.current.classList.add(styles.active);
          } else {
            sectionRef.current.classList.remove(styles.active);
            if (isSpeaking) {
              window.speechSynthesis.cancel();
              setIsSpeaking(false);
              setIsPaused(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutRef.current);
    };
  }, [id, update, isSpeaking]);

  function handleTTS() {
    if (!window.speechSynthesis) {
      alert('O navegador não suporta texto para voz.');
      return;
    }
    if (isSpeaking) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    } else {
      const utterance = new SpeechSynthesisUtterance(paragraph);
      utterance.lang = 'fr-FR';
      utterance.rate = 1.5;
      utterance.pitch = 1;
      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  }

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container} ref={sectionRef}>
        <div className={styles.content}>
          <div className={styles.upper}>
            <div>
              <h2>{title}</h2>
              <Button height='2.5em' width='33%' onClick={handleTTS}>
                {isSpeaking ? (isPaused ? '▶' : '⏸') : 'TTS'}
              </Button>
            </div>
            <p>{paragraph}</p>
            <p className={styles.linkToMap}>
              Encaminhar para o mapa:
              <Button height='2.5em' to={`/map#${id}`}>
                Mapa
              </Button>
            </p>
          </div>
          <img src={image} alt={`Imagem ${title}`} />
        </div>
      </div>
    </section>
  );
}
