import "../../style/css/home/home.footer.css";

export function HomeFooter() {
  return (
    <>
      <div className="home-footer">
        <div className="footer-body">
          <div className="footer-info">
            <p className="add">(35242) 대전광역시 서구 둔산로 100 (둔산동)</p>
            <div className="info-list">
              <p className="tel">콜센터 042-120 (365일)</p>
              <ul>
                <li>평일 08:00~21:00</li>
                <li>토·공휴일 09:00~18:00</li>
              </ul>
            </div>
            <p className="copyright">(c) DAEJEON METROPOLITAN CITY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </>
  );
}
