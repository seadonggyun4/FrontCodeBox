//[ ========== 생성자 함수 & prototype 을 사용하여 구현 ==========]

function User1(name, age) {
  this.Name = name,
  this.Age = age
}

User1.prototype.getFullName = function(){
  return `Name: ${this.Name} , Age: ${this.Age}`
}

const man1 = new User1('man1', 23);

console.log(man1.getFullName());






//[ ========== class 을 사용하여 구현 ==========]

class User2{
  //constructor -> 생성자 함수 역할
  // constructor: function(){} 이다.
  constructor(name, age){
    this.Name = name,
    this.Age = age
  }

  //protopye으로 선언했던부분을 함수로서 class 내부에 선언 가능하다.
  getFullName(){
    return `Name : ${this.Name} , Age : ${this.Age}`
  }
}

const man2 = new User2('man2', 25)


console.log(man2.getFullName())