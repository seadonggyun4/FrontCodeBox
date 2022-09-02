//[함수]
// 함수의 반환
function helloReturn(){
  return "Hello retrun!!"
}

let a = helloReturn();

console.log(helloReturn);
//함수 선언 
function sum(a,b){// a,b는 매개변수(parameters)
  return a + b
}
// 함수 실행
console.log(sum(1,2)); // 1,2는 인수(arguments)
// 함수 재사용!
let aaa = sum(10,12);
let bbb = sum(5,5);

console.log(aaa, bbb);