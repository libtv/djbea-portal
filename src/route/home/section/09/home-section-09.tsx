import "./home-section-09.css";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function HomeSection09() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div className="section-09" data-aos="fade-up" data-aos-duration="2000">
      <div className="wrap">
        <h2 className="title">안내</h2>
      </div>

      <div className="content-section wrap">
        <div className="card-wrap">
          <h1 className="card-h1">부산시보</h1>
          <h3 className="card-h3">간편하게 예약하세요.</h3>
        </div>
        <div className="card-wrap">
          <h1 className="card-h1">부산시보</h1>
          <h3 className="card-h3">간편하게 예약하세요.</h3>
        </div>
        <div className="card-wrap">
          <h1 className="card-h1">부산시보</h1>
          <h3 className="card-h3">간편하게 예약하세요.</h3>
        </div>
        <div className="card-wrap">
          <h1 className="card-h1">부산시보</h1>
          <h3 className="card-h3">
            간편하게 예약하세요.
            <br />
            간편하게 예약하세요.
            <br />
            간편하게 예약하세요.
            <br />
            간편하게 예약하세요.
            <br />
            간편하게 예약하세요.
            <br />
            간편하게 예약하세요.
            <br />
            간편하게 예약하세요.``
            <br />
          </h3>
        </div>
      </div>

      <ul className="support-project">
        <li>
          <i className="icon ico-economic"></i>
          <span>일자리지원</span>
        </li>
        <li>
          <i className="icon ico-economic"></i>
          <span>중소기업지원</span>
        </li>
        <li>
          <i className="icon ico-economic"></i>
          <span>소상공인지원</span>
        </li>
        <li>
          <i className="icon ico-economic"></i>
          <span>창업지원</span>
        </li>
        <li>
          <i className="icon ico-economic"></i>
          <span>마케팅지원</span>
        </li>
      </ul>
    </div>
  );
}
