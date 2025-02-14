import dreamImg from "../../../../style/image/home/main_dream.png";
import testImg1 from "../../../../style/image/home/20250124021859927.jpg";
import "../../../../style/css/home/section/01/home.section-01.css";

export function HomeSection01() {
  return (
    <div className="section-01">
      <div className="section-01-dream">
        <img src={dreamImg} alt="" />
      </div>
      <div className="section-01-srh">
        <div className="srh-total"></div>
        <div className="srh-recom">
          <strong>추천검색어</strong>
          <ul className="recom-list">
            <li>
              <a href="https://search.daejeon.go.kr/RSA/front/Search.jsp?menu=통합검색&amp;qt=대전트램" target="_blank">
                <i>#대전트램</i>
              </a>
            </li>
            <li>
              <a href="https://search.daejeon.go.kr/RSA/front/Search.jsp?menu=통합검색&amp;qt=OK예약서비스" target="_blank">
                <i>#OK예약서비스</i>
              </a>
            </li>
            <li>
              <a href="https://search.daejeon.go.kr/RSA/front/Search.jsp?menu=통합검색&amp;qt=대전예술의전당" target="_blank">
                <i>#대전예술의전당</i>
              </a>
            </li>
            <li>
              <a href="https://search.daejeon.go.kr/RSA/front/Search.jsp?menu=통합검색&amp;qt=대전시립연정국악원" target="_blank">
                <i>#대전시립연정국악원</i>
              </a>
            </li>
            <li>
              <a href="https://search.daejeon.go.kr/RSA/front/Search.jsp?menu=통합검색&amp;qt=한밭수목원" target="_blank">
                <i>#한밭수목원</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="srh-visual">
        <div className="swiper-box">
          <img src={testImg1} alt="" />
        </div>
        <div className="srh-news"></div>
      </div>
    </div>
  );
}
