$("#show-menu").on("click", function () {
  $(".left-menu").animate({ marginLeft: "0px" }, 500);
});

//===================================================================================================================================
//기본js 로 모달창 띄우기
//class 선언뒤에는 항상 위치값을 기입해야한다.
// document
//   .getElementsByClassName("logbtn")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("black-background")[0].style.display =
//       "block";
//   });

//[jQuery 로 모달창 띄우기]
// $(".logbtn").on("click", function () {
//   $(".black-background").fadeIn();
// });

//[jQuery  css로 모달창 띄우기]
// $(".logbtn").on("click", function () {
//   $(".black-background").css("transform", "translateY(0px)");
// });

// $(".closebtn").on("click", function () {
//   $(".black-background").css("transform", "translateY(-1000px)");
// });

//[jQuery  addClass로 모달창 띄우기]
//addClass()의 파라미터에는 "."을 붙히지 않아도 된다.
$(".logbtn").on("click", function () {
  $(".black-background").addClass("slide-down");
});
$(".closebtn").on("click", function () {
  $(".black-background").addClass("slide-up");
});
//이벤트 버블링 현상이 일어난다.
// 이벤트 버블링 -> 자식요소에 이벤트가 발생할때 부모요소까지 이벤트의 효과를 받아버리는 현상
$(".black-background").on("click", function (e) {
  //e.target -> 지금실제로 클릭한 요소
  //e.currentTarget, $(this); -> 지금 이벤트리스너가 달린 곳
  //e.preventDefault(); -> 기본동작 막기

  // $(".black-background") 와 e.currentTarget 은 같은 요소를 가리키지만 jQuery문법과 바닐라js 문법이라는 차이점이 있기 때문에 안된다.
  if (e.currentTarget == e.target) {
    $(".black-background").addClass("slide-up");
  }
});
//===================================================================================================================================
// [기본js로 nav창 띄우기]
// document
//   .getElementsByClassName("nav-sub-button")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("nav-sub")[0].style.display = "block";
//   });

//jQuery로 nav창 변환
//scroll 이벤트 리스너는 무겁다
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".nav-menu").addClass("nav-black");
    $(".nav-menu h1").addClass("font-change ");
  } else if ($(window).scrollTop() < 100) {
    $(".nav-menu").removeClass("nav-black");
    $(".nav-menu h1").removeClass("font-change ");
  }
});

//jQuery로 nav창 띄우기
$(".nav-sub-button").on("click", function () {
  $(".nav-sub").slideToggle();
});
//===================================================================================================================================
// [form 창 email,password 비워져 있으면 전송안되게 제한 하는 함수]
$("form").on("submit", function (e) {
  // if ($("#email").val() == "" && $("#password").val() == "") {
  //   e.preventDefault();
  //   $("#email-alert").show();
  //   $("#password-alert").show();
  // } else if ($("#email").val() == "") {
  //   e.preventDefault();
  //   $("#email-alert").show();
  // } else if ($("#password").val() == "") {
  //   e.preventDefault();
  //   $("#password-alert").show();
  // }
  var 입력한이메일 = $("#email").val();
  var 입력한비밀번호 = $("#password").val();

  if (
    /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>().,;s@"]+.{0,1})+([^<>().,;:s@"]{2,}|[d.]+))$/.test(
      입력한이메일
    ) == false
  ) {
    e.preventDefault();
    $("#email-alert").show();
  } else if (입력한이메일 == "") {
    e.preventDefault();
    $("#email-alert").show();
  }

  if (/^[A-Za-z0-9]{6,12}$/.test(입력한비밀번호) == false) {
    e.preventDefault();
    $("#password-alert").show();
  } else if (입력한비밀번호 == "") {
    e.preventDefault();
    $("#password-alert").show();
  }
});

//===================================================================================================================================
// [삼육구게임 기본!]
// 먼저 input값과 버튼을 연결
// 버튼을 누르면 369게임 시작
$("#game").on("submit", function game() {
  if ($("#gameval").val() % 3 == 0 && $("#gameval").val() % 9 == 0) {
    console.log("박수*2");
  } else if ($("#gameval").val() % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
});
//===================================================================================================================================
//[캐러셀]
var 지금보이는사진 = 1;
$(".slide-next").on("click", function () {
  $(".slide-container").css(
    "transform",
    "translateX(-" + 지금보이는사진 + "00vw)"
  );
  if (지금보이는사진 < 2) {
    지금보이는사진 = 지금보이는사진 + 1;
  }
});

$(".slide-back").click(function () {
  $(".slide-container").css(
    "transform",
    "translateX(-" + (지금보이는사진 - 1) + "00vw)"
  );
  if (지금보이는사진 > 1) {
    지금보이는사진 = 지금보이는사진 - 1;
  }
});

// transform의 경우, classList.add(클래스명) 보다 인라인(element.style.속성() 의 형식)으로 적용하는 것이 더 잘 동작한다.
$(".slide-1").on("click", function () {
  /* x축의 위치를 해당 값으로 이동시키는 명령어 */
  $(".slide-container").css("transform", "translateX(0vw)");
});

$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
});

$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});
//===================================================================================================================================
//[탭 구현]
//for 반복문 사용
//length함수는 해당요소 개수를 파악한다.

//[====반복문으로 탭 구현하기=====]
// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       tabopen(i);
//     });
// }
//[====버블링을 이용해 탭 구현하기=====]
// 버블링 효과를 이해하고 상위 요소에만 이벤트 리스너를 달아도 동작한다
// 이벤트 리스너를 줄이면  1.코드 양이 줄고 2.반복문 안쓸수도 있고 3.컴퓨터가 자원의 램을 덜 사용할 수도 있다.
$(".list").on("click", function (e) {
  //if문을 쓰면 너무 확장성이 않좋아 진다.
  //html요소에 몰래 정보를 숨겨두는 dataset이라는 문법을 이용하면된다.
  tabopen(e.target.dataset.id);
});

function tabopen(i) {
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(i).addClass("active");
  $(".tab-content").eq(i).addClass("show");
}
//===================================================================================================================================
//[데이터 바인딩을 위한 상품 데이터]
var array = ["BMW", 520];
var object = { brand: "BMW", model: 520 };
var 자료 = [{ brand: "BMW" }, { model: 520 }];

document.getElementsByClassName("item-title")[0].innerHTML = array[0];
// $(".item-text").html(object.model);
$(".item-text").html(자료[1].model);
