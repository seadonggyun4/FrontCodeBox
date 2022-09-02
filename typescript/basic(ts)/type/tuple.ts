/*
  [Tuple]
  - array 와는 다르게 annotation 시 명확하게 몇번째 index에는 무슨 타입이 들어갈지 명시할 수 있다.
  - tuple에서 지정한 타입과 다른 순서와 다른 타입으로 들어갈 시 오류가 발생한다.
  - 튜플은 배열의 서브타입이다.
*/

let x : [number, string] 

x = [23, 'hello']

//erro
// x = ['hello', 23]

console.log(x)

// 구조 분해 할당시 명확히 지정된 타입을 얻을 수 있다.
let [first, second] = x
console.log(typeof first)
console.log(typeof second)