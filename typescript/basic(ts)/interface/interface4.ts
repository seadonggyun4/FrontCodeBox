//인터페이스 생성
interface Name {
  name: string
}

//인터페이스 상속
interface Age extends Name{
  age: number
}

// 객체 생성
const user3: Age ={
  name: 'dong',
  age: 25
}  

//출력 함수 생성
function fullName(user:Age){
  console.log(`내 이름은 ${user.name} 이고 내 나이는 ${user.age}`)
}

fullName(user3)


