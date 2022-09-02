//[========== Dom api: 이벤트 핸들러 & classList ===========]
let boxEl = document.querySelector('.box');
console.log(boxEl);

//[이벤트 핸들러]
//addEventListener("발생한 이벤트 이름", "이벤트에 따라 실행할 함수")
boxEl.addEventListener("click",function(){
  console.log("Click~!!");

  //[classList]
  //HTML 요소의 클래스리스트를 확인하고 가져온다
  //add, remove 와같은 명령어로 특정 클래스를 추가 혹은 지우기가 가능하다.
  boxEl.classList.add('active');
  //contains는 포함되어있는지 확인한는 명령어
  console.log(boxEl.classList.contains('active'));


  boxEl.classList.remove('active');
  console.log(boxEl.classList.contains('active'));
})


