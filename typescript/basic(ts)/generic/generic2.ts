//generic 사용법은 2가지 이다.
// 1. <>내부에 직접 지정하기
// 2. 지정하지 않고 추론으로 타입 설정하게 하기

function helloBasic<T,U>(message:T, comment:U):T{
  return message
}


//1
helloBasic<string, number>('dong',25)


//2
helloBasic(25,27)

