import "../../../../style/css/home/section/07/home.section-07.css";

export function HomeSection07() {
  return (
    <div className="section-07">
      <div className="section-notice">
        <div className="section-notice-news">
          <ul>asdas</ul>
        </div>
        <div className="section-notice-prog">
          <h3>
            <i>대전청년내일재단 프로그램</i>
          </h3>
          <div className="calendar_move">
            <a href="javascript:void(0)" className="prev">
              <i>이전달 이동</i>
            </a>
            <span>2025.02</span>
            <a href="javascript:void(0)" className="next">
              <i>다음달 이동</i>
            </a>
          </div>
          <table className="calendar">
            <thead>
              <tr>
                <th scope="col">
                  <i>일</i>
                </th>
                <th scope="col">
                  <i>월</i>
                </th>
                <th scope="col">
                  <i>화</i>
                </th>
                <th scope="col">
                  <i>수</i>
                </th>
                <th scope="col">
                  <i>목</i>
                </th>
                <th scope="col">
                  <i>금</i>
                </th>
                <th scope="col">
                  <i>토</i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="day_blank"></td>
                <td className="day_blank"></td>
                <td className="day_blank"></td>
                <td className="day_blank"></td>
                <td className="day_blank"></td>
                <td className="day_blank"></td>
                <td>
                  <i>1</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i>2</i>
                </td>
                <td>
                  <i>3</i>
                </td>
                <td>
                  <i>4</i>
                </td>
                <td>
                  <i>5</i>
                </td>
                <td>
                  <i>6</i>
                </td>
                <td>
                  <i>7</i>
                </td>
                <td>
                  <i>8</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i>9</i>
                </td>
                <td>
                  <i>10</i>
                </td>
                <td>
                  <i>11</i>
                </td>
                <td>
                  <i>12</i>
                </td>
                <td>
                  <i>13</i>
                </td>
                <td>
                  <i>14</i>
                </td>
                <td>
                  <i>15</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i>16</i>
                </td>
                <td>
                  <i>17</i>
                </td>
                <td>
                  <i>18</i>
                </td>
                <td>
                  <i>19</i>
                </td>
                <td>
                  <i>20</i>
                </td>
                <td>
                  <i>21</i>
                </td>
                <td>
                  <i>22</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i>23</i>
                </td>
                <td>
                  <i>24</i>
                </td>
                <td>
                  <i>25</i>
                </td>
                <td>
                  <i>26</i>
                </td>
                <td>
                  <i>27</i>
                </td>
                <td>
                  <i>28</i>
                </td>
                <td className="day_blank"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
