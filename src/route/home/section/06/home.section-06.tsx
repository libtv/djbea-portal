import "../../../../style/css/home/section/06/home.section-06.css";
import banner from "../../../../style/image/home/banner1.png";

export function HomeSection06() {
  return (
    <div className="section-06">
      <div className="bottom-top">
        <h3>
          <i>맞춤정책검색</i>
        </h3>
        <div className="search-form">
          <input type="text" />
          <button type="button">
            <i>검색</i>
          </button>
        </div>
        <a className="alive-policy" href="#">
          <span>신청 가능한 정책</span>
          <strong>
            <i>9</i>건
          </strong>
        </a>
      </div>
      <div className="bottom-content">
        <div className="visual_slide">
          <img src={banner} alt="" />
        </div>
        <div className="real_rank">
          <h3>
            <span>실시간</span>
            <i>청년정책 순위</i>
          </h3>
          <ol>
            <li>
              <a href="/content/CT_000000000271/cntPage.do?commonMenuNo=36_71&amp;dpmSectionFst=1&amp;dpmSectionScd=7">
                <strong>1</strong>
                <span>청년도전 지원사업</span>
              </a>
            </li>

            <li>
              <a href="/content/CT_000000000070/cntPage.do?commonMenuNo=79_92&amp;dpmSectionFst=2&amp;dpmSectionScd=10">
                <strong>2</strong>
                <span>대학생 아르바이트</span>
              </a>
            </li>

            <li>
              <a href="/content/CT_000000000062/cntPage.do?commonMenuNo=79_80&amp;dpmSectionFst=2&amp;dpmSectionScd=9">
                <strong>3</strong>
                <span>청년월세 특별지원</span>
              </a>
            </li>

            <li>
              <a href="/content/CT_000000000061/cntPage.do?commonMenuNo=79_80&amp;dpmSectionFst=2&amp;dpmSectionScd=9">
                <strong>4</strong>
                <span>대전청년 월세지원</span>
              </a>
            </li>

            <li>
              <a href="/content/CT_000000000068/cntPage.do?commonMenuNo=36_281&amp;dpmSectionFst=1&amp;dpmSectionScd=8">
                <strong>5</strong>
                <span>대학생학자금 이자 지원</span>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
