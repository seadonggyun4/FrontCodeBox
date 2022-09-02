// [generic with extends]
// extends 를 사용하면 generic에서 사용한 타입을 한정지을수 있다.
class PersonExtends<T extends string> {
  private _name:T

  constructor(name:T){
    this._name = name
  }
}

//string타입만 들어갈수 있다.
new PersonExtends('hello')