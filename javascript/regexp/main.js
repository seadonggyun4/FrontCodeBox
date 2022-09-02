const str = `
010-2031-4241
ramama@gmail.com
https://heropy.blog/2018/10/28/regexp/&movie=frozen
The quick brown fox jumps over the lazy dog.
aabbcccdddd
`

console.log('================================= 정규식 ==================================')

//test
console.log( 'test 메서드:',/The/gi.test(str))
/*

  정규식 "/The/gi"  는 문자데이터중 The 에 해딩하는 값을 전부(g), 대소문자 구분없이(i) 가져온다는 의미이다.
 
 */

//replace
console.log('replace 메서드:' ,str.replace(/the/gi, 'HEY~~~~~~~~~~~~'))




// 사용할 수 있는 메서드는 많다. -> https://heropy.blog/2018/10/28/regexp/

/*
[ ==================== 정규식 활용 =========================]

*/


//  .:  임의의 문자를 의미 -> 전역적으로 임의으 문자를 하나씩 일치시켜 반환한다.(결국 문자열의 모든 문자가 반환됨)
console.log(str.match(/./g))



// \b -> 문자,숫자,_ 가 아닌 기호를 탐색
// \w -> 문자,숫자,- 를 탐색
// a{2,3} -> a와 일치하는 2이상 3이하의 값을 탐색 
// 결국 3자리 숫자,문자,_ 로 이루어진 값을 탐색!!!!!!! 
console.log(str.match(/\b\w{2,3}\b/g)) 


// 앞뒤로 바운더리 설정 -> \b
// f\w{1,} -> f로 시작하고 다음 이어지는 값은 1개 이상의 " 문자,숫자,_ " 
// 즉 f로 시작하는 모든 문자를 탐색하는 정규식
console.log(str.match(/\bf\w{1,}\b/g))


// @ 기호를 기준으로 앞쪽탐색
// \w{1,} -> (숫자,문자,_) 문자가 1개 이상으로 탐색
console.log(str.match(/\w{1,}(?=@)/g))

// @ 기호를 기준으로 뒤쪽탐색
// .{1,} -> 임의의 문자가 1개 이상으로 탐색
console.log(str.match(/(?<=@).{1,}/g))