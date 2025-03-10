import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import instance from "../../utils/axios";
import { create } from "../../store/home.store";

export const HomeContext = createContext(null as any);

export const HomeProvider = ({ children }: any) => {
  const dispatch = useDispatch();
  const menu: any = useSelector((state: any) => state.menu.menu);
  const refresh: any = useSelector((state: any) => state.refresh);

  useEffect(() => {
    async function fetchData() {
      if (menu === "") {
        let res = await instance.get("/menu");
        let body = res.data.body;
        let data = body.data;
        dispatch(create(data));
      }
    }
    fetchData();
  }, [refresh, menu]);

  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};
