const pi = 3.1441421532123
console.log(pi);
console.log(typeof pi)

//toFixed(소수점 자리) -> 소수점 몇번째 자리까지 유지 할 것인지
//toFixed()를 사용하여 반환된 값은 문자열로 타입이 변환된다.
console.log(pi.toFixed(2))
console.log(typeof pi.toFixed(2))


//parseInt -> 데이터 타입을 정수로 변환
//ParseFloat -> 데이터 타입을 실수로 변환
//parseInt 와 ParseFloat 는 전역함수
const a = pi.toFixed(2)

console.log(parseInt(a))
console.log(parseFloat(a))



/*
[ Math() ]
  Math()는 자바스크립트 내장객체이며 각종 수학적인 함수와 상수를 사용할수 있게끔 한다.
  
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

  - Math()에서 사용할수 있는 메소드는 여러개가 있다.


*/

//절댓값 반환
console.log("abs :", Math.abs(-12) );
//최솟값 반환
console.log("min :", Math.min(1, 5) );
//최댓값 반환
console.log("max :", Math.max(1, 5) );
//올림값 반환
console.log("ceil :", Math.ceil(3.15) );
//내림값 반환
console.log("floor :", Math.floor(3.15) );
//반올림값 반환
console.log("round :", Math.round(3.15) );
//랜덤한값 반환
console.log("random :", Math.random() );