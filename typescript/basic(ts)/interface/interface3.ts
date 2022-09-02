//인터페이스 생성
interface Person3 {
  name: string,
  age: number,
  fullName() : void
}

// class implements interface
class PersonClass implements Person3 {
  name: string;
  age: number;

  //생성자 함수의 역할
  //constructor의 key값은 interface의 값과 일치 해야 한다.
  constructor(Name:string, Age:number){
    // 매개변수로 받아온 Name과 Age의 값을 name, age에 할당
    this.name = Name
    this.age = Age
  }


  //프로토타입 역할
  fullName(): void {
    console.log(`안녕 내이름은 ${this.name}이고 나이는 ${this.age}이야`)
  }
}

//인스턴스 생성
const dongFullName:Person3 = new PersonClass('dong', 23)
const gyunFullName:Person3 = new PersonClass('gyun', 25)
const godFullName:Person3 = new PersonClass('god', 27)

//함수 실행
dongFullName.fullName()
gyunFullName.fullName()
godFullName.fullName()