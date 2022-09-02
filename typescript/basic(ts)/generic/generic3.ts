
//array generic
function helloArray <T> (message: T[]): T {
  return message[0]
}

helloArray(['hello', 'world']) // T -> string타입으로 인식된다.
helloArray(['hello',23])// T -> sting | number 유니온타입으로 인식된다.



//tuple generic
function helloTuple <T,D>(message: [T,D]):T{
  return message[0]
}

helloTuple(['hello','world'])// [string,string]인 tuple로 인식
helloTuple(['hello',23])// [string,number]인 tuple로 인식
