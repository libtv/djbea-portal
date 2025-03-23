import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDepth2, setDepth3, setMenu } from "../../store/home.store";
import { useLocation, useNavigate } from "react-router-dom";

export const MenuContext = createContext(null as any);

export const MenuProvider = ({ children }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menu: any = useSelector((state: any) => state.menu.menu);
  const curr_menu: any = useSelector((state: any) => state.menu.current);
  const refresh: any = useSelector((state: any) => state.refresh);

  const { pathname } = useLocation();
  const menu_id = pathname.split("/")[2];

  let current_menu: any;

  const getCurrentMenu = function (menu_id: string) {
    menu.map((v: any) => {
      if (v.MENUID === menu_id) {
        dispatch(setMenu(v));
        current_menu = v;
        return;
      } else if (v.CHILDREN.length > 0) {
        v.CHILDREN.map((v2: any) => {
          if (v2.MENUID === menu_id) {
            dispatch(setMenu(v2));
            current_menu = v2;
            return;
          } else if (v2.CHILDREN.length > 0) {
            v2.CHILDREN.map((v3: any) => {
              if (v3.MENUID === menu_id) {
                dispatch(setMenu(v3));
                current_menu = v3;
                return;
              }
            });
          }
        });
      }
    });
  };

  /** 1, 2 depth 일 경우, 리다이렉트 */
  const setCurrentDepth3 = function () {
    if (current_menu.DEPTH === "1") {
      navigate("/menu/" + current_menu.CHILDREN[0].CHILDREN[0].MENUID);
      dispatch(setMenu(current_menu.CHILDREN[0].CHILDREN[0]));
    } else if (current_menu.DEPTH === "2") {
      navigate("/menu/" + current_menu.CHILDREN[0].MENUID);
      dispatch(setMenu(current_menu.CHILDREN[0]));
    }
  };

  /** depth 2, 3 리스트 정리 */
  const setDepth = function () {
    let depth3: any = null;
    let depth2: any = null;
    let find_menu_id = curr_menu.HIGHRID;

    menu.map((v: any) => {
      if (v.MENUID === find_menu_id) {
        depth3 = v;
        return;
      } else if (v.CHILDREN.length > 0) {
        v.CHILDREN.map((v2: any) => {
          if (v2.MENUID === find_menu_id) {
            depth3 = v2;
            return;
          } else if (v2.CHILDREN.length > 0) {
            v2.CHILDREN.map((v3: any) => {
              if (v3.MENUID === find_menu_id) {
                depth3 = v3;
                return;
              }
            });
          }
        });
      }
    });

    find_menu_id = depth3.HIGHRID;

    menu.map((v: any) => {
      if (v.MENUID === find_menu_id) {
        depth2 = v;
        return;
      } else if (v.CHILDREN.length > 0) {
        v.CHILDREN.map((v2: any) => {
          if (v2.MENUID === find_menu_id) {
            depth2 = v2;
            return;
          } else if (v2.CHILDREN.length > 0) {
            v2.CHILDREN.map((v3: any) => {
              if (v3.MENUID === find_menu_id) {
                depth2 = v3;
                return;
              }
            });
          }
        });
      }
    });

    dispatch(setDepth2(depth2));
    dispatch(setDepth3(depth3));
  };

  useEffect(() => {
    if (Array.isArray(menu)) {
      getCurrentMenu(menu_id);
      setCurrentDepth3();
      if (curr_menu !== "") setDepth();
    }
  }, [menu, curr_menu]);

  return <MenuContext.Provider value={{}}>{children}</MenuContext.Provider>;
};
