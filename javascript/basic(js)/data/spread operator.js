/*
  [ 전개 연산자 ]
  - 전개연산자는 "배열"을 찢어 각 개별의 "변수"로 표현한다.
  - 전개연산자는 점 ...으로 표현한다.
*/

const fruits = ['apple', 'banana', 'cherry', 'orange']
console.log('일반 배열 :',fruits) 
console.log('전개연산자 배열 :', ...fruits) 

/*
  [ 변수를 객체로 변환하는 함수 toObject() 만드는법 ]

  - 매개변수로는 객체로 변환할 값의 수 만큼 매개변수를 설정한다.
  - return{} 을 통해 객체로 변환한 값을 반환한다.

  - "매개변수" 에도 "전개연산자"를 사용할 수 있는데 , 
    매개변수 보다 변환될 변수의 수가 많을때 나머지를 받겠다는 의미이다.

  - 매개변수의 전개연산자는 마지막에서만 사용 가능하다.
  - 매개변수의 전개연산자는 값을 배열로 받아온다.
*/

function toObject(a,b,...c){
  return {
    //a:a 와 같이 key값과 value가 같을때는 한글자로 축약해서 표현 할 수 있다.
    a,
    b,
    c
  }
}


// toObject()함수를 화살표 함수로 한줄로 축약한 형태
const toObject2 = (a,b,...c) => ({a,b,c})



// a -> apple,  b -> banana,  c -> [ cherry, orange ]
console.log(toObject(...fruits))
