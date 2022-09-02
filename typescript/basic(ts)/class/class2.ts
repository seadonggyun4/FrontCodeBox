// 보통은 class 에 변수를 생성한뒤 this를 통해 constructor 의 매개변수 값을 받아오는 식이였다. 
//constructor 접근제어자 public을 통해 클래스에서도 사용가능한 변수가 되게 된다.
//접근제어자 private -> 인스턴스를 통한 내부 선언후 사용가능하지만 외부에서 호출하는것은 불가능하다.
class Person10 {
  constructor(public name:string, private age:number){}

  //getter()함수 생성 ->반환값 필요
  get getName(){
    console.log('getter')
    return this.name
  }

  //setter()함수 생성 -> 매개변수 필요
  set setName(set:string){
    console.log('setter')
    this.name = set
  }
}

const person10 : Person10 = new Person10('dong', 23)

console.log(person10)
console.log(person10.name) // get -> 데이터를 가져오는 함수 
person10.name = 'set dong' // set -> 데이터를 세팅하는 함수

console.log(person10.getName) // getter함수 호출 -> getter를 사용하면 호출하기전 특정 실행을 가능하게 한다.
person10.setName = 'dong' // setter함수 호출 -> setter를 사용하면 호출하기전 특정 실행을 가능하게 한다.

//위 예제이서 만든 getter()함수와 setter()함수를 사용하면 private 처리해서 접근할수 없는 매개변수를 수정하고 핸들링 할 수 있다,