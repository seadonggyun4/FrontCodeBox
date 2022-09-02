let txt = "banana";
var txt2 = "apple 'hello world' ";

document.write(`txt: ${txt} <br>`);
document.write(`txt2 : ${txt2} <br>`);

//indexOf
document.write(`txt.indexOf: ${txt.indexOf("n")} <br>`);
//search -> 조건문의 문자열 위치 반환
document.write(`txt.search: ${txt.search("n")} <br>`);
//lastIndexOf -> 뒤에서 부터 조건문 문자 위치 찾기
document.write(`txt.lastIndexOf: ${txt.lastIndexOf("n")} <br>`);
//조건문을 못찾으면 -1 반환

//slice(a,b)
//substring(a,b)
// substr(a,b) -> a시작값  b종료할 길이
//replace(문자열,문자열) -> 특정 문자열을 대채하는 함수
//toUpperCase() -> 대문자 변환
//tolowerCase() -> 소문자 변환
