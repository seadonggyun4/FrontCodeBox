//함수
function Btn(a) {
  //파라메터 사용
  document.getElementById("alert").style.display = "block";
  document.getElementById("alert-text").innerHTML = `경고: ${a} 를 입력하세요!`;
}

//EventListener
//EventListener는
document.getElementById("close").addEventListener("click", function () {
  document.getElementById("alert").style.display = "none";
});

// mouseover -> 셀렉터로찾은요소에 마우스를 스윽 갖다대면 특정 코드를 실행해줍니다.
// scroll -> 셀렉터로찾은요소가 스크롤되면 특정 코드를 실행해줍니다. (당연히 그 요소에 스크롤바가 있어야됨)
// keydown -> 셀렉터로찾은요소에 키보드로 글자를 입력하면 특정 코드를 실행해줍니다. (그 요소가 글자를 입력할 수 있는 input 이런거여야 합니다)
