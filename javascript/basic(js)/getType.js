export default function getType(data){
  return Object.prototype.toString.call(data).slice(8, -1);
}
/* 
[], {}, null 은 typeof으로 object라는 타입으로 묶여서 표현되기때문에 자세히 표현하기위한 함수
*/