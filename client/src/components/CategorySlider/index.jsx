import styles from "./CategorySlider.module.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryCard from "../CategoryCard";

export default function CategorySlider({ title }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const categories = [
    {
      category: "Party Game",
      image:
        "https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAzNTM4MzA2MDc4NjE1MzQ4/adult-party-games.jpg",
    },
    {
      category: "Estratégia",
      image:
        "https://images.squarespace-cdn.com/content/v1/5fae7ee3a079b0732627205c/d48c7b23-6263-4895-9f24-c8f07dc5dceb/karthik-balakrishnan-NrS53eUKgiE-unsplash.jpg",
    },
    {
      category: "Familiar",
      image:
        "https://media.istockphoto.com/id/1286003631/photo/cheerful-parents-playing-board-game-with-their-children.jpg?s=612x612&w=0&k=20&c=8tcPKFTiBIxFLpJPZcMSA3PP0i63D_Xvz_Ar8u9lJKM=",
    },
    {
      category: "Construção e Economia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGrvVwU-OS0MnF_4mqMwy8JdzWFNMQSQpIA&s",
    },
    {
      category: "Aventura",
      image:
        "https://blacknerdproblems.com/wp-content/uploads/2018/02/ZeroCharisma.jpg",
    },
    {
      category: "Cartas",
      image:
        "https://thumbs.dreamstime.com/b/hand-holding-two-playing-cards-king-ace-them-green-table-other-poker-chips-341796848.jpg",
    },
    {
      category: "Sci-fi e Fantasia",
      image:
        "https://lh6.googleusercontent.com/proxy/QRFehF4s4fCN3LZJp6l8uxs0ugviuRSnTGL_p0qndmUaZHjyFZv-48G1SCCSMJ3hKFHqAlk2pyCyJe45s4IqmsmoSupQl5zPw5fLipGP_X5WBn01GrZv8suOx_hy8ONoxPt9FbuM3ikvDYE2_mz7csbm57qAQICHhSwDeG0RcZT1wbretcAHilG_ixc",
    },
    {
      category: "Guerra e Conflito",
      image:
        "https://theboardgameschronicle.com/wp-content/uploads/2018/11/72c8e-tgw_scenario_51d.jpg",
    },
    {
      category: "Temático",
      image:
        "https://cdn.shopify.com/s/files/1/1402/8033/files/Villainous_1024x1024.jpg?v=1616495331",
    },
    {
      category: "Cooperativo",
      image:
        "https://images.stockcake.com/public/7/6/7/767a0565-469b-4c8c-b014-209a569adb4f_large/friends-playing-game-stockcake.jpg",
    },
  ];
  return (
    <div className={styles.outerContainer}>
      <h2 className={styles.sliderTitle}>{title}</h2>
      <div className={styles.innerContainer}>
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className={styles.customPrev}
        >
          <IoChevronBack />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className={styles.customNext}
        >
          <IoChevronForward />
        </button>

        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={1}
          loop={true}
          navigation={false}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <CategoryCard
                categoryTitle={category.category}
                categoryImage={category.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
