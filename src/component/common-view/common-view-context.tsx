export function CommonViewContext() {
  return (
    <div className="view-wrap">
      <div className="view-head">
        <p>대전광역시 우주기술 연구·활용 규제자유특구사업 특구사업자 선정 결과 안내</p>
      </div>
      <ul className="info">
        <li>
          <span>작성자</span>
          <p>김*리</p>
        </li>
        <li>
          <span>작성일</span>
          <p>2025/02/18 14:39</p>
        </li>
        <li>
          <span>조회수</span>
          <p>71</p>
        </li>
      </ul>
      <div className="content">선정결과 안내(홈페이지 게재).pdf</div>

      <div className="file-wrap">
        <ul>
          <li>
            <a download="" href="/boardDownload.es?bid=0101&amp;list_no=12540&amp;seq=1">
              선정결과 안내(홈페이지 게재).pdf [53.2KB]
            </a>
          </li>
        </ul>
      </div>

      <div className="view-btn-wrap">
        <a href="" className="list-btn">
          목록
        </a>
      </div>

      <form name="delForm" id="delForm" action="/board.es?mid=a20201000000&amp;bid=0101&amp;list_no=12540&amp;act=del" method="post"></form>
    </div>
  );
}
