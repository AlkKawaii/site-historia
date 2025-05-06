import styles from "./BannerSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerSlider() {
  const images = [
    "/img/banner1.jpg",
    "/img/banner2.jpg",
    "/img/banner3.png",
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className={styles.swiper}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`slide-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
