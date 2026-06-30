import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

function Carousel({ items = [], renderItem }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.navLeft} ref={prevRef}>
        <LeftNav />
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          900: { slidesPerView: 3.2 },
          1200: { slidesPerView: 4 },
        }}
      >
        {items.map((it) => (
          <SwiperSlide key={it.id || it.key} className={styles.slide}>
            {renderItem(it)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navRight} ref={nextRef}>
        <RightNav />
      </div>
    </div>
  );
}

export default Carousel;
