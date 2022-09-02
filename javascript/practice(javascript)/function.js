function sum(x) {
  // x는 매개변수(parameter)이면서 지역변수
  let y = 50; // y는 지역변수
  return x + y;
}

document.write(sum(10)); // 10은 전달인자(argument)

//짧고 빠르게 끝낼수 있는 함수는 Arrow function을 사용한다.
// "=>" 이 표식이 Arrow function을 의미한다.
let sumArrowFunction = (x, y) => x + y;
document.write("<br>");
document.write(sumArrowFunction(10, 20));
document.write("<br>");

//콜백함수
//정의된 함수를 인자값으로 전달되는 함수

function suum(x, y, c) {
  c(x + y);
  return x + y;
}

function documentWrite(s) {
  //콜백함수
  document.write("콜백함수 : ", s);
}

suum(10, 20, documentWrite);
