/*
  [any]
  - any는 타입 형식이 지정이 안되있지만 어떤한 값의 특성이든 지닐수 있습니다.
  - any는 undefined 와 비슷하지만 모든 타입으로도 사용 가능하다는 특성이 있습니다.

  - any는 타입이 정확히 지정 안되어있기 때문에 나중에 데이터 타입을  정확히 확인하고 명시하려는 경우 문제가 생길수 있습니다.(메모리 누수)

*/

// 어떤 값이는 출력될수 있는 단순한 함수
// 이와 같은 형식에서 any는 유용 할  수 있다.
// 리턴 값으로 any 를 지정
function message(message:any):any{
  console.log(message)
}

// string 타입
const str = message('this is message')


//number 타입
const num = message(2022)

//반환 되는 return 값이 없을때는 컴파일시 undefined 로 나온다.
console.log(typeof str)
console.log(typeof num)





// any 값은 내부에서 특정 타입으로 annotation하지 않고 변수에 계속 할당시 전부 any 타입이다.(메모리 누수)
// 특정 타입으로 annotation한뒤 그 값을 return 값으로 반환 하면 지정한 값으로 할당 된다.
function leaking(Any1:any){
  let Any2 = Any1
  let number:number = Any2
  return number + 1
}

// leaking 함수에 문자열 15를 넣었다.
const toNumber = leaking("15")

//분명 문자열 15를 넣었음에 도 불구하고 erro가 발생 -> leaking 함수에 내부에서 타입을 any로 받은뒤 number로 변환 되었기 때문
// toNumber.indexOf() 