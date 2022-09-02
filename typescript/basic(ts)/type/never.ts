/*
  [never]
  - never타입은 그 어떤 것도 할당할 수 없는 타입이다
  - 일반적으로 return 에 사용되어 , 아무것도 return 되지 않는 형태를 만들때 사용된다.

*/


// return 값을 never로 지정한 함수
function erroMessage(message: string):never{
  throw new Error(message);
}

//never를 사용한 함수를 return 값으로 넣더라도 fail 함수는 never 타입으로 추론
function fail(){
  return erroMessage('erro 발생')
}


//return 값 없이 무한으로 반복하는 구조에도 never 사용
function loop():never{
  while(true){
    console.log('무한반복')
  }
}