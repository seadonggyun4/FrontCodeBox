// 클래스 생성
class Person11{
  // readonly 가 붙은 변수는 값을 내부,외부 에서 바꾸려고 해도 안된다.
  // 오직 constructor 혹은 class 내부에서 만 값을 선언하거나 할당 할 수 있다.
  readonly Name: string = 'dong'
  readonly Age:number

  constructor(name: string,  age: number){
    this.Age = age
  }

  hello(){
    // Name은 읽기 전용이라 값을 재할당 하려면 오류 발생
    // this.Name = 'gyun'
  }
}

const p11 : Person11 = new Person11('gyun', 20)


// Age 는 읽기 전용이라 값을 재할당 하려면 오류발생
// p11.Age = 22

