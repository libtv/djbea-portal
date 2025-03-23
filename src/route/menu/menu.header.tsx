import { useDispatch, useSelector } from "react-redux";
import "../../style/css/menu/menu.header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { refresh } from "../../store/refresh.store";
import { v4 as uuidv4 } from "uuid";

export function MenuHeader() {
  const menu: any = useSelector((state: any) => state.menu.current);
  const depth2: any = useSelector((state: any) => state.menu.depth2);
  const depth3: any = useSelector((state: any) => state.menu.depth3);
  const [isShow2, setShow2] = useState<boolean>();
  const [isShow3, setShow3] = useState<boolean>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickTwo = function (e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    setShow2(!isShow2);
  };

  const onClickThree = function (e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    setShow3(!isShow3);
  };

  const setLink: any = function (link: string) {
    return function () {
      navigate("/menu/" + link);
      navigate(0);
    };
  };

  return (
    <div className="menu-header">
      <h2 className="spot-title">{menu.KNAME}</h2>
      <ul className="con-area">
        <li className="home">
          <a href="/">HOME</a>
        </li>
        <li className="breadcrumbs-item">
          <button type="button" className="toggle-btn" onClick={onClickTwo}>
            {depth3.KNAME}
          </button>
          <ul className={`con-area2 ${isShow2 ? "active" : ""}`}>
            {depth2 &&
              depth2.CHILDREN.map((v: any) => (
                <li className="breadcrumbs-item" key={uuidv4()}>
                  <button type="button" className="toggle-btn" onClick={setLink(v.MENUID)}>
                    {v.KNAME}
                  </button>
                </li>
              ))}
          </ul>
        </li>
        <li className="breadcrumbs-item">
          <button type="button" className="toggle-btn" onClick={onClickThree}>
            {menu.KNAME}
          </button>
          <ul className={`con-area2 ${isShow3 ? "active" : ""}`}>
            {depth3 &&
              depth3.CHILDREN.map((v: any) => (
                <li className="breadcrumbs-item" key={uuidv4()}>
                  <button type="button" className="toggle-btn" onClick={setLink(v.MENUID)}>
                    {v.KNAME}
                  </button>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
