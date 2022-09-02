// 함수의 인터페이스
interface hellowolrd {
  (name: string, age?:number):void
}


// 함수 생성!
/* 
  - 함수 매개변수를 (name:string, age:number) 로 작성하면 오류 발생 -> age는 무조건 numver가 되야함으로 해석
  - 이는 interface에서 age?로 선언 했기 때문 -> number | undefined 상태
  - 즉 ts에서 타입 annotation은 단순히 타입을 선언하는것이 아닌 반드시 그 타입 형태를 벗어나서는 안됨을 의미
  - annotation으로 타입을 선언한 형식이 변수,함수, 클래스 의 사용 방향을 정의 하고 그 둘의 관계를 기반으로 함수의 메게변수 등의 타입을 정의 하고 사용한다.

*/
const hellowolrd : hellowolrd = function(name:string) {
  console.log(name)
}