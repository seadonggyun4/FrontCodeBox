/*
 [Array]
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const numbers = [1,2,3,4]
const fruits = ['apple', 'banana', 'cherry']


//length
console.log(numbers.length)
console.log(fruits.length)



/*
  concat()
  concat(배열) -> concat()내부에 들어있는 배열을 기존 배열과 병합하여 반환  
  원본데이터는 변경되지 않는다.
*/
console.log(numbers.concat(fruits))





/*
  forEach()
  - forEach()는 반복문이다.
  - forEach(function(탐색되는요소, 요소의 인덱스값, 원본배열){

  })
  - forEach()로 탐색한 개체들은 반환되어 값이 저장되지는 않는다.
*/

const eachFruits = fruits.forEach(function (item,index, array){
  console.log(item,index,array)
})

console.log(eachFruits) // undifined


/*
  map()
  - 기본적인 선언문은 forEach()문과 동일하다.
  - map()은 탐색한 개체들을 반환하여 새로운 배열을 생성한뒤 값을 저장한다.
*/

const mapFruits1 = fruits.map(function(item,index){
 console.log(item, index)
 // return 문으로 반환될 형식과 값을 지정
 return `${item} ,${index}`
})
console.log(mapFruits1) // 새로운 배열 반환


const mapFruits2 = fruits.map(function(item,index){
  //map()의 반환값을 객체형식으로 지정
  return {
    id: index,
    name: item
  }
 })
 console.log(mapFruits2)

//mapFruit2 와 동일한 선언문에서 매개변수로 사용되는 함수만 화살표 함수로 표현한 예제
 const mapFruits3 = fruits.map((item,index) => ({
  id: index,
  name: item
 }))
 console.log(mapFruits3)
