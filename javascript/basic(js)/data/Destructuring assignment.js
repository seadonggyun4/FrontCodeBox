/*
[객체 데이터 구조분해 할당(Destructuring assignment)]
1. 구조분해 할당은 객체, 배열을 해체 하여 개별 변수에 할당해주는 방식을 의미한다.
2. 비구조화 할당이라는 명칭으로도 불린다. 

- 값을 할당할 객체 명들은 객체 내부속성 key 값의 이름과 동일해야한다.
- 객체 내부에 없는 key값을 객체명으로 지정하면 "undefinde" 값이 할당된다. 이는 추후에 객체에서 지정할 수도 있기 때문
- 구조분해 할당문을 선언할때 변수에 기본적으로 적용될 기본값을 지정할수 있다.
- 변수에 기본값이 할당 되어있는 상태에서 객체 구조분해후 그 값이 저장될때는 기본변수 값이 덮어 씌워진다.
- {key값명 : 새로운 변수명 } ==============> 구조분해 할당시 변수의 명을 객체의 key 값과 다르게 지정하고 싶을때
*/


//user 객체 생성
const user = {
  name: 'rama',
  age: 27,
  email: 'rama4251@naver.com'
}

// 구조 분해 할당
// user 객체의 속성들을 구조분해하여 각 객체에 할당한다.
const {name:dong = "baba", age, email, address = 'seoul'} = user 

console.log(user.name) // 분해하기전 객체에 접근하여 key값으로 해당하는 value 값을 호출
console.log(dong) //rama -> baba가 덮어씌워져 rama로 됬다, user객체의 key값 name에 해당하는 value값을 dong이라는 새로운 이름의 변수에 할당하도록 설정
console.log(age) //27
console.log(address) // seoul
console.log(dong, age, address)


/*
[배열 구조분해 할당]
- 객체와 다른점은 key값이 없기 때문에 분해시 할당할 변수  순서대로 분해되어 할당된다는 점이다.
- 만약 배열 중간에 있는값만 추출하고 분해해서 할당하고 싶을땐 할당할 변수 순서를 , 로 지켜 할당해야 한다.
*/


const fruits = ['apple', 'banana', 'cherry']
// 맨 처음 , 표가 있기 때문에 apple은 건너뛰고 banana 부터 추출된다.
// 마지막 d 값은 배열 내부에 없기 때문에 undefinde
const [,b,c,d] = fruits
console.log(b,c,d)