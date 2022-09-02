import _ from 'lodash'



const user = {
  name: 'rama',
  age: 23,
  //이메일은 배열로 처리
  emails: ['rama44214@naver.com']
}

const copyUser1 = user
console.log('객체 직접 할당: ',user === copyUser1,copyUser1,user )


/*
  [ 얕은 복사(shallow copy) ]

  - 객체 내부의 값을 일일이 따로 복사하는것이 아닌 표면만 복사해 다른 메모리 주소로 넣는것
  - 복사할 객체 내부 에 "참조형 데이터" 가 있다면 이 데이터 들은 복사본과 원본 모두 같은 주소를 가리키고 있다.
  
  - 예) 위 user 객체의 emails 의 값은 배열 이기 때문에 얕은 복사 방법을 써서 객체를 다른 메모리에 저장하더라도
        내부 emails 의 배열값은 원본, 복사본 모두 같은 주소를 가리킨다.


  - 방법
      1. Object.assign() 을 사용
      2. 전개 연산자를 사용
*/

console.log('===================== 얕은 복사 =================')

const copyUser2 = Object.assign({},user)
console.log('Object.assign() 객체할당: ',user === copyUser2,copyUser2,user )

const copyUser3 = {...user}
console.log('전개연산자로 객체 할당: ',user === copyUser3,copyUser3,user )

user.emails.push('neo@naver.com');
console.log('user & Object.assign()객체의 email 비교:  ', user.emails === copyUser2.emails, copyUser2.emails, user.emails)


/*
  [ 깊은 복사(shallow copy) ]
  - 객체 내부 깊이 있는 "참조형 데이터" 도 모두 다른 주소로 할당하여 복사하는 방법
  - 바닐라 js 로 구현하는데 한계가 있어 "lodash" 라이브러리 모듈 사용


  - 사용방법
          : "const 객체명 = _.cloneDeep(복사할 객체명)"
*/
console.log('===================== 깊은 복사 =================')

// 깊은복사 객체 생성
const copyUser4 = _.cloneDeep(user)

//비교를 위한 내부email 배열에 값 추가
user.emails.push('hello@naver.com');
// 깊은 복사 copyUser4는 값이 추가 되지 않았다. 
// 즉 깊은복사 객체 내부 email 배열은 user 내부 email 배열과 주소를 겸하지 않는다.
console.log('user & 깊은복사 email 비교:  ', user.emails === copyUser4.emails, copyUser4.emails, user.emails)