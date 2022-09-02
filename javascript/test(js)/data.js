// [========================== string ==========================]
let myName = "DongGyun";
let hello = `Hello ${myName}`; //백틱을 사용하면 데이터 보관법을 사용할 수 있다. 

console.log(myName);
console.log(hello);

//[========================== Number ==========================]
//정수 및 부동소수점 숫자
let number = 26;
let opacity = 26.5;

console.log(number);
console.log(opacity);

//[========================== Boolean ==========================]
//true, false 두 개의 값으로 이루어져있다.

let check1 = true;
let check2 = false;

console.log(check1);
console.log(check2);

//[========================== undefined ==========================]
//값이 할당되지 않은 상태 

let udf;

console.log(udf);


//[========================== null ==========================]
//어떤 값이 의도적으로 비어있음을 의미한다.
let empty = null;

console.log(empty);


//[========================== object ==========================]
//객체 데이터
//데이터를 key:value 형태로 저장합니다. {}

let user = {
  age: 26,
  name: "donggyun"
}

console.log(user);
console.log(user.age);
console.log(user.name);

//[========================== Array(배열) ==========================]
//여러 데이터를 순차적으로 저장

let fruit = ['apple', 'banana', 'chery']

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);