var age = 20;
var name = "동균";

// ``로 표시
document.write(
  `제이름은 ${name}입니다. 제 나이는 ${age + age - age}입니다.<br>`
);
document.write("<br>");
var x, y;

x = 10;
y = "20";
// "==" 와 "==="의 차이점
document.write(`x는 숫자 ${x}, y는 문자 ${y} `);
document.write("<br>");
document.write(`x == y : ${x == y} -> 타입비교 안한다.`);
document.write("<br>");
document.write(`x ===y : ${x === y} -> 타입비교 한다. <br><br>`);
// js 에서 null값은 object로 표시되기도 한다 -> 이는 공식적으로 인정된 에러 이다.
document.write(`type of "x" : ${typeof x} <br>`);
document.write(`type of "y": ${typeof y} <br>`);
// 숫자 + 문자열 = 문자열
document.write(`type of "y" + "x": ${typeof (y + x)} <br>`);
// 문자/숫자 = 숫자 -> Nan(나노넘버)
// 함수/숫자 = 숫자 -> Nan(나노넘버)
document.write(`type of "y" / "x": ${typeof (y / x)} <br><br>`);
// 변수의 형변환
document.write(`<p>x + x : ${x + x}</p>`);
document.write(`<p>변환된 x + x : ${String(x) + String(x)}</p>`);
