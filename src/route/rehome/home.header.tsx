import "../../style/css/rehome/home.header.css";

export function ReHomeHeader() {
  return (
    <div className="wrap_header">
      <div className="header wrap">
        <h1 className="logo">
          <a href="/index.do">대전청년포털 </a>
        </h1>
        <ul className="gnb_depth1">
          <li>
            <a href="#">사업공고</a>
          </li>
          <li>
            <a href="#">사업지원</a>
          </li>
          <li>
            <a href="#">기업지원</a>
          </li>
          <li>
            <a href="#">참여마당</a>
          </li>
          <li>
            <a href="#">오시는길</a>
          </li>
          <li>
            <a href="#">기관소개</a>
          </li>
          <div className="gnb_pc">
            <ul className="gnb_depth2 wrap">
              <li>
                <a href="#">청년정책</a>
                <ul className="gnb_depth3">
                  <li>
                    <a href="/content/CT_000000000241/cntPage.do?commonMenuNo=333_334_335">
                      <i>대전청년정책</i>
                    </a>
                  </li>
                  <li>
                    <a href="/search/businessSearchResult.do?commonMenuNo=333_339">
                      <i>대전청년정책검색</i>
                    </a>
                  </li>
                  <li>
                    <a href="/board/BBSMSTR_000000000239/articleList.do?commonMenuNo=333_340_341">
                      <i>정책공지</i>
                    </a>
                  </li>
                  <li>
                    <a href="/board/BBSMSTR_000000000231/articleList.do?commonMenuNo=333_343">
                      <i>정책자료실</i>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">청년정책</a>
              </li>
              <li>
                <a href="#">청년정책</a>
              </li>
              <li>
                <a href="#">청년정책</a>
              </li>
              <li>
                <a href="#">청년정책</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}
