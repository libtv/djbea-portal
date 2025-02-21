import "../../style/css/menu/menu.header.css";

export function MenuHeader() {
  return (
    <div className="menu-header">
      <h2 className="spot-title">알림홍보</h2>
      <ul className="con-area">
        <li className="home">
          <a href="#">HOME</a>
        </li>
        <li className="breadcrumbs-item">
          <button id="head_menu_depth1_btn" type="button" className="toggle-btn">
            알림·홍보
          </button>
        </li>
        <li className="breadcrumbs-item">
          <button id="head_menu_depth1_btn" type="button" className="toggle-btn">
            기관행사
          </button>
        </li>
      </ul>
    </div>
  );
}
