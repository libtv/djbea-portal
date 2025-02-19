import "../../style/css/home/home.header.css";

export function HomeHeader() {
  return (
    <>
      <div className="home-header">
        <div className="home-header-top"></div>
        <div className="home-header-main">
          <h1 id="logo">
            <a href="/">대전일자리경제진흥원</a>
          </h1>

          <div className="header-nav">
            <ul className="depth1">
              <li>
                <a href="#">
                  <i>사업공고</i>
                </a>
                <div className="depth-cont">
                  <div className="depth-tit">
                    <strong>
                      <span>일류 경제도시 대전</span>사업공고
                    </strong>
                  </div>
                  <ul className="depth2">
                    <li>
                      <a href="#">
                        <i>사업공고</i>
                      </a>
                      <ul className="depth3">
                        <li>
                          <a href="#">
                            <i>사업공고</i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>입찰공고</i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>입주공고</i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>채용공고</i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i>입찰공고</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>입주공고</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>채용공고</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <i>정보공개</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>기업지원</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>참여마당</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>오시는길</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>기관소개</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
