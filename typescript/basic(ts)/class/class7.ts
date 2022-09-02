class Parent {
  //protected 로 선언한 프로퍼티만 상속 시킬수 있다.
  constructor(protected  _name:string, protected _age:number){}

  public print():void{
    console.log(`이름은 ${this._name} , 나이는 ${this._age}`)
  }
}


// _name 은 하위 즉 자식 클래스 에서만 사용 가능하다.
// const returnnn:Parent = new Parent('dong',23)
// returnn._name



// 클래스 상속
class Child extends Parent{
  // 부모에 없는 값 추가
  public gender = 'male'
  //protected 로 된 값을 오버라이드 한뒤 public 등으로 변환가능
  // 값을 직접 할당하면 매개변수로 들어온 값이 덮어 씌워 진다.
  public _name = 'Mr. been'

  //자식요소 생성자 정의 -> 항상 내부에 먼저 부모요소의 생성자를 정의 하는 super()가 있어야 한다.
  constructor(age:number){
    //super에 들어가는 매개변수는 부모요소의 constructor를 호출후 사용하기 위한 값
    super('son' ,age)
  }
}

const returnn = new Child(5)
console.log(returnn)
console.log(returnn._name)
// 부모의 매서드 를 자식요소에서 호출할 수 있다.
returnn.print()



