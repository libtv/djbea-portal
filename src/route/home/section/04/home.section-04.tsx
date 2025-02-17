import "../../../../style/css/home/section/04/home.section-04.css";

export function HomeSection04() {
  return (
    <div className="section-04">
      <div className="wrap-tit">
        <h4 className="tit">분야별 서비스</h4>
        <span>대전시의 다양한 서비스를 분야별로 제공해 드립니다.</span>
      </div>
      <div className="wrap-filed">
        <ul className="field-tab">
          <li className="is-current">
            <a href="javascript:void(0);" data-id="service0">
              <i>전체</i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" data-id="service1">
              <i>일자리 지원</i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" data-id="service2">
              <i>중소기업 지원</i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" data-id="service3">
              <i>소상공인 지원</i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" data-id="service4">
              <i>창업 지원</i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" data-id="service5">
              <i>국내·외 마케팅 지원</i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" data-id="service6">
              <i>기타</i>
            </a>
          </li>
        </ul>
        <div className="field-body"></div>
      </div>
    </div>
  );
}
