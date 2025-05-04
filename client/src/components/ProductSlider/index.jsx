import styles from './Slider.module.css';
import ProductCard from '../ProductCard';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import db from '../../json/db.json';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductSlider({ title }) {
    const swiperRef = useRef(null);

    const priceFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <div className={styles.outerContainer}>
            <h2 className={styles.sliderTitle}>{title}</h2>
            <div className={styles.innerContainer}>
                <button
                    onClick={() => swiperRef.current?.swiper?.slidePrev()}
                    className={styles.customPrev}>
                    <IoChevronBack />
                </button>
                <button
                    onClick={() => swiperRef.current?.swiper?.slideNext()}
                    className={styles.customNext}>
                    <IoChevronForward />
                </button>

                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    slidesPerView={4}
                    spaceBetween={1}
                    loop={true}
                    navigation={false}>
                    {db
                        .filter((product) => product.averageRating > 8)
                        .map((product) => (
                            <SwiperSlide
                                key={product.gameId}
                                className={styles.slide}>
                                <ProductCard
                                    productID={product.gameId}
                                    productTitle={product.name}
                                    productPrice={priceFormatter.format(
                                        product.rentalPrice
                                    )}
                                    productThumbnail={product.image}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}
