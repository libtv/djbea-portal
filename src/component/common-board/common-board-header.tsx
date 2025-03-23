import { useContext, useEffect, useRef, useState } from "react";
import { BoardContext } from "../board/board.provider";
import { useSearchParams } from "react-router-dom";

export function CommonBoardHeader() {
  const my_context = useContext(BoardContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef: any = useRef(null);
  const count = my_context.count.count;

  const searchOnClickEvent = function () {
    let search = inputRef.current?.value;
    setSearchParams({ search: search });
  };

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

        <input type="text" title="검색내용 입력" className="input-temp" name="keyWord" ref={inputRef} />
        <button type="submit" className="search-btn" onClick={searchOnClickEvent}>
          검색
        </button>
      </div>
    </div>
  );
}
