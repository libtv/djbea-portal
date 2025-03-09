import { useContext, useEffect } from "react";
import "../../style/css/home/home.header.css";
import { convertToObject } from "typescript";
import { HomeContext } from "./home.provider";
import { useSelector } from "react-redux";

export function HomeHeader() {
  const refresh = useSelector((state: any) => state.refresh);
  const menu = useSelector((state: any) => state.menu.menu);

  return (
    <>
      <div className="home-header">
        <div className="home-header-top"></div>
        <div className="home-header-main">
          <h1 id="logo">
            <a href="/">대전일자리경제진흥원</a>
          </h1>

          <div className="header-nav">
            <ul className="depth1">
              {menu &&
                menu.map((v1: any) => {
                  return (
                    <li key={v1.MENUID}>
                      <a href={"/menu/" + v1.MENUID}>
                        <i>{v1.KNAME}</i>
                      </a>
                      <div className="depth-cont">
                        <div className="depth-tit">
                          <strong>
                            <span>일류 경제도시 대전</span>
                            {v1.KNAME}
                          </strong>
                        </div>
                        <ul className="depth2">
                          {v1.CHILDREN &&
                            v1.CHILDREN.map((v2: any) => {
                              return (
                                <li key={v2.MENUID}>
                                  <a href={"/menu/" + v2.MENUID}>
                                    <i>{v2.KNAME}</i>
                                  </a>
                                  <ul className="depth3">
                                    {v2.CHILDREN &&
                                      v2.CHILDREN.map((v3: any) => {
                                        return (
                                          <>
                                            <li key={v3.MENUID}>
                                              <a href={"/menu/" + v3.MENUID}>
                                                <i>{v3.KNAME}</i>
                                              </a>
                                            </li>
                                          </>
                                        );
                                      })}
                                  </ul>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
