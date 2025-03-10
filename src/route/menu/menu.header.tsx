import { useSelector } from "react-redux";
import "../../style/css/menu/menu.header.css";

export function MenuHeader() {
  const menu: any = useSelector((state: any) => state.menu.current);
  const depth2: any = useSelector((state: any) => state.menu.depth2);
  const depth3: any = useSelector((state: any) => state.menu.depth3);

  return (
    <div className="menu-header">
      <h2 className="spot-title">{menu.KNAME}</h2>
      <ul className="con-area">
        <li className="home">
          <a href="/">HOME</a>
        </li>
        <li className="breadcrumbs-item">
          <button id="head_menu_depth2_btn" type="button" className="toggle-btn">
            {depth3.KNAME}
          </button>
        </li>
        <li className="breadcrumbs-item">
          <button id="head_menu_depth3_btn" type="button" className="toggle-btn">
            {menu.KNAME}
          </button>
        </li>
      </ul>
    </div>
  );
}
