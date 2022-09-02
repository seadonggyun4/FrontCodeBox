const numbers = [2,5,2,4]
const fruits = ['apple', 'banana', 'cherry']



/* 
  filter()
  - 기본적인 선언문은 map()와 동일
  - 새로운 배열이 생성된다.
  - 반환값을 기준에 맞는지 boolen 데이터를 확인하여 값이 true인  원본값만을 반환
 */

  //map()
  const mapN = numbers.map(item => {
    return item < 3
  })
  console.log(mapN)

  //filter()
  // 화살표 함수를 한단계 더 단축
  const filterN = numbers.filter(item =>  item < 3)
  console.log(filterN)




  /*
    find() & findIndex()
    - find() 매서드는 배열의 첫번째 요소부터 탐색하여 기준에 부합하는 첫번째 값이 나올때 그 값을 반환한다.
    - findIndex() 매서드는 배열의 첫번째 요소부터 탐색하여 기준에 부합하는 첫번째 값이 나올때 그 값의 index 번호를 반환한다. 

  */

    const findN = numbers.find(item => item > 3)
    console.log(findN) //5

    const findIndexN = numbers.findIndex(item => item > 3)
    console.log(findIndexN) //1


    


    /*
      include()
      - 배열에 탐색할 값이 포함되어있는지 확인한뒤 boolen 값으로 반환
      - include(탐색할 값)
    */

      const includeN = numbers.includes(5)
      console.log(includeN)


    /*
      push() & unshift()
      - 두 매소드 모두 원본 배열이 수정된다!!!!
      - push(값): 배열의 맨 뒷부분에 값이 추가된다.
      - unshift(값): 배열의 맨 앞부분에 값이 추가된다. 
    */

      numbers.push(10)
      console.log(numbers)
      numbers.unshift(9)
      console.log(numbers)


      /*
        reverse()
        - 원본 배열이 수정된다!!!!!
        - 배열의 순서를 뒤집는다.
      */
     
        numbers.reverse()
        console.log(numbers)
        numbers.reverse()
        console.log(numbers)


      /*
        splice()
        - 원본 배열이 수정된다!!!!!
        - splice(인덱스번호, 제거할요소갯수, 추가할 요소)
        - 요소를 제거하고 그 자리에 값을 추가하거나 추가하지않고 제거만 하는 용도로 사용된다.
        - 또는 아무런 요소를 제거하지 한고 특정 번호에 값을 추가할때도 사용된다.
      */

        //인덱스 번호 2번부터 0개의 요소를 삭제하고 그 자리에 999를 넣는다.
        numbers.splice(2,0,999)
        console.log(numbers)