export default function getRandom() {
  return Math.floor(Math.random() * 10);
  //floor 는 내림처리
}

/* 
[], {}, null 은 typeof으로 object라는 타입으로 묶여서 표현되기때문에 자세히 표현하기위한 함수
*/