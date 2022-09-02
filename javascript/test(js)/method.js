//객체 데이터 내부에 함수로 표현된 데이터를 할당하는 것을 메소드라 한다. 
//객체 데이터 
const heropy = {
  //프로퍼티(Property)
  //객체 내부의 속성
  name: 'dong',
  age: 14,
  //메소드(Method)
  getName: function(){
    // 현제 객체의 name변수를 찾는다.
    return this.name
  }
}

const a = heropy.getName();
console.log(a);

console.log(heropy.getName());