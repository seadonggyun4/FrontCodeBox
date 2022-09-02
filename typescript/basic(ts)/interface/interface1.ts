// 인터페이스 생성
interface Person1 {
  name : string ;
  age? : number ;
  [index:string] : any;

  //인터페이스 옵션1: ?는 해당 프로퍼티가 사용될수도 있고 아닐수도 있다를 의미
  //인터페이스 옵션2: index는 해당 프로퍼티에 어떤 이름의 index 값이 선언되도 사용할 수 있다는 것을 의미 -> 다만 annotation한 타입으로 선언해야함

  // 인터페이스 내부에 함수 정의
}




// gyun 객체 생성
const gyun : Person1 = {
  name: 'gyun',
  sister: 'first sister',
  brother: 'second brother',
  parents: ['mother', 'fother']
}


//인터페이스를 메게변수 타입으로 받는 함수
function user( person: Person1): void {
  console.log(person.name)
  if(person.name === 'gyun'){
    console.log(person.sister)
    console.log(person.brother)
    console.log(person.parents[0])
    console.log(person.parents[1])
  }
}

//함수 실행
user({ name:'dong', age:23})
user(gyun)