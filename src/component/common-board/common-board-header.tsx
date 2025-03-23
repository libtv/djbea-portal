import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import instance from "../../utils/axios";

export function CommonBoardHeader() {
  const curr_menu: any = useSelector((state: any) => state.menu.current);
  const menu_id: string = curr_menu.MENUID;
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      let res = await instance.get("/content/count", {
        params: {
          menu_id: menu_id,
        },
      });
      let body = res.data.body;
      let data = body.data;

      setCount(data.count);
    }
    fetchData();
  }, []);

  return (
    <div className="board-header">
      <p className="total-text">
        총 <em className="red-txt">{count}</em>건의 게시물이 있습니다.
      </p>
      <div className="search-area">
        <select title="검색유형선택" className="select-temp" name="keyField" id="select">
          <option value="">전체</option>
          <option value="T">제목</option>
          <option value="C">내용</option>
          <option value="N">작성자</option>
        </select>

        <input type="text" title="검색내용 입력" className="input-temp" name="keyWord" value="" />
        <button type="submit" className="search-btn">
          검색
        </button>
      </div>
    </div>
  );
}
