import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import instance from "../../utils/axios";
import { useSearchParams } from "react-router-dom";

export const BoardContext = createContext(null as any);

export const BoardProvider = ({ children }: any) => {
  const refresh: any = useSelector((state: any) => state.refresh);
  const curr_menu: any = useSelector((state: any) => state.menu.current);
  const menu_id: string = curr_menu.MENUID;
  const [searchParams, setSearchParams] = useSearchParams();

  const [content, setContent] = useState<Array<any>>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const setMenu = async () => {
        let res = await instance.get("/content", {
          params: {
            menu_id: menu_id,
            paging: searchParams.get("paging") ? searchParams.get("paging") : 1,
            view_count: searchParams.get("view_count") ? searchParams.get("view_count") : 10,
            search: searchParams.get("search") ? searchParams.get("search") : "",
          },
        });
        let body = res.data.body;
        let data = body.data;
        setContent(data);
      };

      const setMenuCount = async () => {
        let res = await instance.get("/content/count", {
          params: {
            menu_id: menu_id,
            search: searchParams.get("search") ? searchParams.get("search") : "",
          },
        });
        let body = res.data.body;
        let data = body.data;

        setCount(data);
      };

      await setMenu();
      await setMenuCount();
    }
    fetchData();
  }, [refresh, searchParams]);

  return <BoardContext.Provider value={{ content: content, count: count }}>{children}</BoardContext.Provider>;
};
