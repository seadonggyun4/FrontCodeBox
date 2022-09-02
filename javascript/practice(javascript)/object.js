function sum(x, y) {
  return x + y;
}
//object는 배열(array)의 한 요소가 될 수도 있다.
let person = {
  name: "서동균",
  age: 10,
  height: 30,
  이력: { "첫번째 직장": "마인드랩", "두번째 직장": "마스크랩" },
  기능: sum,
};

person.소속 = "프론트 디벨로퍼";

document.write(`제 이름은 ${person.name} 입니다. <br>`);
document.write(`제 나이는 ${person.age} 입니다. <br>`);
document.write(`제 키는 ${person.height} 입니다. <br>`);

document.write(`제 이름은 ${person["name"]} 입니다. <br>`);
document.write(`제 나이는 ${person["age"]} 입니다. <br>`);
document.write(`제 키는 ${person["height"]} 입니다. <br>`);
document.write(`제 소속은 ${person["소속"]} 입니다. <br>`);
document.write(`제 이력은 ${person["이력"]["첫번째 직장"]} 입니다. <br>`);
document.write(`제 기능은 ${person["기능"](10, 20)} 입니다. <br>`);
