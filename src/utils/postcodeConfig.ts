/** 카카오 주소검색 팝업 설정 공통값 */
const postcodeConfig = {
  width: 500, // 팝업창 가로 너비
  height: 500, // 팝업창 세로 높이
  top: window.innerHeight / 2 - 250, // 팝업창 y좌표 (페이지 영역 절반 - 팝업창 절반)
  left: window.innerWidth / 2 - 250, // 팝업창 x좌표 (페이지 영역 절반 - 팝업창 절반)
  popupTitle: "은슐랭 주소검색", // 팝업 title
  popupKey: "eunchelin-address-popup", // 키가 없는 경우 매 클릭 시 팝업 생성
};

export default postcodeConfig;
