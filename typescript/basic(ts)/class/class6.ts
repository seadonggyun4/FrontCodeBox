/*
[싱글톤 패턴]
- class는 object를 만들기 위함
- 싱글톤 패턴의 object는 construct를 쓰지 않아 외부에서 new 로 계속해서 객체 생성 불가
- getInsctance()함수를 통해 객체를 하나만 만들고 그 객체 내부 값을 계속 수정하고 할당하는 방식

*/
class Person13 {
  //private -> 외부에서 접근하지 못하는 프로퍼티 생성 -> type: string | null, 기본값: null 
  private static Name:string | null = null
  
  //외부에서 접근 가능한 메소드 getInstance
  public static getInsctance(name:string):Person13{
    //object -> null 값일때 인자값 name을 할당
    //object -> null 이 아닐때도 인자값 name을 할당
    if(Person13.Name === null){
      Person13.Name = name
    } else{
      Person13.Name = name
    }
    // 객체타입 Person13을 반환
    return Person13
  }
  
}


// 객체가 2개가 생성이 되어버린다.
// const aaa:Person13 =  Person13.name
// const bbb:Person13 = new Person13


// aaa,bbb,ccc 3개의 타입은 동일
// aaa,bbb,ccc 각각 인자값을 다른 값으로 넣는다.
// 마지막에 출력된 aaa의 값은 ccc와 동일
const aaa:Person13 = Person13.getInsctance('dong')
console.log(aaa)
const bbb:Person13 = Person13.getInsctance('gyun')
console.log(bbb)
const ccc:Person13 = Person13.getInsctance('god')
console.log(ccc)
console.log(aaa)
console.log(aaa === bbb && aaa === ccc && ccc === bbb)


