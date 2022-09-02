//[class 상속]

class animal{
  constructor(name, feet, a){
    this.Name = name
    this.Feet = feet
    this.A = a
  }
}


//extends 는 상속(확장)을 의미한다 -> animal 클래스의 constructor로 정의된 부분을 사용할 수 있는 기능
// animal의 constructor 에 정의된 객체를 상속 받는다.
class dog extends animal{
  constructor(name,feet,age){
    // 사용할 객체를 지정한다.
    super(name, feet)
    this.Age = age
  }
}


const mydog = new dog('ruru', 4, 10);
console.log(mydog);