//[========== Dom api & forEach ===========]
//queryselectorAll은 해당하는요소를 모두 찾아낸다.
//querySelector는 해당하는요소중 가장 첫번째로 읽힌것을 찾아낸다.
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// forEach는 반복하는 함수로서 인수를 익명함수로 받는다
// 익명함수의 매개변수는 (반복중인요소, 반복중인번호) 이다.
boxEls.forEach(function(boxEls,index){
  boxEls.classList.add(`order-${index + 1}`);
  console.log(boxEls,index);
})