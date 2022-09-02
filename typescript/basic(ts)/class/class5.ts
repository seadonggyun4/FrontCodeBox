// static이 붙은 매서드, 프로퍼티는 new를 통한  생성자 함수를 만들 필요 없이 class에서 바로 사용할수 있다.

class Person12 {
  static location : string
  //private로 선언한 프로퍼티는 내부에서밖에 사용 못한다.
  private static manname:string

  static sayHello(){
    this.manname = 'dong'
    console.log(`say hello to ${this.manname} and ${this.location}`)
  }

  hello(){
    console.log('안녕하세요~~~~')
    // 인스턴스 생성 X , 바로 class로 호출후 값 할당
    Person12.sayHello()
  }
}

// 인스턴스 생성 X , 바로 class로 호출후 값 할당
Person12.location = 'seoul'


// hello() 실행을 위한 인스턴스 생성후 실행
const startHello : Person12 = new Person12()
startHello.hello()

