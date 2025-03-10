import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import instance from "../../utils/axios";
import { create } from "../../store/home.store";
import { useLocation } from "react-router-dom";

export const MenuContext = createContext(null as any);

export const MenuProvider = ({ children }: any) => {
  const dispatch = useDispatch();
  const menu: any = useSelector((state: any) => state.menu.menu);
  const refresh: any = useSelector((state: any) => state.refresh);

  const { pathname } = useLocation();
  const menu_id = pathname.split("/")[2];
  const currentMenu2: string[] = [];

  useEffect(() => {
    hello();
  }, [refresh]);

  const currentMenu = function (t: any, parent_id: any, menu_id: string) {
    t.map((v: any) => {
      if (v.MENUID === menu_id) {
        currentMenu2.push(parent_id);
      } else {
        currentMenu(v.CHILDREN, v.MENUID, menu_id);
      }
    });
  };

  const hello = function () {
    if (menu) {
      menu.map((v: any) => {
        if (v.MENUID == menu_id) {
        } else {
          currentMenu(v.CHILDREN, v.MENUID, menu_id);
        }
      });
    }

    if (currentMenu2.length > 0) {
      menu.map((v: any) => {
        if (v.MENUID == currentMenu2[0]) {
        } else {
          currentMenu(v.CHILDREN, v.MENUID, currentMenu2[0]);
        }
      });
    }
  };

  return <MenuContext.Provider value={{}}>{children}</MenuContext.Provider>;
};
