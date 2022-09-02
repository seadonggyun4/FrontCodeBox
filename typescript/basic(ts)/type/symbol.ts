/*
  [Symbol]
  - symbol 타입은 js 원시데이터 입니다.
  - Symbol 타입은 유니크한, 충돌되지 않는 값을 가집니다.
  - Symbol 타입은 할당된 데이터가 같은 데이터 타입에 같는 숫자,글자,값 이더라도 주소값이 달라 충돌되지 않습니다.
  

  선언방법
  - Symbol()

  Symbol 특징
  - Symbol 타입은 object 키 값으로도 활용가능한데, 일치하는 값을 담고 있는 Symbol key값을 호출하면 맨 마지막에 있는 key의 값이 반환된다. 
  - Symbol 타입은, 값의 은닉화에 좋다:
    Symbol 타입은 내부 값이 컴파일 단계에서만 확인 가능하고 그 이후 브라우저 랜더링 시에는 값이 안보이기 때문에 값의 "은닉화 에는 좋다."
*/



// name1, name2를 Symbol 타입으로 annotation 한뒤, 같은 값의 Symbol 타입을 선언
const name1 : Symbol = Symbol('test');
const name2 : Symbol = Symbol('test');
// 같은 값이 할당되었다 하더라도 Symbol 타입은 서로 주소값이 다르다.
console.log( name1 === name2)


// 서로 같은 값을 가지고 있는Symbol 타입을 key값으로 설정
let obj = { [ Symbol('test').toString() ] : '1',  [ Symbol('test').toString() ] : '2' };

console.log(Symbol('test').toString());
//key 값 호출시 맨 마지막의 값이 반환된다
console.log(obj[Symbol('test').toString()]); //2

