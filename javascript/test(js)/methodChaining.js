const a = "Hello~";
//split : 문자를 인수 기준으로 쪼개서 "배열로" 반환
//reverse: "배열을" 뒤집는다.
//join: "배열을"인수 기준으로 병합한다.

const b = a.split('').reverse().join('');// 메소드 체이닝...

console.log(b);