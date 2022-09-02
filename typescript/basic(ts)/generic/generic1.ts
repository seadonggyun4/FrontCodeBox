// 두개의 비슷한 함수 -> 출력 결과물만 여러 타입으로 변환되기만 하면 된다 =========================================
function setString(message:string):string{
  return message
}

function setNumber(message:number):number{
  return message
}




// any 타입으로 어떤 타입이든 호환 가능한 함수 =================================================================
function set(message:any):any{
  return message
}
// 하지만 숫자 타입에 맞지 않는 length 와 같은 매서드가 붙어도 컴파일 타임에는 에러가 발생하지 않는다.
// 런타임에 undefined 와 같은 값으로 반환이 된다. -> 에러
console.log(set(29).length)





// generic =================================================================
// generic은 <>를 통해 매개변수로 받는 데이터 자체를 타입으로 사용한다
// 매개변수 26 이 들어오면 26 자체를 타입으로 지정해서 사용하고  이는 런타임에 숫자로 인식되는 식이다.
// generic으로 받은 타입은 다른곳에서 는 사용 불가 오직 사용한 장소 그 자리에서만 사용된다.
function genericSet<T>(message:T):T{
  return message
}

// console.log(genericSet(29).length) -> 숫자 타입 에는 length 매소드를 사용할수 없음을 인지하고 에러로 반환
console.log(set('dong').length)


// 즉 generic은 타입의 변수 라고 볼수 있다. 
// genric을 선언한뒤 그 안에 사용할 변수를 할당하면 그 변수가 타입이된 형태로 genric에 저장된다.
// genric을 사용하면 any 와는 다르게 들어오는 input값에 의한 정확한 프로그래밍이 가능하게 된다. 