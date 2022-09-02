//문자열 선언
const string = 'hello world!'
//문자열 길이 확인
console.log(string.length);

/* 
  [String.prototype.indexOf()] 

  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
  indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.
*/
console.log(string.indexOf('world!'));
console.log(string.indexOf('world!') !== -1);

/* 
  [String.prototype.slice()] 

  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  slice() 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.

  slice(시작지점, 끝지점)
*/
console.log(string.slice(0,3));


/* 
  [String.prototype.replace()] 

  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  replace() 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다. 
  그 패턴은 문자열이나 정규식(RegExp)이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있습니다.

  replace(바꿀문자, 바뀔문자)
*/
console.log(string.replace('world!', 'dog'));


/* 
  [String.prototype.match()] 

  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match
  match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.

  1. match() 메서드는 정규표현식을 통해서 특정한 문자열을 탐색한후 일치되는 부분을 배열로 반환한다.
  2. 반환된 배열에서 필요한 부분의 인덱스를 지정해 사용할 수 있다.

*/

//  /.+(?=@)/ 는 정규표현식 이다.  

const email = 'seadonggyun@gmail.com'
console.log(email.match(/.+(?=@)/)[0]);


/* 
  [String.prototype.trim()]

  trim()메서드는 연결된 문자데이터 앞,뒤의 공백을 제거한다.

*/

const sample = '     hello world!      '
console.log(sample.trim());