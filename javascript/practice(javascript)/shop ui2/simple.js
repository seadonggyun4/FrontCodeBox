// **웹서비스 개발방식은 두가지가 있습니다**

// 서버사이드 랜더링

// 1. 서버에서 HTML 파일을 미리 다 완성해서 보내주기

// 클라이언트 사이드 랜더링

// 2. 서버에서 텅빈 HTML 파일 + 상품데이터만 보내고 HTML을 완성하는건 프론트엔드에서 자바스크립트로 시키기

//서버로부터 받아왔다 가정한 데이터
var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 기존의 products를 cloneproducts에 새롭게 담는다.
// 데이터를 정렬하기 위해 조작하는 과정에서 기존의 배열 순서가 흐트러지기때문에 원본을 보호하기 위함
var cloneproducts = [...products];

// ======================================================================================================================
//[html에 데이터를 넣기위한 틀이 없어 동적으로 바인딩 하기위함]

// 데이터 바인딩 함수는 파라메터로 list라는 변수로 선언된 배열들을 받는다.
// 인자로 받은 배열의 데이터를을 추출후 템플릿에 담아 화면에 뿌려준다.
function 데이터바인딩(list) {
  list.forEach(function (a) {
    var template = `<div class="card">
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5>${a.title}</h5>
      <p>가격 : ${a.price}</p>
    </div>
    <button class="btn btn-danger">주문하기</button>
  </div>`;
    //반복될때 마다 붙어야 되고 template은 반복문 내부에 있기 때문에 반복문 내부에서 append
    // $(".card-group").eq(i).append(template); -> eq()때문에 해당 인덱스에 template를 넣게 된다.
    $(".card-group").append(template);
  });
}
데이터바인딩(cloneproducts);

// ======================================================================================================================
// [바인딩 된 데이터 값을 가격순 으로 정렬]
$("#sortprice").on("click", function () {
  //card-body내부의 값들을 계속해서 초기화 한다.
  $(".card-group").html("");
  //정렬을 위한 함수 sort()
  // sort()자체는 문자열 정렬을 위한 함수이기 때문에 추가적인 조작이 필요하다.
  // sort()를 하면 원래 데이터가 변형되서 저장됨
  cloneproducts.sort(function (a, b) {
    // a-b가 양수 이면 b를 왼쪽으로 넘기고 , a-b가  음수이면 둘다 그자리 그대로있는다.
    return a.price - b.price;
  });
  // 정렬된 데이터를 다시 html에서도 표현하기위한 재 바인딩
  데이터바인딩(cloneproducts);
});
// ======================================================================================================================
// [바인딩 된 데이터 값을 가나다순 이름 정렬]
$("#abc").on("click", function () {
  $(".card-group").html("");
  cloneproducts.sort(function (a, b) {
    //문자열은 빼기 값이 안나오고, 비교를 했을때 부울 타입으로 나온다.
    //크기를 비교해서 b가 더 크다는 결론이 나오면 부울타입 true가 나온다
    // if()문을써서 맞을 시에  음수를 return해 두 글자 그자리 그대로있게 한다.
    if (a.title < b.title == true) {
      return -1;
    } else {
      return 1;
    }
  });

  // 정렬된 데이터를 다시 html에서도 표현하기위한 재 바인딩
  데이터바인딩(cloneproducts);
});
// ======================================================================================================================
// [바인딩 된 데이터 값을 다나가순 이름 정렬]
$("#cba").on("click", function () {
  $(".card-group").html("");
  cloneproducts.sort(function (a, b) {
    if (a.title < b.title == false) {
      return -1;
    } else {
      return 1;
    }
  });
  // 정렬된 데이터를 다시 html에서도 표현하기위한 재 바인딩
  데이터바인딩(cloneproducts);
});
// ======================================================================================================================
// [filter 함수 를 사용해 조건에 충족하는 가격만 출력]
$("#filterprice").on("click", function () {
  $(".card-group").html("");
  //filter 함수는 배열에서 일부를 복사한뒤 다른 배열에 넣는다. -> 반드시 새로생성할 변수 지정
  var filterproducts = products.filter(function (a) {
    return a.price <= 60000;
  });
  //a는 당연히 filterproducts 내부로 복사된 object 값이다.
  데이터바인딩(filterproducts);
});
// ======================================================================================================================
// [보호된 원본 배열을 통한 초기화 버튼 구현]
$("#reset").on("click", function () {
  $(".card-group").html("");
  데이터바인딩(products);
});
// ======================================================================================================================
// sort()는 문자 정렬 함수
var 어레이 = ["가", "라", "마", "다", "나"];
어레이.sort();
console.log(어레이);
var 어레이 = ["a", "d", "b", "e", "c"];
어레이.sort();
console.log(어레이);
// sort()는  숫자는 앞의자리 숫자를 기준으로 정렬이되버린다. 함수
var 어레이 = ["1", "3", "4", "21", "5"];
어레이.sort();
console.log(어레이);
