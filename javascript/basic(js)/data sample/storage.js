//[================== 원시적으로 localstorage 관리하기 ===================]


const user = {
  name : 'rama',
  age: 23,
  object: {}
} 


/* 
================================================================================================================
  [localstorage 에 데이터 삽입]

  - setItem(키값명시, 삽입될데이터)
  - 삽입될 데이터는 문자형이어야 한다(Json형식)
  - 문자형으로 데이터 변환 -> JSON.stringify(데이터)
*/
localStorage.setItem('user', JSON.stringify(user))


/* 
================================================================================================================
  [localstorage 의 데이터 제거]

  - removeItem(키값)
*/
localStorage.removeItem('user')


/* 
================================================================================================================
  [localstorage 에서 데이터 받아오기]

  - 변수 = getItem(키값)
  - javascript 데이터 변환 -> JSON.parse(데이터)
*/
localStorage.setItem('user', JSON.stringify(user))

// A는 문자데이터
const A = localStorage.getItem('user')
// B는 javascript 데이터
const B = JSON.parse(A)
// B의 age 값을 수정
B.age = 30
// 수정된 값을 localstorage에 삽입
//최종적으로 user 객체는 age 값이 수정되어 localstorage 에 넣어졌다.
localStorage.setItem('user', JSON.stringify(B))

