/*
 [this]

  1.일반적으로 js 에서 this는 정적으로 할당되는것이 아닌 동적으로 할당되는값이다. 이 말의 의미는 
    this가 선언되었을때가 아닌 호출되었을때 그 값이 결정된다는 의미이다.


  2.일반적으로 this 함수는 전역객체(window)이고 모든 내부함수(함수 속의 함수, 메소드 속의 함수)또한 전역객체이다. 


  3.화살표 함수에서 this는 바인딩할 객체가 정적으로 할당된다, 일반 함수와는 달리 
    화살표 함수의 this는 언제나 상위 스코프의 this 탐색해서 반환한다 


  일반 함수 => "호출 위치" 에 따라 this 정의
  화살표 함수 => 화살표 함수가 사용된 위치보다 "한단계 상위"에 있는 "함수범위"에 따라 this 정의

*/




// 일반 함수 와 함수내부의 일반 함수에서의 this는 전역객체 window 이다.
function a(){
  console.log(this); //window

  function inside(){
    console.log(this); //whindow
  }
  inside();
}
a()




// 일반함수는 "호출 위치" 에서 참조하는 데이터 에 따라 this 정의
// 일반함수normal 은 객체데이터man1을 참조 하기 때문에 함수 내부의 this는 man1을 의미
const man = {
  name : "man", 
  normal : function(){
    console.log(this) //man object
    console.log(this.name)//man
  },
  arrow : ()=>{
    console.log(this)
    console.log(this.name)
  }
}

const woman = {
  name : "woman"
}
woman.normal = man.normal


man.normal(); 
man.arrow();
woman.normal();



const Timer = {
  name: 'hi im timer',
  //arrow 함수가 사용된 함수보다 한단계 상위의 범위의 함수
  time: function ()
  {
    //arrow 함수를 매개변수로 선언한 함수 setTimeout
   setTimeout(()=>{console.log(this.name), 2000})
  }
}

Timer.time();

