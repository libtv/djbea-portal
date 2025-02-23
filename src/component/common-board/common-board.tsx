import { CommonBoardContext } from "./common-board-context";
import { CommonBoardHeader } from "./common-board-header";
import { CommonBoardPaging } from "./common-board-paging";
import "./common-board.css";

export function CommonBoardComponent() {
  return (
    <>
      <CommonBoardHeader></CommonBoardHeader>
      <CommonBoardContext></CommonBoardContext>
      <CommonBoardPaging></CommonBoardPaging>
    </>
  );
}
