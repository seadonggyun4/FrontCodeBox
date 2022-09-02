/*
객체(object)의 특성
- 객체는 메모리 주소를 참조하는 참조형 데이터 이다. (예 객체,배열,함수 ...)
- 참조형 데이터는 메모리를 참조하는 형태 이기 때문에 값이 동일,일치 하더라도 메모리 주소가 다르면 비교연산자 에서 false 값이 반환된다.
*/

const a = {k: 123}
const b = {k: 123}


console.log(a['k']) //객체데이터에서는 index 번호대신 key값으로도 value를 추출할 수 있다.
console.log(a === b) // false


/*
  [assign()]
  - assign()은 정적메소드 이다.
  -  Object.assign() 메서드는 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 목표 객체에 붙여넣습니다. 그 후 대상 객체를 반환합니다.
  
  
  - assign(목표객체, 출처객체 .....) ================> 괄호의 첫째 자리는 반환될 목표 객체이고 , 그 이후의 값들은 출처객체이다.
  
  - const 목표객체 = Object.assign(목표객체, 출처객체)  
    ==============> const로 선언한 객체와 assign()의 첫번째 값으로 들어가는 객체 모두다 목표객체 이기때문에 주소값이 동일하다 .
*/

const man1 = {
  name: 'rara',
  age: 23
}

const man2 = {
  name: 'nana',
  email: 'rama4251@naver.com'
}

//const 목표객체 = Object.assign(목표객체, 출처객체)
const assign = Object.assign(man1,man2)
console.log(assign)
console.log(man1)
// assign 과 man1의 주소는 동일하다.
console.log(assign === man1) //true


//목표객체를 빈객체{} 로 설정하면 man1의 속성들이 반환되어 assign2와 {} 으로복사된다. 
//하지만 assign2와 man1의 값이 동일할 지라도 메모리 주소는 동일하지 않기때문에 비교연산시 false값이 반환된다.
const assign2 = Object.assign({}, man1)
console.log(assign2)
console.log(man1)
console.log(assign2 === man1) //false






/*
 [ key() ]
 - key()는 객체데이터의 key 값을 추출해 배열로 반환한다.
*/

const man1keys = Object.keys(man1)
console.log(man1keys) //man1 객체의 key값 배열


// [화살표 함수로 축약되기전 구조]
// const man1values = man1keys.map(function(item){
//  return man1[item]
// })


const man1values = man1keys.map(item => man1[item])


console.log(man1values)