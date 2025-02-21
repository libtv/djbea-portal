import { CommonBoardComponent } from "../../component/common-board/common-board";
import "../../style/css/menu/menu.context.css";

export function MenuContext() {
  return (
    <div className="menu-wrap">
      <div className="menu-context">
        <h3 className="context-tit">입주공고</h3>
        <CommonBoardComponent></CommonBoardComponent>
      </div>
    </div>
  );
}
