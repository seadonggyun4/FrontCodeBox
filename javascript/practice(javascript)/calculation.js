//예금액 계산기
var 예금액 = 60000;
var 미래예금액 = 0;

if (예금액 < 50000) {
  미래예금액 = 예금액 * 1.15 * 1.15;
} else if (예금액 > 50000) {
  미래예금액 = 예금액 * 1.2 * 1.2;
}

console.log(미래예금액);

//마신커피 계산기
var 첫커피양 = 360;
var 마신커피 = 0;

마신커피 = 첫커피양 + 첫커피양 * (2 / 3) + 첫커피양 * (2 / 3) * (2 / 3);

console.log(마신커피);