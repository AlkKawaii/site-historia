import styles from './MediaCarousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import MediaItem from '../MediaItem';

export default function MediaCarousel({ category, data }) {
  return (
    <section key={category} className={styles.category}>
      <h2>{category}</h2>
      <Swiper
        modules={[Navigation, FreeMode]}
        freeMode={true}
        navigation={true}
        slidesPerView='auto'
        spaceBetween={10}
        className={styles.carousel}>
        {data
          .filter((e) => e.categ.some((e) => e === category))
          .map((e) => (
            <SwiperSlide key={e.name} className={styles.slide}>
              <MediaItem media={e.url} description={e.desc} title={e.name} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
