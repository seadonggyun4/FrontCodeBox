//class generic
class Person15 <T,D>{
  private _name:T
  private _age:D

  constructor(name:T, age:D){
    this._name = name;
    this._age = age;
  }
}

new Person15('hello',23) //자동추론
new Person15<number,string>(23,'hello') //직접 타입 설정