// class => object를 생성
// object의 프로퍼티 key값이 가변적일때는?
// indexSignatures 를 사용


// 가변적인 key 값에 타입은 문자열 "male", "female" 로 출력되는 students 클래스 생성
class Students{
  [index: string] : "male" | "female"
}


//AClass 인스턴스 생성
const AClass : Students = new Students()
AClass.steve = 'male'
AClass.anna = 'female'

//BClass 인스턴스 생성
const BClass : Students = new Students()
BClass.jade = 'male'
BClass.mark = 'male'


console.log(AClass)
console.log(BClass)