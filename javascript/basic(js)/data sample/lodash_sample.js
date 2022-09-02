import _ from 'lodash'

//배열 두개 생성
const A = [
  {id: 1, name: "rama"},
  {id: 2, name: "남희"},
  {id: 3, name: "동영"}
]

const B = [
  {id: 1, name: "rama"},
  {id: 4, name: "요지"},
  {id: 5, name: "우주"}
]

// [ ========================= 두개의 배열 병합후 중복요소 제거 =========================]

const C = A.concat(B)
console.log("concat: ",C)
// uniqBy(중복제거할 배열, 제거의 기준) -> 병합된 요소 만 가능
console.log("uniqby: ",_.uniqBy(C,'id'))


const D = _.unionBy(A,B,'id')
// unionBy(병합할배열, 병합할배열, 제거의 기준) -> 병합할 요소 만 가능
console.log("unionby: ", D)


// [ ========================= 배열 내부 요소 탐색 =========================]

//find(탐색할 배열, 탐색 기준) -> 배열 내부 요소 반환
const finde = _.find(C, {id:1})
//findIndex(탐색할 배열, 탐색 기준) -> 배열 내부 요소 인덱스 번호 반환
const findeIndex = _.findIndex(C, {id:1})

console.log('finde: ' , finde)
console.log('findeIndex: ' , findeIndex)

// [ ========================= 배열 내부 요소 삭제 =========================]

const animal = [
  {종류 : '강아지',이름 : "예삐"},
  {종류 : '강아지',이름 : "뽀삐"},
  {종류 : '고양이',이름 : "치즈"},
  {종류 : '고양이',이름 : "장화"},
  {종류 : '망아지',이름 : "당근"},
]

// remove(배열, 탐색기준) -> 탐색된 요소를 제거하고 반환한다.
// 제거한 요소를 다른 변수에 할당 가능하다. 
// 기존의 배열의 내부 데이터 에 변화를 일으킨다.
const after = _.remove(animal, {종류: '강아지'})

console.log('animal: ', animal)
console.log('dog: ', after)

