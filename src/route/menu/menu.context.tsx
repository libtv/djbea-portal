import { useDispatch, useSelector } from "react-redux";
import { CommonBoardComponent } from "../../component/common-board/common-board";
import { CommonViewComponent } from "../../component/common-view/common-view";
import "../../style/css/menu/menu.context.css";
import { Routes, Route } from "react-router-dom";
import { BoardProvider } from "../../component/board/board.provider";

export function MenuContext() {
  const curr_menu: any = useSelector((state: any) => state.menu.current); // 메뉴명

  // 공통코드로 메뉴 확인
  const mntRoute = function () {
    switch (curr_menu.MENUTYPE) {
      case "MNT001":
        return <CommonBoardComponent></CommonBoardComponent>;

      case "MNT002": // 공용게시판
        return <CommonBoardComponent></CommonBoardComponent>;

      default: // 공용게시판
        return <CommonBoardComponent></CommonBoardComponent>;
    }
  };

  return (
    <div className="menu-wrap">
      <div className="menu-context">
        <h3 className="context-tit">{curr_menu.KNAME}</h3>
        <Routes>
          <Route path="/view/*" element={<CommonViewComponent></CommonViewComponent>}></Route>
          <Route path="/*" element={<BoardProvider>{mntRoute()}</BoardProvider>}></Route>
        </Routes>
      </div>
    </div>
  );
}
