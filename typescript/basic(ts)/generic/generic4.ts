//알리아싱 generic
type HelloFunctionGeneric1 = <T>(message:T) => T

const HelloFunction1:HelloFunctionGeneric1 = <T>(message:T):T => {
  return message
}



//인터페이스 generic

interface HelloFunctionGeneric2 {
  <T>(message:T) :T
}

const HelloFunction2:HelloFunctionGeneric2 = <T>(message:T):T =>{
  return message
}