// abstract class 는 기능적으로 불완전한 class 이다 -> new 생성자로 할당하는것이 불가능
// abstract class 내부에 abstact 매서드를 구현 가능
// abstract는 자식 클래스에 상속시켜 기능을 완전하게 구현한 후 사용 가능


//abstract 클래스 생성
abstract class AbstractClass {
  protected _name : string = 'mark'

  abstract setName(name:string):string
}


// abstract class 를 상속 받음
class Person14 extends AbstractClass{
  //불완전한 abstract 매서드를 완전하게 만듬
  setName(name: string): string {
    this._name = name;
    return this._name
  }
  
}


const p:Person14 = new Person14
console.log(p.setName('dong gyun'))