// document.getElementById('test').innerHTML = '???'; -> 기본js
// document.querySelector("#test"); -> 기본js
//[제이쿼리에서는?]
// id 값은 # , class는 .
$("#test").html("안녕");
$("#test").addClass("yellow-bg"); // 클래스 추가함수

//jQuery를 안쓸때는 여러번 선언해야한다.
// document.getElementsByClassName("greeting")[0].innerHTML = "안녕";
// document.getElementsByClassName("greeting")[1].innerHTML = "안녕";
// document.getElementsByClassName("greeting")[2].innerHTML = "안녕";

//jQuery를 사용하면 단축가능
$(".greeting").html("안녕");

//jQuery를 통해 효과도 간단하게 부여가능하다.
// document
//   .getElementsByClassName("btn")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("greeting")[0].style.display = "none";
//   });

$(".btn")
  .eq(0)
  .on("click", function () {
    $(".greeting").hide();
  });

$(".btn")
  .eq(1)
  .on("click", function () {
    $(".greeting").show();
  });
