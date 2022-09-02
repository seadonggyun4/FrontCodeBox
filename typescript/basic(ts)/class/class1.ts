class Person {
  //constructor와 연결되어있다.
  Name: string
  
  // constructor 매개변수 name을 ?을 통해 조건을 걸었다
  // 즉 name -> name | undefined (name값은 들어올 수도 있고 아닐수도 있다.)
  constructor(name?: string){
    if(name === undefined){
      //this는 constructor를 의미
      this.Name = 'dong'
    } else{
      this.Name = name
    }
  }
}

// 인스턴스 생성
const emptyPerson : Person = new Person()
const dongPerson : Person = new Person('gyun')

// 값 출력
console.log(emptyPerson)
console.log(dongPerson)