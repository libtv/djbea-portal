import { MakeSwiper } from "../../../../component/swiper/swiper";
import "./home-section-10.css";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function HomeSection10() {
  useEffect(() => {
    aos.init();
  }, []);

  let test_div = (
    <div className="card-wrap">
      <h1 className="card-h1">부산시보</h1>
      <h3 className="card-h3">간편하게 예약하세요.</h3>
    </div>
  );

  let test_div2 = (
    <div className="multi-card">
      <div className="card-wrap" style={{ minHeight: "400px" }}>
        <h1 className="card-h1">부산시보</h1>
        <h3 className="card-h3">간편하게 예약하세요.</h3>
      </div>

      <div className="card-wrap" style={{ minHeight: "400px" }}>
        <h1 className="card-h1">부산시보</h1>
        <h3 className="card-h3">간편하게 예약하세요.</h3>
      </div>
    </div>
  );

  let swiper_list = [test_div, test_div, test_div, test_div, test_div, test_div, test_div, test_div, test_div, test_div, test_div, test_div];
  let swiper_list2 = [test_div2, test_div2, test_div2, test_div2, test_div2, test_div2, test_div2, test_div2, test_div2, test_div2, test_div2, test_div2];

  let break_point_one = {
    320: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 2,
    },
  };

  let break_point_two = {
    320: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 1,
    },
  };

  let break_point_three = {
    320: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  };

  return (
    <div className="section-10" data-aos="fade-up" data-aos-duration="2000">
      <div className="wrap">
        <h2 className="title">알림</h2>
        <div className="notice ">
          <div className="notice-title">
            <h3 className="se-h3">공지사항</h3>
            <span className="inform-btn">
              <b className="txt">go</b>
            </span>
          </div>
          <MakeSwiper swiperList={swiper_list} breakPoints={break_point_one}></MakeSwiper>
        </div>

        <div className="inline">
          <div className="notice padding-top-20px notice-float float-left">
            <div className="notice-title">
              <h3 className="se-h3">공시공고</h3>
              <span className="inform-btn">
                <b className="txt">go</b>
              </span>
            </div>
            <MakeSwiper swiperList={swiper_list} breakPoints={break_point_two}></MakeSwiper>
          </div>

          <div className="notice padding-top-20px notice-float float-left">
            <div className="notice-title">
              <h3 className="se-h3">채용공고</h3>
              <span className="inform-btn">
                <b className="txt">go</b>
              </span>
            </div>
            <MakeSwiper swiperList={swiper_list} breakPoints={break_point_two}></MakeSwiper>
          </div>

          <div className="notice padding-top-20px notice-float float-left">
            <div className="notice-title">
              <h3 className="se-h3">시험공고</h3>
              <span className="inform-btn">
                <b className="txt">go</b>
              </span>
            </div>
            <MakeSwiper swiperList={swiper_list} breakPoints={break_point_two}></MakeSwiper>
          </div>
        </div>

        <div className="notice ">
          <div className="notice-title">
            <h3 className="se-h3">지원사업</h3>
            <span className="inform-btn">
              <b className="txt">go</b>
            </span>
          </div>
          <MakeSwiper swiperList={swiper_list2} breakPoints={break_point_three}></MakeSwiper>
        </div>
      </div>
    </div>
  );
}
