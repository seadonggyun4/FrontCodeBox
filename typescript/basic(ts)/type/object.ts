/*
  [Object]
  - typescript 에서 js에서의 객체 선언 방식으로 선언 하면 타입이 정확히 말해 object 타입은 아니다.
  - 타입 자체가 => {키값:내부값} 이런식으로 인식된다.
  - 위 와 같은 형태는 컴파일 되고 난 후에는 문제가 없지만 ts 파일 자체의 의미론 적으론 맞지 않는다.


  - Object.create()를 통해 명확히 객체타입을 명시 할 수 있다.
  - Object.create()은 유니온 타입입니다.  Object | null
*/


// 타입이 객체로 ts에서 인식되지 않는다.
const user1 = {a:1, b:2}
console.log(typeof user1)

const user2 = Object.create({a:1, b:2})
console.log(typeof user2)



