// key of
interface IPerson{
  name:string,
  age: number
}


const Person16: IPerson = {
  name: 'Mark',
  age: 39,
}

// IPerson[keyof IPerson] 해석
// keyof은 인터페이스인 IPerson 그 자체를 타입으로 사용한다 즉 내부에있는 name,age 모두 사용하며 이는 string | number 를 사용하겠다는것과 다를바 없다.
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["name"]
// => string | number
// 결국 IPerson[keyof IPerson]만 사용하면 유니온타입으로 해석되기때 문에 타입 안전성이 높지 않다.

// T -> IPerson
// "k extends keyof T" -> T 즉 IPerson의 타입만을 사용하도록 상속받았는데 이는 유니온 타입이 됨을 의미하는게 아니라 IPerson에 있는 2개의 타입밖에 사용하지 못한다는것을 의미
// 즉 string은 string대로 number는 number대로 읽힌다.
function getProp<T, k extends keyof T>(obj:T, key: k): T[k]{
  return obj[key];
}


function setProp <T, k extends keyof T>(obj:T, key:k, value:T[k]){
  return obj[key] = value
}

setProp(Person16,"name",'seo')