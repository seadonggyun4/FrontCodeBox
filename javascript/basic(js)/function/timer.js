//타이머 함수
//setTimeout(함수, 시간) : 일정 시간 후 함수 실행
//setInterval(함수, 시간) : 시간 간격마다 함수 실행
//clearTimeout() : 설정된 Timeout 함수 종료
//clearInterval() : 설정된 Interval 함수 종료
// 시간 -> 1000ms단위로 작성 (1000ms = 1초)


// setTimeout 이벤트 선언후 timer 변수에 할당
const timer = setTimeout(()=>console.log('hello'), 5000);


//h1 태그를 클릭하면 clearTimeout 이벤트 실행
const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  clearTimeout(timer);
})