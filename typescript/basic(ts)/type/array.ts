/*
  [Array]
  - array는 동일한 타입으로 이루어져있어야 한다.(공통요소의 집합)
  - 타입 annotation을 통해 타입을 명시해야 한다.
  - 타입 명시 방법은 총 2가 지가 있다.
  - 여러 타입을 사용할 경우 union 타입을 통해 들어갈 타입을 annotation 할수 있다.
*/


//방법 1
const number : number[] = [1,2,3] 

//방법 2 -> 컴파일시 에러가 생길수 있어 권장하지 않는 방법이다.
const string : Array<string> = ['h', 'g', 'u']

// union타입
const uni : (number|string)[] = [1,2,'h']