import { CommonBoardComponent } from "../../component/common-board/common-board";
import { CommonViewComponent } from "../../component/common-view/common-view";
import "../../style/css/menu/menu.context.css";
import { Routes, Route } from "react-router-dom";

export function MenuContext() {
  return (
    <div className="menu-wrap">
      <div className="menu-context">
        <h3 className="context-tit">입주공고</h3>
        <Routes>
          <Route path="/:id/view" element={<CommonViewComponent></CommonViewComponent>}></Route>
          <Route path="/:id" element={<CommonBoardComponent></CommonBoardComponent>}></Route>
        </Routes>
      </div>
    </div>
  );
}
