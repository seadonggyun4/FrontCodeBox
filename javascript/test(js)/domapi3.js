//[========== Dom api: Getter & Setter ===========]
const boxEl = document.querySelector('.box');


//[Getter : 값을 얻는용도]
//textContent는 string값을 반환한다.
console.log(boxEl.textContent);

//[Setter : 값을 지정하는 용도]
//여기서 textcontent는 문자열 값을 "hello world!!"로 변경.
boxEl.textContent = "hello world!!"
console.log(boxEl.textContent);

//같은 texContent 명령어라도 다른 방식으로 사용 될 수 있다.