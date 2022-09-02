import getType from './getType'; //모듈화한 getTpe.js 에서 getType 함수를 받아온다.
import getRandom from './getRandom'; 

console.log(typeof []);
console.log(typeof {});
console.log(typeof null);
// [], {}, null 은 typeof으로 object라는 타입으로 묶여서 표현된다.

//getType 함수를 사용해 object로 묶여서 표현되는 데이터 타입들을 보다 자세히 표현한다.
console.log(getType([]));
console.log(getType({}));
console.log(getType(null));

/* [삼항 연산자] */
const a  = true

if(a){
  console.log('참')
} else{
  console.log('거짓')
}

// 위의 if문을 간단하게 요약할 수 있다.
console.log(a ? '참' : '거짓')