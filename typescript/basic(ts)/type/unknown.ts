/*
  [unknown]
  - unknown 은 any의 문제점을 해결하고 자 나온, 한층더 type-safe 한 타입이다.
  - unknown 은 any 와 달리 바로 타입을 할당하려고 하면 에러가 난다.(메모리 누수 방지)
    - any는 체인처럼 변수를 계속 할당하고 annotaion 하지 않는다면 any 타입이 되지만 unknown은 이를 방지

  - unknown은 "타입가드" 를 통해 타입 검사 후에만 타입을 지정할 수 있다.
*/

// maybe 변수 타입을 unknown으로 설정
declare const maybe:unknown

// number로 annotation 한 aNumber 변수에 maybe를 할당하려 하면 에러가 발생
// 타입가드를 거치지 않고 unkown 값을 특정 값으로 지정하려 하면 에러가 발생
// const aNumber:number = maybe


/*
  타입가드
  - unknown 의 값이 바로 할당 되는 것을 방지
  - if()문의 비교 연산자를 통해 사용
  - if(unknown === 할당하고 싶은 타입값) -> ts 자체적으로 해석해서 할당하고싶은 타입을 unknown 타입에 할당한다.
*/
if ( maybe === true)
{
  const aBoolean:boolean = maybe
  // const aString:string = maybe
} else if(maybe === 'string')
{
  // const aBoolean:boolean = maybe
  const aString:string = maybe
}