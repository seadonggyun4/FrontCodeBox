
/* ============================== 생성자함수:클래스 를 사용하지 않고 객체 데이터를 생성하기 ============================== */
//객체 데이터 : 멤버(속성 and 메소드를 통틀어서)
const man1 = {
  //속성
  name: 'man1',
  age: '23',
  //메소드
  getFullName : function(){
    return `name: ${this.name} , age: ${this.age}`
    //this는 현재 메소드가 속해있는 객체를 지칭한다.
    //this로 선언하는 방식은 일일이 객체명을 지정하지 않아도 되서 유지보수에 용이하다.
  }
}
console.log(man1)


const man2 = {
  name: 'man2',
  age: '22',
  getFullName : function(){
    return `name: ${this.name} , age: ${this.age}`
  }
}
console.log(man2)



const man3 = {
  name: 'man3',
  age: '23',
  getFullName : function(){
    return `name: ${this.name} , age: ${this.age}`
  }
}
console.log(man3)

/*
생성자 함수:
객체는 객체 리터럴{} 을 사용하면 빠르고 간편하게 만들수 있지만 
key값이 서로 다른게 아닌 같은 key값을 가지고 있는 객체를 여러개 만들상황에서는 생성자 함수를 만들어 
관리하는 편이 훨씬 간편하고 용이하다.
예) 위 예시 처럼 key 값이 이름, 나이, 주소로 동일한 인물 객체를 여러개 만들때


prototype:
생성자 함수 내부에 프로퍼티에는 프로토타입(prototype)이라는 빈 객체가 기본적으로 존재한다.
생성자 함수로부터 생성된 객체,메소드(위 예시에서는 age, name, getFullName())들은 
비어있는 프로토타입에 넣어 필요할때 참조하는 방식으로 사용가능하다.
위 예시에서 getFullName() 함수는 같은 통일화되어 똑같이 반복적으로 사용되는 요소를 계속해서 만들고 호출하면서 메모리 낭비가 야기시킨다.
이처럼 모든 객체에 공통적으로 사용되는 키,값(메소드)을 프로퍼티로 지정한뒤 필요할때 참조하는 방식으로 구성하면 메모리 낭비를 방지할 수 있다.

이처럼 prototype에 이미 지정이 되어있거나 새로이 추가되는 요소들은 동적 메소드 이다.
동적 메소드들은 리터럴 방식으로 표기되는 {} , [] 와 같은 요소에 직접적으로 메소드 체이닝을 통해 사용가능하다.

반면 정적 메소드들은 리터럴 방식으로 표기되는 요소에 메소드 체이닝이 불가능하다.
*/




/* ============================== 생성자함수:클래스 를 사용하고 객체 데이터를 생성하기 ============================== */

//User은 생성자 함수
//생성자 함수의 표기법은 파스칼 케이스로 대분자로 시작된다.
function User(name, age){
  this.Name = name;
  this.Age = age;
}

// prototype은 생성자 함수에 포함되어있는 속성이다.
// getFullName 메소드를 프로퍼티로 지정한다.
// 선언 방법    ===============>    Object.prototype.(key) = (value)
User.prototype.getFullName = function(){
  return `Name: ${this.Name} , Age: ${this.Age} `
}

console.log(User);
console.log(User.prototype);

//man5은 인스턴스
const man5 = new User('man4', 25);
const man6 = new User('man5', 26);


//인스턴스 에서 getFullName()사용하는 것은 함수를 생성해서 메모리를 할당는 것이 아닌 기본 프로퍼티로 지정된 값을 참조하는 것이다.
console.log(man5.getFullName());
console.log(man6.getFullName());



/*
그외: 

js 에서 클래스란 prototype 을 사용해 new라는 키워드와 생성자 함수를 만들어 인스턴스를 만들어 내는 과정이다.




"", [], {} 와 같은 표현방법으로 데이터를 생성하는 방법은
리터럴 표기식 이라 불린다.
*/