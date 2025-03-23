import { useSelector } from "react-redux";
import { CommonViewContext } from "./common-view-context";
import "./common-view.css";

export function CommonViewComponent() {
  return (
    <>
      <CommonViewContext></CommonViewContext>
    </>
  );
}
