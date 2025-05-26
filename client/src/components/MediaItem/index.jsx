import { useState } from 'react';
import Popup from '../Popup';
import styles from './MediaItem.module.css';
export default function MediaItem({ title, description, media }) {
  const [isOpen, setIsOpen] = useState(false);
  const youtubeID =
    media.includes('youtube') && media.split('v=')[1]?.split('&')[0];
  const treatedMedia = youtubeID
    ? `https://img.youtube.com/vi/${youtubeID}/mqdefault.jpg`
    : media;
  return (
    <>
      {isOpen && (
        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <aside className={styles.popupContent}>
            <h2>{title}</h2>
            {youtubeID ? (
              <iframe
                allowFullScreen
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerpolicy='strict-origin-when-cross-origin'
                title='YouTube video player'
                frameborder='0'
                src={`https://www.youtube.com/embed/${youtubeID}`}></iframe>
            ) : (
              <img src={treatedMedia} alt={title} />
            )}
            <p>{description}</p>
          </aside>
        </Popup>
      )}
      <article className={styles.container} onClick={() => setIsOpen(true)}>
        <img src={treatedMedia} alt={title} />
      </article>
    </>
  );
}
