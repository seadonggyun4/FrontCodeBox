//인터페이스 내부에 함수 선언 가능
interface Person2 {
  name: string
  hello() : void
}

//Person2 타입의 객체 생성
const useHello: Person2 = {
  name: 'dong',
  hello() :void {
    console.log(`Hello world!!! im ${this.name}`)
  }
} 

//함수 호출
useHello.hello()