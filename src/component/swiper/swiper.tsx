import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, Grid } from "swiper/modules";

export const MakeSwiper = function ({ swiperList, breakPoints, slidesperView, grid }: any) {
  return (
    <>
      <Swiper
        centeredSlides={true} //가운데 정렬
        spaceBetween={50} //슬라이드간 거리
        loop={true} //슬라이드 반복 여부
        autoplay={{ delay: 5000 }} //자동 슬라이드 시간
        navigation={true}
        pagination={false}
        breakpoints={breakPoints}
        modules={[Pagination, Navigation, Grid]}
      >
        {swiperList.map((v: any) => (
          <SwiperSlide>{v}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
