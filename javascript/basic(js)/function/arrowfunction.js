//[===== Arrow Function =====]

//일반적인 익명함수 의 표현식
const test1 = function(x,y){
return x + y;
}
console.log(test1(1,2));


//Arrow function을 사용한 축약식
const test2 = (x,y) => x + y;
console.log(test2(2,3));


//Arrow function에서 객체 데이터를 포함하고 표현하려할때는 ()내부에 {}를 작성하여 선언
const test3 = () => ({
  name: 'rrrr',
  age: 25,
  location: 'LA'
})
console.log(test3);