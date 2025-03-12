import "./home-section-08.css";

export function HomeSection08() {
  return (
    <div className="section-08">
      <div className="visual-video">
        <video preload="auto" src="https://www.busan.go.kr/humanframe/global/assets/video/main_vod_2025fab_05.mp4?v=0" autoPlay loop muted playsInline></video>
      </div>

      <div className="search-form-mobile wrap">
        <div className="srh-total">검색어를 입력하세요</div>
      </div>

      <div className="search-form-pc">
        <button title="검색"></button>
      </div>
    </div>
  );
}
