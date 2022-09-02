interface Person4 {
  name: string
  age? : number
  //읽기전용속성 -> readonly
  readonly ronly: boolean
}

const person: Person4 = {
  name: 'dong',
  ronly: true
}


// 읽기 전용속성은 한번 값을 할당하면 다시 재할당이 불가능하다.
// person.ronly = 'flase'