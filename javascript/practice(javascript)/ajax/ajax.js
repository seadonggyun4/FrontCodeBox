// 접속자의 요청 -> GET, POST, PUT, DELETE
//서버 : 접속자가 요청을 하면 데이터를 갖다줌
//AJAX: 서버에다가 GET, POST, PUT, DELETE 요청을 할 수있게 도와주는데 새로고침 없이 요청할 수 있음

// 버튼을 클릭하면 ajax를 통한 요청이 시작된다.
$("#gethello").on("click", function () {
  // 지정한 url 에 GET요청을 하는 코드
  // 이렇게 되면 서버가 요청에 맞는 데이터를 가져다줌
  $.ajax({
    url: "https://codingapple1.github.io/data.json",
    type: "GET",
    //받아온 데이터는 json형태이다
    // 보통 서버와의 통신시 데이터 송수신읜 변질의 위험이 있어 json 형태로 전송한다.
    // 내부 값들의 키값이 "" 로 묶여있어 문자열,text 처럼 보이는 것이 특징
    // 받아온 json을 사용하기위해서는 json.parse() 라는 함수로 가공해야한다.
    // jquery를 쓰면 자동으로 json->object 로 변환된다.
  })
    .done(function (a) {
      $(".card-title").html("model : " + a.model);
      $(".card-text")
        .eq(0)
        .html("brand : " + a.brand);
      $(".card-text")
        .eq(1)
        .html("price : " + a.price);
      // attr 은 HTML속성을 다루는 jquery 메서드이다.
      // .attr(선택자, 부여할값) -> 선택자에 의해 선택된 요소에 하나이상의 속성을 부여할 수 있다.
      $(".card-img-top").attr("src", a.img);
    })
    .fail(function () {
      //ajax 실패시 실행할 코드
      alert("AJAX에 실패했습니다.");
    })
    .always(function () {
      //ajax 가 실패,성공하던 상관없이 항상 실행하는 코드
      // 로딩ui 같은것
    });
});
