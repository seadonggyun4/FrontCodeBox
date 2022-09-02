//[ ===== IIFE  ===== ]
// 즉시 실행함수: immediatley-invoked function expression

/*
 함수 내부에서 전역변수를 이용하여 연산하고 선언후 바로 사용하고 한번만 사용할 경우 
 특정 변수에 할당할 필요없이 선언과 동시에 바로사용할수 있는 방법

 방법은 총 2가지로 분류되며 차이점은 맨뒤에 붙는 ()가, "함수를 담고있는()"  내부에 들어가 있냐 아니냐 이다.
 두 방법의 차이점은 따로 없다.
*/

const a = 5;

//일반적인 방법
function double(){
 console.log( a + 5) 
}
double();


//IIFE 방법1
(function(){
  console.log(a + 6)
})();

//IIFE 방법2
(function(){
  console.log(a + 7)
}());