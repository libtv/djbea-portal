import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import instance from "../../utils/axios";
import { formatDate } from "../../utils/date";

export function CommonBoardContext() {
  const curr_menu: any = useSelector((state: any) => state.menu.current);
  const menu_id: string = curr_menu.MENUID;
  const [content, setContent] = useState<Array<any>>([]);

  useEffect(() => {
    async function fetchData() {
      let res = await instance.get("/content", {
        params: {
          menu_id: menu_id,
          paging: 1,
          view_count: 10,
        },
      });
      let body = res.data.body;
      let data = body.data;

      setContent(data);
    }
    fetchData();
  }, []);

  return (
    <div className="board-scroll">
      <table id="board-list" className="board-list">
        <colgroup>
          <col style={{ width: "50px;" }} />
          <col />
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "8%" }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">등록일</th>
            <th scope="col">조회수</th>
            <th scope="col">첨부파일</th>
          </tr>
        </thead>
        <tbody>
          {content.map((v) => (
            <>
              <td className="m_hidden" aria-label="번호">
                {v.CONTENTID}
              </td>
              <td aria-label="제목">
                <a href={`/menu/${curr_menu.MENUID}/view?menuId=${curr_menu.MENUID}&viewId=123`}>
                  <i className="xi-new"></i>
                  <span className="new">새글</span> {v.KTEXT}
                </a>
              </td>
              <td className="m_hidden" aria-label="작성자">
                {v.INSUSER}
              </td>
              <td aria-label="등록일">{formatDate(v.INSTIME)}</td>
              <td className="m_hidden" aria-label="조회수">
                {v.VIEWCOUNT}
              </td>
              <td aria-label="첨부파일">
                <span className="behind">첨부파일</span>

                <a href="/boardDownload.es?bid=0101&amp;list_no=12540&amp;seq=1" />
              </td>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
